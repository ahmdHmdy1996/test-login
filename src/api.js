// Simple API helper. By default it calls same-origin endpoints at /api/*. If your backend runs elsewhere,
// set API_BASE to the backend origin (for example: 'http://localhost:4000').
const API_BASE = "https://caterflow-backend.onrender.com/api";

async function post(path, body) {
  const res = await fetch(API_BASE + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}

export function login(credentials) {
  return post("/auth/login", credentials);
}

export function register(data) {
  return post("/auth/register", data);
}
