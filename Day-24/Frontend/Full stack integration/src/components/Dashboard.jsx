import { useEffect, useState } from "react";
import { fetchUser, createUser, updateUser, deleteUser } from "../services/api";
import "./Dashboard.css";

const Dashboard = ({ setIsLoggedIn }) => {
	const [users, setUsers] = useState([]);
	const [form, setForm] = useState({ username: "", email: "", password: "" });
	const [message, setMessage] = useState("");
	const [editingUserId, setEditingUserId] = useState(null);

	const loadUser = async () => {
		try {
			const data = await fetchUser();
			setUsers(data.users);
		} catch (err) {
			setMessage(err.message || "Something went wrong. Please try again.");
		}
	};

	useEffect(() => {
		loadUser();
	}, []);

	const handleCreate = async (e) => {
		e.preventDefault();
		setMessage("");
		try {
			if (editingUserId) {
				await updateUser(editingUserId, form);
				setMessage("User Updated Successfully");
				setEditingUserId(null);
			} else {
				await createUser(form);
				setMessage("User Created Successfully");
			}
			setForm({ username: "", email: "", password: "" });
			loadUser();
		} catch (err) {
			setForm({ username: "", email: "", password: "" });
			setMessage(err.message || "Something went wrong. Please try again.");
		}
	};

	const handleDelete = async (id) => {
		try {
			await deleteUser(id);
			loadUser();
			setMessage("User deleted successfully");
		} catch (err) {
			setMessage(err.message || "Something went wrong. Please try again.");
		}
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		setIsLoggedIn(false);
	};

	return (
		<>
			<h1 className="main-header">UserManagement Dashboard</h1>
			<button onClick={handleLogout} className="logoutBtn">
				Logout
			</button>
			{message && <p className="success">{message}</p>}
			<div className="container">
				<form onSubmit={handleCreate}>
					<h3 className="create-user">Create User</h3>
					<label htmlFor="username">
						Username:
						<input
							id="username"
							type="text"
							value={form.username}
							placeholder="Enter Your Username"
							onChange={(e) =>
								setForm({ ...form, username: e.target.value })
							}
							required
						/>
					</label>
					<label htmlFor="email">
						Email:
						<input
							id="email"
							type="email"
							value={form.email}
							placeholder="Enter Your Email"
							onChange={(e) =>
								setForm({ ...form, email: e.target.value })
							}
							required
						/>
					</label>
					<label htmlFor="password">
						Password:
						<input
							id="password"
							type="password"
							value={form.password}
							placeholder="Enter Your Password"
							onChange={(e) =>
								setForm({ ...form, password: e.target.value })
							}
							required
						/>
					</label>
					<button type="submit">
						{editingUserId ? "Update User" : "Add User"}
					</button>
				</form>
				<div className="user-container">
					<h3>User List</h3>
						{users.map((user) => (
							<li key={user._id}>
								{user.username} - {user.email}
								<div className="btn-container">
									<button
										onClick={() => handleDelete(user._id)}
										className="delete"
									>
										Delete
									</button>
									<button
										onClick={() => {
											setForm({
												username: user.username,
												email: user.email,
												password: "",
											});
											setEditingUserId(user._id);
										}}
									>
										Edit
									</button>
								</div>
							</li>
						))}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
