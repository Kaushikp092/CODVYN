import { useState } from "react";
import { SignupUser } from "../services/api";
import "./Signup.css";

const Signup = ({ setIsLoggedIn }) => {
	const [form, setForm] = useState({ username: "", email: "", password: "" });
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [messageType, setMessageType] = useState(""); // 'success' or 'error'

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage("");
		setMessageType("");
		setLoading(true);
		try {
			const response = await SignupUser(
				form.username,
				form.email,
				form.password,
			);
			localStorage.setItem("token", response.token);
			setMessageType("success");
			setMessage("Signup successful! Redirecting...");
			// Small delay for user to see success message before redirect
			setTimeout(() => {
				setIsLoggedIn(true);
			}, 500);
		} catch (err) {
			console.error(err);
			setMessageType("error");
			setMessage(err.message || "Signup Failed. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{message && <p className={`msg ${messageType}`}>{message}</p>}
			<div className="form-container">
				<form onSubmit={handleSubmit}>
					<label>
						Username:
						<input
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
					<label>
						Email:
						<input
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
					<label>
						Password:
						<input
							type="password"
							value={form.password}
							placeholder="Enter Your Password"
							onChange={(e) =>
								setForm({ ...form, password: e.target.value })
							}
							required
							disabled={loading}
						/>
					</label>
					<button type="submit" disabled={loading}>
						{loading ? "Creating Account..." : "Signup"}
					</button>
				</form>
			</div>
		</>
	);
};

export default Signup;

