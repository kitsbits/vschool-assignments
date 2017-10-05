import React from "react";
import EachFeature from "./EachFeature"
import EachFeatureTest from "./EachFeatureTest"

function Featured() {
    return (
        <div className="featured-container">
            <EachFeature/>
            <EachFeature/>
            <EachFeature/>
        </div>
    )
}

export default Featured;
