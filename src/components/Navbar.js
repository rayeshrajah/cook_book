import React from 'react';
import "./../styles/Navbar.scss"
import Logo from "../images/cookbook-logo.png";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <img src={Logo} />
            </div>
            <div className="login-signup-button-container">
            <button className="cookbook-login">Login</button>
            <button className="cookbook-signup">Sign-up</button>
            </div>
        </nav>

    );
}