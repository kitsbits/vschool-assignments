import React from "react";

const features = [
    {
        imgURL: "https://images.unsplash.com/photo-1479219136056-56bb6495a005",
        altText: "leather duffle",
        title: "The Classic Duffle",
        price: 199
    }
]

function EachFeatureTest() {

    return features.forEach((feature) => {
        return (
            <div className="each-feature">
                <img className="featured-img" src={feature.imgURL} alt={feature.altText}/>
                <h4 className="featured-text">{feature.title}</h4>
                <p className="featured-price">${feature.price}</p>
            </div>
        )
    });
}

export default EachFeatureTest;
