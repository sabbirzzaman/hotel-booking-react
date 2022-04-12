import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <nav className="container">
                <h3 onClick={() => navigate('/')}>Hotel Booking</h3>

                <div>
                    <Link to="/home">Home</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
