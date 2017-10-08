import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
    return (
        <div className="app-container">
            <Navbar/>
            <Header/>
            <Body/>
            <button className="older-posts-button" type="button">OLDER POSTS>></button>
            <Footer/>
        </div>
    )
}

export default App;
