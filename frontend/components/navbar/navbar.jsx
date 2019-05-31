import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = ({ user, logout }) => {
    const display = user ? (
        <div>
        <p> {user.username} </p>
            <Link onClick={logout} className="signout-button">Sign Out</Link>
        </div>
    ) : (
        <Link to="/login" className="nav-login">
            Sign In
        </Link>
    )
    const navLink = () => (
        <div className="navbar">
            <Link to="/" className="nav-home">
                <h3> <i className="fab fa-youtube"></i> TruTube</h3>
            </Link>
            <input type="text" className="searchBar" placeholder="Search"/>
            {display}
        </div>
    )
    
    return navLink()
};

export default Navbar;