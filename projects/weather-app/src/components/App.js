import React from "react";
import Navbar from "./Navbar";
import Today from "./Today";
import Forecast from "./Forecast";

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
                wind: ""
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
                    wind: response.windSpeed
                }
            });
            console.log(response);
        });
    }

    render() {
        return (
            <div className="app-container">
                <Navbar/>
                <Today data={this.state.data}/>
                <Forecast/>
            </div>
        )
    }
}

export default App;
