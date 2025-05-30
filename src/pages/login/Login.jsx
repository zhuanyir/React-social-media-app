import "./login.scss"
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
    const {login}= useContext(AuthContext);
    
    const handleLogin= ()=>{
        login();
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Welcome to ConnectSphere </h1>
                    <p>Your space to connect, share, and stay close to what matters. Log in to discover friends, stories, and updates in real time. Join a trusted community where your voice counts and every moment is yours to capture. Sign in and start your journey today.</p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" autoComplete="username" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login;