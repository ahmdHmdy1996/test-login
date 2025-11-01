import React, { useState } from "react";
import { login } from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("Sending...");
    try {
      const res = await login({ email, password });
      setMessage(JSON.stringify(res));
    } catch (err) {
      setMessage("Error: " + (err.message || err));
    }
  }

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      {message && <pre className="response">{message}</pre>}
    </div>
  );
}
