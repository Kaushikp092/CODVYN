import { useState } from "react";
import { loginUser } from "../services/api";
import './Login.css';

const Login = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setloading] = useState(false);

    const handlesubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setloading(true);
        try {
            const response = await loginUser(email, password);
            localStorage.setItem("token", response.token);
            setIsLoggedIn(true);
            setMessage('Login successful');
        } catch (err) {
            console.error(err);
            setMessage('Login Failed');
        }
    };

    return ( 
    <>
    {message && <p className="msg">{message}</p> }

    <div className="form-container">
    <form onSubmit={handlesubmit}>
        <label htmlFor="email">Email:
            <input type="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </label>

        <label htmlFor="password">Password:
            <input type="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
             />
        </label>

        <button type="submit">Login</button>
    </form>

    </div>

    </> );
}
 
export default Login;