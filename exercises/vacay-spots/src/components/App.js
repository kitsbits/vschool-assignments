import React from "react";
import Cards from "./Cards"
import spots from "../spots.json";

function getSpots(spots) {
    return spots.map(spot => {
        return <Cards   place={spot.place}
                        price={spot.price}
                        time={spot.timeToGo}
                        img={spot.img}/>
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
