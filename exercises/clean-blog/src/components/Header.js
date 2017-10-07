import React from "react";

function Header() {
    const styles = {
        background: `url("https://images.unsplash.com/photo-1454328911520-ccf83f1ef41d?dpr=1&auto=compress") no-repeat center`,
        backgroundSize: "cover"
    }

    return (
        <div className="header-container" style={styles}>
            <div className="header-text-container">
                <h1>Clean Blog</h1>
                <p>A Blog Theme by Start Bootstrap</p>
            </div>
        </div>
    )
}

export default Header;
