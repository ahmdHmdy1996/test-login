import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Auth Test App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

function Home() {
  return <p>Welcome — use the nav links to open Login or Register pages.</p>;
}
