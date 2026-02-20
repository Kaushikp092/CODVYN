import { useState } from "react";
import { SignupUser } from "../services/api";
import "./Signup.css";

const Signup = () => {
	const [form, setForm] = useState({ username: "", email: "", password: "" });
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage("");
		setLoading(true);
		try {
			const response = await SignupUser(
				form.username,
				form.email,
				form.password,
			);
			localStorage.setItem("token", response.token);
			setMessage("Signup successful");
		} catch (err) {
			console.error(err);
			setMessage(err.message || "Sigup Failed");
		}
	};
	return (
		<>
			{message && <p>{message}</p>}
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
						/>
					</label>
					<button type="submit">Signup</button>
				</form>
			</div>
		</>
	);
};

export default Signup;
