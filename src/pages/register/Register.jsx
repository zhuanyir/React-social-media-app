import "./register.scss"
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="register">
            <div className="card">

                <div className="left">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="username" autoComplete="username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name"/>
                        
                        <button>Register</button>
                    </form>
                </div>
                <div className="right">
                    <h1>Hello world </h1>
                    <p>Your space to connect, share, and stay close to what matters. Log in to discover friends, stories, and updates in real time. Join a trusted community where your voice counts and every moment is yours to capture. Sign in and start your journey today.</p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Register;