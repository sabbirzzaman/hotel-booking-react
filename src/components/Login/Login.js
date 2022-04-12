import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div className="form-title">
                <h2>Login</h2>
            </div>
            <form className='form'>
                <div className="field-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter your email' name="email" id="email" required />
                </div>
                <div className="field-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter your password' name="password" id="password" required />
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