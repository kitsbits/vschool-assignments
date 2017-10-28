import React from "react";
import AddContainer from "./addForm/AddContainer";
import ListContainer from "./list/ListContainer";
import Bounty from "./list/views/bounty/BountyContainer";
import {Switch, Route} from "react-router-dom";

function App() {
    const containerStyles = {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
    }
    return (
        <div style={containerStyles}>
            <AddContainer/>
            <Switch>
                <Route exact path="/" component={ListContainer}/>
                <Route path="/bounties/:id" component={Bounty}/>
            </Switch>
        </div>
    )
}

export default App;
