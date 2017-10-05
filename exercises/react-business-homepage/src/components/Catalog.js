import React from "react";
import CatalogSM from "./CatalogSM";
import CatalogLG from "./CatalogLG";

function Catalog() {
    return (
        <div className="catalog-container">
            <CatalogSM/>
            <CatalogLG/>
            <CatalogLG/>
            <CatalogSM/>
        </div>
    )
}

export default Catalog;
