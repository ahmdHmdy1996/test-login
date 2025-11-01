import React, { useState } from "react";
import { register } from "../api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("Sending...");
    try {
      const res = await register({ name, email, password });
      setMessage(JSON.stringify(res));
    } catch (err) {
      setMessage("Error: " + (err.message || err));
    }
  }

  return (
    <div className="card">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
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
        <button type="submit">Register</button>
      </form>
      {message && <pre className="response">{message}</pre>}
    </div>
  );
}
