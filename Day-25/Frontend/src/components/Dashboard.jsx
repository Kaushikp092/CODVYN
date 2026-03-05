import { useEffect, useState } from "react";
import { fetchUser, createUser, updateUser, deleteUser } from "../services/api";
import "./Dashboard.css";

const Dashboard = ({ setIsLoggedIn }) => {
	const [users, setUsers] = useState([]);
	const [form, setForm] = useState({ username: "", email: "", password: "" });
	const [message, setMessage] = useState("");
	const [messageType, setMessageType] = useState("");
	const [editingUserId, setEditingUserId] = useState(null);
	const [loading, setLoading] = useState(false);
	const [initialLoading, setInitialLoading] = useState(true);

	const loadUser = async () => {
		try {
			const data = await fetchUser();
			setUsers(data.users);
		} catch (err) {
			setMessage(err.message || "Something went wrong. Please try again.");
			setMessageType("error");
		} finally {
			setInitialLoading(false);
		}
	};

	useEffect(() => {
		loadUser();
	}, []);

	const handleCreate = async (e) => {
		e.preventDefault();
		setMessage("");
		setMessageType("");
		setLoading(true);
		try {
			if (editingUserId) {
				await updateUser(editingUserId, form);
				setMessage("User Updated Successfully!");
				setMessageType("success");
				setEditingUserId(null);
			} else {
				await createUser(form);
				setMessage("User Created Successfully!");
				setMessageType("success");
			}
			setForm({ username: "", email: "", password: "" });
			loadUser();
		} catch (err) {
			setMessage(err.message || "Something went wrong. Please try again.");
			setMessageType("error");
			setForm({ username: "", email: "", password: "" });
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async (id) => {
		if (!window.confirm("Are you sure you want to delete this user?")) {
			return;
		}
		setMessage("");
		setMessageType("");
		setLoading(true);
		try {
			await deleteUser(id);
			loadUser();
			setMessage("User deleted successfully!");
			setMessageType("success");
		} catch (err) {
			setMessage(err.message || "Something went wrong. Please try again.");
			setMessageType("error");
		} finally {
			setLoading(false);
		}
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		setIsLoggedIn(false);
	};

	if (initialLoading) {
		return (
			<>
				<div className="dashboard-header">
					<h1 className="main-header">User Management Dashboard</h1>
					<button onClick={handleLogout} className="logoutBtn">
						Logout
					</button>
				</div>
				<div className="dashboard-loading">
					<div className="loading-spinner"></div>
					<p>Loading users...</p>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="dashboard-header">
				<h1 className="main-header">User Management Dashboard</h1>
				<button onClick={handleLogout} className="logoutBtn">
					Logout
				</button>
			</div>
			{message && <p className={`msg ${messageType}`}>{message}</p>}
			<div className="container">
				<div className="dashboard-form">
					<form onSubmit={handleCreate}>
						<h3 className="create-user">
							{editingUserId ? "Edit User" : "Create User"}
						</h3>
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
								disabled={loading}
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
								disabled={loading}
							/>
						</label>
						<label htmlFor="password">
							Password:
							<input
								id="password"
								type="password"
								value={form.password}
								placeholder={editingUserId ? "Enter New Password (optional)" : "Enter Your Password"}
								onChange={(e) =>
									setForm({ ...form, password: e.target.value })
								}
								required={!editingUserId}
								disabled={loading}
							/>
						</label>
						<button type="submit" disabled={loading}>
							{loading ? "Processing..." : editingUserId ? "Update User" : "Add User"}
						</button>
						{editingUserId && (
							<button
								type="button"
								onClick={() => {
									setEditingUserId(null);
									setForm({ username: "", email: "", password: "" });
								}}
								style={{ marginTop: '0.5rem', background: '#95a5a6' }}
								disabled={loading}
							>
								Cancel
							</button>
						)}
					</form>
				</div>
				<div className="user-container">
					<h3>User List</h3>
					{users.length === 0 ? (
						<p className="empty-list">No users found. Create your first user!</p>
					) : (
						<ul>
							{users.map((user) => (
								<li key={user._id}>
									<div className="user-info">
										<div className="user-name">{user.username}</div>
										<div className="user-email">{user.email}</div>
									</div>
									<div className="btn-container">
										<button
											onClick={() => handleDelete(user._id)}
											className="delete"
											disabled={loading}
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
											disabled={loading}
										>
											Edit
										</button>
									</div>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
};

export default Dashboard;

