// Real REST client. JWT is stored in an httpOnly cookie by the backend
// (see /backend). We keep a small non-sensitive flag in localStorage so
// route guards can render synchronously — the actual authorization is
// always enforced server-side against the cookie.

const BASE_URL =
  (typeof import.meta !== "undefined" &&
    (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_API_URL) ||
  "http://localhost:8000";
const FLAG_KEY = "callas_admin_session";

export const auth = {
  set: (user: { email: string; name: string }) =>
    localStorage.setItem(FLAG_KEY, JSON.stringify(user)),
  clear: () => localStorage.removeItem(FLAG_KEY),
  user: () => {
    if (typeof localStorage === "undefined") return null;
    try { return JSON.parse(localStorage.getItem(FLAG_KEY) || "null"); }
    catch { return null; }
  },
  isAuthenticated: () =>
    typeof localStorage !== "undefined" && Boolean(localStorage.getItem(FLAG_KEY)),
};

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);
  if (!(init.body instanceof FormData)) headers.set("Content-Type", "application/json");
  let res: Response;
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      ...init,
      headers,
      credentials: "include", // send/receive httpOnly cookie
    });
  } catch {
    throw new Error(
      "Cannot reach the Callas backend. Start it with `uvicorn main:app --reload` in the /backend folder.",
    );
  }
  if (res.status === 401) {
    auth.clear();
    throw new Error("Unauthorized");
  }
  if (!res.ok) {
    let detail = "";
    try { const j = await res.json(); detail = j?.detail || ""; } catch { /* ignore */ }
    throw new Error(detail || `Request failed (${res.status})`);
  }
  const ct = res.headers.get("content-type") || "";
  return (ct.includes("application/json") ? await res.json() : ({} as unknown)) as T;
}

export const api = {
  login: async (email: string, password: string) => {
    const res = await request<{ user: { email: string; name: string } }>(
      "/api/auth/login",
      { method: "POST", body: JSON.stringify({ email, password }) },
    );
    auth.set(res.user);
    return res;
  },
  logout: async () => {
    try { await request("/api/auth/logout", { method: "POST" }); } catch { /* noop */ }
    auth.clear();
  },
  me: () => request<{ user: { email: string; name: string } }>("/api/auth/me"),
  list: <T>(resource: string) => request<T[]>(`/api/${resource}`),
  get: <T>(resource: string, id: string) => request<T>(`/api/${resource}/${id}`),
  create: <T>(resource: string, body: unknown) =>
    request<T>(`/api/${resource}`, { method: "POST", body: JSON.stringify(body) }),
  update: <T>(resource: string, id: string, body: unknown) =>
    request<T>(`/api/${resource}/${id}`, { method: "PUT", body: JSON.stringify(body) }),
  remove: (resource: string, id: string) =>
    request(`/api/${resource}/${id}`, { method: "DELETE" }),
  changePassword: (current: string, next: string) =>
    request("/api/auth/password", { method: "PUT", body: JSON.stringify({ current, new: next }) }),
  ping: () => request<{ ok: boolean }>("/api/health"),
};