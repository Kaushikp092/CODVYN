import { useState } from "react";
import { loginUser } from "../services/api";
import './Login.css';

const Login = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const handlesubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setMessageType('');
        setLoading(true);
        try {
            const response = await loginUser(email, password);
            localStorage.setItem("token", response.token);
            setMessageType('success');
            setMessage('Login successful! Redirecting...');
            // Small delay for user to see success message before redirect
            setTimeout(() => {
                setIsLoggedIn(true);
            }, 500);
        } catch (err) {
            console.error(err);
            setMessageType('error');
            setMessage(err.message || 'Login Failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return ( 
    <>
    {message && <p className={`msg ${messageType}`}>{message}</p>}

    <div className="form-container">
    <form onSubmit={handlesubmit}>
        <label htmlFor="email">Email:
            <input type="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            />
        </label>

        <label htmlFor="password">Password:
            <input type="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
             />
        </label>

        <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
        </button>
    </form>

    </div>

    </> );
}
 
export default Login;

