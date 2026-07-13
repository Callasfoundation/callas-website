"""
Callas Foundation backend — FastAPI + SQLite.

JWT is delivered to the browser via a **secure, httpOnly cookie** so it can
never be read by JavaScript (XSS-safe). All admin-only endpoints require
that cookie plus a valid signature. See README.md for setup.
"""
from __future__ import annotations

import os
import uuid
from datetime import datetime, timedelta, timezone
from typing import Optional, Type

from dotenv import load_dotenv  # type: ignore
from fastapi import Cookie, Depends, FastAPI, HTTPException, Request, Response, status
from fastapi.middleware.cors import CORSMiddleware
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel, EmailStr
from sqlmodel import Field, Session, SQLModel, create_engine, select

# --------------------------------------------------------------------------
# Config
# --------------------------------------------------------------------------
try:
    load_dotenv()
except Exception:
    pass

JWT_SECRET = os.getenv("JWT_SECRET", "dev-insecure-change-me")
JWT_ALGO = "HS256"
JWT_TTL_HOURS = 12
COOKIE_NAME = "callas_session"
COOKIE_SECURE = os.getenv("COOKIE_SECURE", "false").lower() == "true"
CORS_ORIGINS = [o.strip() for o in os.getenv(
    "CORS_ORIGINS",
    "http://localhost:5173,http://localhost:8080,http://localhost:3000",
).split(",") if o.strip()]

SEED_ADMIN_EMAIL = os.getenv("ADMIN_EMAIL", "erkahwanga@gmail.com")
SEED_ADMIN_USERNAME = os.getenv("ADMIN_USERNAME", "admin")
SEED_ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD", "callas2026")

DB_URL = "sqlite:///./callas.db"
engine = create_engine(DB_URL, connect_args={"check_same_thread": False})
pwd = CryptContext(schemes=["bcrypt"], deprecated="auto")


# --------------------------------------------------------------------------
# Models
# --------------------------------------------------------------------------
def _id() -> str:
    return str(uuid.uuid4())

def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


class AdminUser(SQLModel, table=True):
    id: str = Field(default_factory=_id, primary_key=True)
    email: str = Field(index=True, unique=True)
    username: str
    password_hash: str
    created_at: str = Field(default_factory=_now)


class Post(SQLModel, table=True):
    id: str = Field(default_factory=_id, primary_key=True)
    title: str = ""
    category: str = ""
    date: str = ""
    excerpt: str = ""
    body: str = ""
    image: str = ""
    author: str = ""
    created_at: str = Field(default_factory=_now)


class Event(SQLModel, table=True):
    id: str = Field(default_factory=_id, primary_key=True)
    title: str = ""
    date: str = ""
    time: str = ""
    location: str = ""
    category: str = ""
    excerpt: str = ""
    body: str = ""
    image: str = ""
    created_at: str = Field(default_factory=_now)


class Team(SQLModel, table=True):
    id: str = Field(default_factory=_id, primary_key=True)
    name: str = ""
    role: str = ""
    bio: str = ""
    image: str = ""
    created_at: str = Field(default_factory=_now)


class Gallery(SQLModel, table=True):
    id: str = Field(default_factory=_id, primary_key=True)
    url: str = ""
    caption: str = ""
    created_at: str = Field(default_factory=_now)


class Message(SQLModel, table=True):
    id: str = Field(default_factory=_id, primary_key=True)
    name: str = ""
    email: str = ""
    subject: str = ""
    message: str = ""
    created_at: str = Field(default_factory=_now)


class Impact(SQLModel, table=True):
    id: str = Field(default_factory=_id, primary_key=True)
    label: str = ""
    value: int = 0
    suffix: str = ""
    sort: int = 0
    created_at: str = Field(default_factory=_now)


RESOURCE_MAP: dict[str, Type[SQLModel]] = {
    "posts": Post,
    "events": Event,
    "team": Team,
    "gallery": Gallery,
    "messages": Message,
    "impact": Impact,
}


# --------------------------------------------------------------------------
# Auth helpers
# --------------------------------------------------------------------------
class LoginIn(BaseModel):
    email: str
    password: str

class PasswordChange(BaseModel):
    current: str
    new: str


def make_token(user: AdminUser) -> str:
    payload = {
        "sub": user.id,
        "email": user.email,
        "exp": datetime.now(timezone.utc) + timedelta(hours=JWT_TTL_HOURS),
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGO)


def current_admin(
    callas_session: Optional[str] = Cookie(default=None, alias=COOKIE_NAME),
) -> AdminUser:
    if not callas_session:
        raise HTTPException(status_code=401, detail="Not authenticated")
    try:
        data = jwt.decode(callas_session, JWT_SECRET, algorithms=[JWT_ALGO])
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired session")
    with Session(engine) as db:
        user = db.get(AdminUser, data.get("sub"))
        if not user:
            raise HTTPException(status_code=401, detail="User not found")
        return user


def set_session_cookie(resp: Response, user: AdminUser) -> None:
    resp.set_cookie(
        COOKIE_NAME,
        make_token(user),
        max_age=JWT_TTL_HOURS * 3600,
        httponly=True,
        secure=COOKIE_SECURE,
        samesite="lax",
        path="/",
    )


