import React, { useState } from 'react';
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signup.css';

const Signup = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile] = useUpdateProfile(auth);

    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
        updateName();
    };

    const updateName = async () => {
        await updateProfile({ displayName });
    };

    return (
        <div className="form-container">
            <div className="form-title">
                <h2>Register</h2>
            </div>
            <form className="form" onSubmit={handleSignup}>
                <div className="field-group">
                    <label htmlFor="email">Name</label>
                    <input
                        onBlur={(e) => setDisplayName(e.target.value)}
                        type="name"
                        placeholder="Enter your name"
                        name="name"
                        id="name"
                        required
                    />
                </div>
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
                    <input type="submit" value="Register" />
                </div>
                <div className="field-group">
                    <p>
                        Already have an account?{' '}
                        <Link to="/login">login.</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;
