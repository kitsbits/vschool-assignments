import React from "react";
import axios from "axios";
import Hit from "./Hit";

class HitList extends React.Component {
    constructor() {
        super();
        this.state = {
            hitList: [],
            randomColors: []
        }
    }

    componentDidMount() {
        axios.get("http://api.vschool.io:6543/hitlist.json").then(response => {
            console.log(response.data);
            this.setState({
                hitList: response.data
            });
            axios.get(`http://www.colr.org/json/colors/random/${this.state.hitList.length}`).then(response => {
                console.log(response.data.matching_colors);
                this.setState({
                    randomColors: response.data.matching_colors
                });
            })
        });
    }

    render() {
        console.log(this.state.hitList);
        return (
            this.state.hitList.map((toHit, i) => {
                return (
                    <Hit list={toHit} key={toHit.name + i} color={toHit.name === "Rebecca Black" ? "000000" : this.state.randomColors[i]}/>
                )
            })
        )
    }
}

export default HitList;
