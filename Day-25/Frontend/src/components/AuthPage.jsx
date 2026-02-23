import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./AuthPage.css";
const AuthPage = ({setIsLoggedIn}) => {
  const [activeForm, setActiveForm] = useState("signup");
  return (
    <>
      <div className="auth-container">
        <div className="auth-header">
          <button
            className={activeForm === "login" ? "active" : ""}
            onClick={() => setActiveForm("login")}
          >
            Login
          </button>
          <button
            className={activeForm === "signup" ? "active" : ""}
            onClick={() => setActiveForm("signup")}
          >
            SignUp
          </button>
        </div>
        <div className="auth-form">
          {activeForm === "login" ? <Login setIsLoggedIn={setIsLoggedIn}/> : <Signup setIsLoggedIn={setIsLoggedIn}/>}
        </div>
      </div>
    </>
  );
};

export default AuthPage;
