// Simple API helper. By default it calls same-origin endpoints at /api/*. If your backend runs elsewhere,
// set API_BASE to the backend origin (for example: 'http://localhost:4000').
const API_BASE = "https://caterflow-backend.onrender.com/api";

import axios from "axios";

async function post(path, body) {
  const res = await axios.post(API_BASE + path, body, {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
}

export function login(credentials) {
  return post("/auth/login", credentials);
}

export function register(data) {
  return post("/auth/register", data);
}
