import React from "react";
import Hero from "./Hero";
import heroes from "../heroes.json";

function handleClick(firstAppearance, publisher) {
    alert(`First Appearance: ${firstAppearance}\nPublisher: ${publisher}`);
}

function App() {
    return (
        <div className="app-container">
            {heroes.map((hero, i) => <Hero hero={hero} handleClick={handleClick} key={hero.name + i}/>)}
        </div>
    );
}

export default App;
