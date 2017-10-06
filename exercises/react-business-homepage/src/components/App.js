import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Signup from "./Signup";
import Featured from "./Featured";
import Catalog from "./Catalog";
import Footer from "./Footer";

function App() {
    return (
        <div className="app-container">
            <Navbar/>
            <Header/>
            <Signup/>
            <Featured/>
            <Catalog/>
            <Footer/>
        </div>
    )
}

export default App;
