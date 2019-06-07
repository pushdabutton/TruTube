import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = ({ user, logout }) => {
    const display = user ? (
        <div>
        <p> {user.username} </p>
            <div>
                
                <Link onClick={logout} className="signout-button">Sign Out</Link>
                
            </div>
        </div>
    ) : (
            <div>
        <Link to="/login" className="nav-login">
            <i className="fas fa-user"></i>
            Sign In
        </Link>
            </div>
    )
    const navLink = () => (
        <>
        <div className="navbar">
            {/* <div className="nav-div"> */}
                <div className="nav-leftside">
                    <h1 ><i className="fas fa-align-justify"></i></h1>
                    <Link to="/" className="nav-home">
                        <h3> <i className="fab fa-youtube"></i> TruTube</h3>
                    </Link>
                </div >
                <input type="text" className="searchBar" placeholder="Search"/>
                <div className="nav-rightside">
                    <i className="fas fa-video"></i>
                    <i className="fas fa-th"></i>
                    <i className="fas fa-ellipsis-v"></i>
                    {display}
                </div>
            {/* </div> */}
        </div>

        </>
    )

    
    return navLink()
};

export default Navbar;