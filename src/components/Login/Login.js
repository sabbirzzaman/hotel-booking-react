import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password);
    };

    console.log(error || user?.user)

    return (
        <div className="form-container">
            <div className="form-title">
                <h2>Login</h2>
            </div>
            <form onSubmit={handleLogin} className="form">
                <div className="field-group">
                    <label htmlFor="email">Email</label>
                    <input
                        onBlur={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        id="email"
                        required
                    />
                </div>
                <div className="field-group">
                    <label htmlFor="password">Password</label>
                    <input
                        onBlur={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        id="password"
                        required
                    />
                </div>
                <div className="field-group">
                    <input type="submit" value="Login" />
                </div>
                <div className="field-group">
                    <p>
                        Don't have an account?{' '}
                        <Link to="/signup">Create an account.</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
