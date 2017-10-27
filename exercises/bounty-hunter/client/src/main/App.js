import React from "react";
import AddContainer from "./addForm/AddContainer";
import ListContainer from "./list/ListContainer";
import Bounty from "./views/Bounty";

function App() {
    const containerStyles = {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
    }
    return (
        <div style={containerStyles}>
            <AddContainer/>
            <ListContainer/>
        </div>
    )
}

export default App;
