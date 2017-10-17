import React from "react";
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <div className="navbar-container">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/services">Services</Link>
        </div>
    )
}

export default Navbar;
