import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token" || ""));
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const handlesubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login Failed");

      const data = await res.json();
      setToken(data.token);
      localStorage.setItem("token", data.token);
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchUsers = async () => {
    setError("");
    const jwt = token || localStorage.getItem("Authorization");
    if (!jwt) {
      setError("No token found");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/users`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      if (!res.ok) throw new Error("Failed to fetch users");

      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      {error && <p>{error}</p>}

      <button onClick={fetchUsers}>Fetch Users</button>

      <ul>
        {users.map((u) => {
          return <li key={u._id}>{u.email}</li>;
        })}
      </ul>
    </>
  );
};

export default Form;
