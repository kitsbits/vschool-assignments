import React from "react";
import Cards from "./Cards"
import spots from "../spots.json";

function getSpots(spots) {
    return spots.map(spot => {
        const color = () => {
            if (spot.timeToGo === "Winter") {
                return "#D4FFFF";
            } else if (spot.timeToGo === "Spring") {
                return "#D5FFB4";
            } else if (spot.timeToGo === "Summer") {
                return "#FFFF90";
            } else if (spot.timeToGo === "Fall") {
                return "#FF8061";
            }
        };

        const costRank = () => {
            if (parseInt(spot.price) < 500) {
                return "$";
            } else if (parseInt(spot.price) >= 500 && parseInt(spot.price) < 1000) {
                return "$$";
            } else if (parseInt(spot.price) > 1000) {
                return "$$$";
            }
        };
        return <Cards   place={spot.place}
                        price={spot.price}
                        time={spot.timeToGo}
                        img={spot.img}
                        color={color()}
                        howExpensive={costRank()}/>
    })
}

function App() {
    return (
        <div className="cards-container">
            <h1 className="page-title">The Best Vacation Spots</h1>
            {getSpots(spots)}
        </div>
    )
}

export default App;
