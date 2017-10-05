import React from "react";

function Navbar() {
    return (
        <div className="navbar-container">
            <h1 className="logo">BAGS</h1>
        <ul className="site-nav">
                <li>Most Popular</li>
                <li>Under $50</li>
                <li>Our Blog</li>
                <li>Contact Us</li>
            </ul>
            <ul className="social-nav">
                <i className="fa fa-lg fa-facebook"></i>
                <i className="fa fa-lg fa-instagram"></i>
                <i className="fa fa-lg fa-pinterest"></i>
                <i className="fa fa-lg fa-twitter"></i>
            </ul>

        </div>
    )
}

export default Navbar;
