import React from "react";
import ForecastComponent from "./Component";

import DarkSkyApi from 'dark-sky-api';
DarkSkyApi.apiKey = '68f41e08c2748e697411c2fae78bcf0c';

class ForecastContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            forecasts: [],
            colors: ["4A90E2", "75B5FF", "A6CFFF", "C7E1FF", "DFEEFF", "F4F9FF", "FFFFFF"]
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        DarkSkyApi.loadForecast().then(response => {
            this.setState({
                forecasts: response.daily.data
            })
        });
    }

    genForecast() {
        const genArray = [];
        for (var i = 0; i < this.state.forecasts.length - 1; i++) {
            const current = this.state.forecasts[i];
            genArray.push(
                <ForecastComponent
                    key={current.sunsetTime + i}
                    forecast={current}
                    color={this.state.colors[i]}
                    handleClick={this.handleClick}/>);
        }
        return genArray;
    }

    handleClick(event) {


    }

    render() {
        console.log(this.state.forecasts)
        return (
            <div className="forecast-containter">
                {this.genForecast()}
            </div>
        )
    }
}

export default ForecastContainer;
