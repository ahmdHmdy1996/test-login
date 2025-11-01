// API helper using same-origin proxy to backend
// الطلبات تروح لـ /api/... على نفس الدومين (First-Party Cookies)
import axios from "axios";

async function post(path, body) {
  const res = await axios.post("/api" + path, body, {
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
