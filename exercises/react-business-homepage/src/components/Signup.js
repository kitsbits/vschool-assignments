import React from "react";

function Signup() {
    return (
        <form id="signup-container" className="signup-container">
            <div className="center">
                <input className="email" type="email" placeholder="Your email"/>
                <button id="join-button" className="join-button" type="button">Join Our Newsletter</button>
            </div>

        </form>
    )
}

export default Signup;
