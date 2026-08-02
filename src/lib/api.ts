// Real REST client for Callas.API (ASP.NET Core, JWT bearer auth).

const BASE_URL =
  (typeof import.meta !== "undefined" &&
    (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_API_URL) ||
  "http://localhost:5296";

const TOKEN_KEY = "callas_admin_token";
const USER_KEY = "callas_admin_user";

export type AdminUser = { id: number; username: string; displayName: string; role: string };

export const auth = {
  setSession: (token: string, user: AdminUser) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },
  clear: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
  token: () => (typeof localStorage === "undefined" ? null : localStorage.getItem(TOKEN_KEY)),
  user: (): AdminUser | null => {
    if (typeof localStorage === "undefined") return null;
    try { return JSON.parse(localStorage.getItem(USER_KEY) || "null"); }
    catch { return null; }
  },
  isAuthenticated: () => typeof localStorage !== "undefined" && Boolean(localStorage.getItem(TOKEN_KEY)),
};

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);
  if (!(init.body instanceof FormData)) headers.set("Content-Type", "application/json");
  const token = auth.token();
  if (token) headers.set("Authorization", `Bearer ${token}`);

  let res: Response;
  try {
    res = await fetch(`${BASE_URL}${path}`, { ...init, headers });
  } catch {
    throw new Error(
      `Cannot reach the Callas backend at ${BASE_URL}. Start it with \`dotnet run\` in Callas.API/.`,
    );
  }

  if (res.status === 401) {
    auth.clear();
    throw new Error("Unauthorized");
  }
  if (!res.ok) {
    let detail = "";
    try { const j = await res.json(); detail = j?.message || j?.Message || j?.title || ""; } catch { /* ignore */ }
    throw new Error(detail || `Request failed (${res.status})`);
  }
  if (res.status === 204) return {} as T;
  const ct = res.headers.get("content-type") || "";
  return (ct.includes("application/json") ? await res.json() : ({} as unknown)) as T;
}

export const api = {
  login: async (username: string, password: string) => {
    const res = await request<{ token: string; user: AdminUser }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    auth.setSession(res.token, res.user);
    return res;
  },
  logout: async () => {
    try { await request("/api/auth/logout", { method: "POST" }); } catch { /* noop */ }
    auth.clear();
  },
  changePassword: (current: string, next: string) =>
    request("/api/auth/password", {
      method: "PUT",
      body: JSON.stringify({ currentPassword: current, newPassword: next }),
    }),
  list: <T>(resource: string) => request<T[]>(`/api/${resource}`),
  get: <T>(resource: string, id: string) => request<T>(`/api/${resource}/${id}`),
  create: <T>(resource: string, body: unknown) =>
    request<T>(`/api/${resource}`, { method: "POST", body: JSON.stringify(body) }),
  update: <T>(resource: string, id: string, body: unknown) =>
    request<T>(`/api/${resource}/${id}`, { method: "PUT", body: JSON.stringify(body) }),
  remove: (resource: string, id: string) =>
    request(`/api/${resource}/${id}`, { method: "DELETE" }),
  markContactRead: (id: string, isRead: boolean) =>
    request(`/api/contact/${id}/status`, { method: "PATCH", body: JSON.stringify({ isRead }) }),
  markVolunteerRead: (id: string, isRead: boolean) =>
    request(`/api/volunteers/${id}/status`, { method: "PATCH", body: JSON.stringify({ isRead }) }),
  ping: () => request<{ ok: boolean }>("/api/health"),
};