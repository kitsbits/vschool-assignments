import React from "react";

function Footer() {
    return (
        <div className="footer">
            <ul className="footer-list">
                <li>
                    <a href="">About Us</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
                <li>
                    <a href="">Cool Stuff</a>
                </li>
                <li>
                    <a href="">Something Else</a>
                </li>
            </ul>
            <p className="contact-container">
                <a href="" className="contact">email@email.com</a>
                <a href="" className="contact">https://website.com</a>
            </p>
        </div>
    )
}

export default Footer;
