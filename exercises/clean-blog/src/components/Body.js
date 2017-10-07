import React from "react";
import FeaturedPosts from "./FeaturedPosts.js";
import FeaturedData from "../featured.json";

function Body() {
    return FeaturedData.map((feature, i) => {
        return (
            <div>
                <FeaturedPosts feature={feature} key={feature.title + i}/>
            </div>
        );
    });
}

export default Body;
