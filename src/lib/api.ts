// Placeholder REST API client. Calls /api/* on the same origin.
// A real ASP.NET Core backend will satisfy these routes; until then,
// callers should be prepared to handle network failures gracefully
// (the admin store falls back to local data).

import { authHeader } from "./auth";

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(path, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
      ...(init.headers ?? {}),
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return (await res.json()) as T;
}

export const api = {
  posts: {
    list: () => request("/api/posts"),
    create: (body: unknown) => request("/api/posts", { method: "POST", body: JSON.stringify(body) }),
    update: (id: string, body: unknown) => request(`/api/posts/${id}`, { method: "PUT", body: JSON.stringify(body) }),
    remove: (id: string) => request(`/api/posts/${id}`, { method: "DELETE" }),
  },
  events: {
    list: () => request("/api/events"),
    create: (body: unknown) => request("/api/events", { method: "POST", body: JSON.stringify(body) }),
  },
  team: { list: () => request("/api/team") },
  gallery: { list: () => request("/api/gallery") },
  messages: { list: () => request("/api/messages") },
};
