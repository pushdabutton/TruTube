import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = ({ user }) => {
    const navLink = () => (
        <div className="navbar">
            <Link to="/" className="nav-home">
                <h3> <i className="fab fa-youtube"></i> TruTube</h3>
            </Link>
            <input type="text" className="searchBar" placeholder="Search"/>
            <Link to="/login" className="nav-login">
                Sign In
            </Link>
        </div>
    )
    
    return user ? navLink() : null
};

export default Navbar;