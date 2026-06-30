// Frontend-only auth scaffolding for a future ASP.NET Core REST API.
// All calls go through fetch() against placeholder /api/* endpoints.
// If the backend is not available, a local mock kicks in so the admin
// dashboard remains usable during frontend development.

import { useEffect, useState } from "react";

const TOKEN_KEY = "callas.jwt";
const USER_KEY = "callas.user";
const EVT = "callas:auth";

// Demo credentials used by the mock fallback. Replace with real backend.
const DEMO_USER = "admin";
const DEMO_PASS = "callas2026";

export type AuthUser = { username: string; displayName: string; role: "admin" };

export type LoginResponse = { token: string; user: AuthUser };

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(TOKEN_KEY);
}

export function getUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return !!getToken();
}

function emit() {
  window.dispatchEvent(new CustomEvent(EVT));
}

export async function login(username: string, password: string): Promise<LoginResponse> {
  // 1) Try the real backend.
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      const data = (await res.json()) as LoginResponse;
      window.localStorage.setItem(TOKEN_KEY, data.token);
      window.localStorage.setItem(USER_KEY, JSON.stringify(data.user));
      emit();
      return data;
    }
    if (res.status === 401) throw new Error("Invalid username or password.");
    // any other status — fall through to mock so dev still works
  } catch (e) {
    // Network / 404: backend not wired yet. Use mock fallback below.
    if (e instanceof Error && e.message === "Invalid username or password.") throw e;
  }

  // 2) Mock fallback (frontend-only mode).
  if (username === DEMO_USER && password === DEMO_PASS) {
    const data: LoginResponse = {
      token: "mock." + btoa(`${username}:${Date.now()}`),
      user: { username, displayName: "Callas Admin", role: "admin" },
    };
    window.localStorage.setItem(TOKEN_KEY, data.token);
    window.localStorage.setItem(USER_KEY, JSON.stringify(data.user));
    emit();
    return data;
  }
  throw new Error("Invalid username or password.");
}

export async function logout(): Promise<void> {
  try {
    await fetch("/api/auth/logout", {
      method: "POST",
      headers: authHeader(),
    });
  } catch {
    /* mock mode */
  }
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(USER_KEY);
  emit();
}

export function authHeader(): Record<string, string> {
  const t = getToken();
  return t ? { Authorization: `Bearer ${t}` } : {};
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setUser(getUser());
    setReady(true);
    const sync = () => setUser(getUser());
    window.addEventListener(EVT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  return { user, ready, isAuthenticated: !!user };
}