# --------------------------------------------------------------------------
# App
# --------------------------------------------------------------------------
app = FastAPI(title="Callas Foundation API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup() -> None:
    SQLModel.metadata.create_all(engine)
    with Session(engine) as db:
        exists = db.exec(select(AdminUser).where(AdminUser.email == SEED_ADMIN_EMAIL)).first()
        if not exists:
            db.add(AdminUser(
                email=SEED_ADMIN_EMAIL,
                username=SEED_ADMIN_USERNAME,
                password_hash=pwd.hash(SEED_ADMIN_PASSWORD),
            ))
            db.commit()
            print(f"[callas] seeded admin: {SEED_ADMIN_EMAIL}")
        has_impact = db.exec(select(Impact)).first()
        if not has_impact:
            for i, m in enumerate([
                ("Lives impacted", 12400, "+"),
                ("Meals served daily", 500, "+"),
                ("First responders trained", 240, "+"),
                ("Years of service", 30, "+"),
            ]):
                db.add(Impact(label=m[0], value=m[1], suffix=m[2], sort=i))
            db.commit()
            print("[callas] seeded impact metrics")


@app.get("/api/health")
def health() -> dict:
    return {"ok": True, "time": _now()}


# ---- Auth routes ----------------------------------------------------------
@app.post("/api/auth/login")
def login(body: LoginIn, response: Response) -> dict:
    with Session(engine) as db:
        user = db.exec(select(AdminUser).where(AdminUser.email == body.email)).first()
        if not user or not pwd.verify(body.password, user.password_hash):
            raise HTTPException(status_code=401, detail="Invalid credentials")
        set_session_cookie(response, user)
        return {"user": {"email": user.email, "name": user.username}}


@app.post("/api/auth/logout")
def logout(response: Response) -> dict:
    response.delete_cookie(COOKIE_NAME, path="/")
    return {"ok": True}


@app.get("/api/auth/me")
def me(user: AdminUser = Depends(current_admin)) -> dict:
    return {"user": {"email": user.email, "name": user.username}}


@app.put("/api/auth/password")
def change_password(body: PasswordChange, user: AdminUser = Depends(current_admin)) -> dict:
    if not pwd.verify(body.current, user.password_hash):
        raise HTTPException(status_code=403, detail="Current password is incorrect")
    if len(body.new) < 8:
        raise HTTPException(status_code=400, detail="New password must be at least 8 characters")
    with Session(engine) as db:
        db_user = db.get(AdminUser, user.id)
        if db_user is None:
            raise HTTPException(status_code=404, detail="User not found")
        db_user.password_hash = pwd.hash(body.new)
        db.add(db_user)
        db.commit()
    return {"ok": True}


# ---- Generic resource routes ---------------------------------------------
def _model(resource: str) -> Type[SQLModel]:
    if resource not in RESOURCE_MAP:
        raise HTTPException(status_code=404, detail="Unknown resource")
    return RESOURCE_MAP[resource]


@app.get("/api/{resource}")
def list_items(resource: str) -> list[dict]:
    Model = _model(resource)
    with Session(engine) as db:
        rows = db.exec(select(Model)).all()
        return [r.model_dump() for r in rows]


@app.get("/api/{resource}/{item_id}")
def get_item(resource: str, item_id: str) -> dict:
    Model = _model(resource)
    with Session(engine) as db:
        row = db.get(Model, item_id)
        if row is None:
            raise HTTPException(status_code=404, detail="Not found")
        return row.model_dump()


@app.post("/api/{resource}")
async def create_item(
    resource: str,
    request: Request,
    callas_session: Optional[str] = Cookie(default=None, alias=COOKIE_NAME),
) -> dict:
    # Public contact form: anyone can post a message. Everything else requires admin.
    if resource != "messages":
        _ = current_admin(callas_session)
    Model = _model(resource)
    body = await request.json()
    clean = {}
    for k, v in body.items():
        if k not in Model.model_fields or k == "id":
            continue
        ann = Model.model_fields[k].annotation
        if ann is int and isinstance(v, str):
            try: v = int(v or 0)
            except ValueError: v = 0
        clean[k] = v
    obj = Model(**clean)
    with Session(engine) as db:
        db.add(obj)
        db.commit()
        db.refresh(obj)
        return obj.model_dump()


@app.put("/api/{resource}/{item_id}")
async def update_item(
    resource: str,
    item_id: str,
    request: Request,
    _: AdminUser = Depends(current_admin),
) -> dict:
    Model = _model(resource)
    body = await request.json()
    with Session(engine) as db:
        row = db.get(Model, item_id)
        if row is None:
            raise HTTPException(status_code=404, detail="Not found")
        for k, v in body.items():
            if k in Model.model_fields and k != "id":
                ann = Model.model_fields[k].annotation
                if ann is int and isinstance(v, str):
                    try: v = int(v or 0)
                    except ValueError: v = 0
                setattr(row, k, v)
        db.add(row)
        db.commit()
        db.refresh(row)
        return row.model_dump()


@app.delete("/api/{resource}/{item_id}")
def delete_item(
    resource: str,
    item_id: str,
    _: AdminUser = Depends(current_admin),
) -> dict:
    Model = _model(resource)
    with Session(engine) as db:
        row = db.get(Model, item_id)
        if row is None:
            raise HTTPException(status_code=404, detail="Not found")
        db.delete(row)
        db.commit()
        return {"ok": True}