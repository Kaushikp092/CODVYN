// React Component
import { useState, useEffect } from "react";
import "./UserManagement.css";

const BACKEND_API_URL = import.meta.env.VITE_API_URL;

const getHeader = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

const handleResponse = async (res) =>{
  const data = await res.json();

  if(!res.ok) throw new Error(data.message || 'Something went wrong');

  return data;
}

const getUsers = async () => {
  const res = await fetch(`${BACKEND_API_URL}/users`, { headers: getHeader()});
  return handleResponse(res);
};

const createUser = async (data) => {
  const res = await fetch(`${BACKEND_API_URL}/users`, {
    method: "POST",
    headers: getHeader(),
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

const updateUser = async (id, data) => {
  const res = await fetch(`${BACKEND_API_URL}/users/${id}`, {
    method: "PUT",
    headers: getHeader(),
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

const deleteUser = async (id) => {
  const res = await fetch(`${BACKEND_API_URL}/users/${id}`, {
    method: "DELETE",
    headers: getHeader(),
  });
  return handleResponse(res);
};

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (editingUserId) {
        await updateUser(editingUserId, form);
        setMessage('User updated successfully');
        setEditingUserId(null);
      } else {
        await createUser(form);
        setMessage('User Created Successfully')
      }
      setForm({username: '',email: '', password: ''});
      loadUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setError("User Deleted");
    loadUsers();
  };

  return (
    <>
      <h2>User Management</h2>
      {message && <p className="green">{message}</p>}
      {error && <p className="red">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">
          Username:
          <input
            type="text"
            placeholder="Enter Your Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            placeholder="Enter Your Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </label>
        <button type="submit">Create User</button>
      </form>
      <hr />
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.username} - {user.email}
            <button onClick={() => handleDelete(user._id)}>Delete</button>
            <button onClick={()=>{setForm({username: user.username, email: user.email, password: ''});
            setEditingUserId(user._id);
          }}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserManagement;
