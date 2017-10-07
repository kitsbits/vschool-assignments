import React from "react";

function FeaturedPosts(props) {
    return (
        <div className="each-feature-container">
            <h1 className="feature-title">{props.feature.title}</h1>
            <p className="feature-teaser">{props.feature.teaser}</p>
            <h4 className="feature-details">{props.feature.postDetails}</h4>
        </div>
    )
}

export default FeaturedPosts;
