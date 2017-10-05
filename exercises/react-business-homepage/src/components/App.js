import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Signup from "./Signup";
import ShopHeader from "./ShopHeader";
import Featured from "./Featured";
import Catalog from "./Catalog";
import CatalogHeader from "./CatalogHeader";
import Footer from "./Footer";

function App() {
    return (
        <div className="app-container">
            <Navbar/>
            <Header/>
            <Signup/>
            <ShopHeader/>
            <Featured/>
            <CatalogHeader/>
            <Catalog/>
            <Footer/>
        </div>
    )
}

export default App;
