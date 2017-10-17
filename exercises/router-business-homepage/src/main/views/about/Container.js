import React from "react";
import AboutComponent from "./Component"
import about from "./about.json";

class About extends React.Component {
    // constructor() {
    //     super();
    // }

    getProfiles() {
        return about.map((profile, i) => {
            return <AboutComponent profile={profile} key={profile.name + i}/>
        });
    }

    render() {
        return (
            <div className="header-container">
                <div className="about"></div>
                <h1 className="header-text">Here we are!</h1>
                <div className="profile-container">
                    {this.getProfiles()}
                </div>
            </div>
        )
    }
}

export default About;
