import React from "react";
import EachFeature from "./EachFeature";
import featured from "../featured.json"

function getFeatures(featured) {
    return featured.map(feature => {
        return (
            <EachFeature    title={feature.title}
                            img={feature.img}
                            altText={feature.altText}
                            price={feature.price}/>
        );
    })
}

function Featured() {
    return (
        <div className="featured-container">
            {getFeatures(featured)}
        </div>
    )
}

export default Featured;
