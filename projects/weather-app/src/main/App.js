import React from "react";
import Navbar from "./Navbar";
import Today from "./atAGlance/TodayContainer";
import Summary from "./Summary";
import ForecastContainer from "./forecast/Container";

import DarkSkyApi from 'dark-sky-api';
DarkSkyApi.apiKey = '68f41e08c2748e697411c2fae78bcf0c';
// DarkSkyApi.proxy = true;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
                temperature: "",
                dewPoint: "",
                humidity: "",
                uvIndex: "",
                wind: "",
                summary: ""
            }
        }
    }

    componentDidMount() {
        DarkSkyApi.loadCurrent().then(response => {
            this.setState({
                data: {
                    temperature: response.temperature,
                    dewPoint: response.dewPoint,
                    humidity: response.humidity,
                    uvIndex: response.uvIndex,
                    wind: response.windSpeed,
                    summary: response.summary
                }
            });
            console.log(response);
        });
    }

    render() {
        return (
            <div className="app-container">
                <Navbar/>
                <Summary summary={this.state.data.summary}/>
                <Today data={this.state.data}/>
                <ForecastContainer/>
            </div>
        )
    }
}

export default App;
