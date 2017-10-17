import React from "react";
import ServicesComponent from "./Component";
import {Link} from "react-router-dom";

class ServicesContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            services: []
        }
        this.genServices = this.genServices.bind(this);
        this.searchId = this.searchId.bind(this);
    }

    componentDidMount() {
        this.setState({
            services: [
                {
                    title: "Content Creation",
                    price: "200",
                    _id: "p892345ra746"
                },
                {
                    title: "Web Design",
                    price: "1200",
                    _id: "p892345ra756"
                },
                {
                    title: "Social Media Marketing",
                    price: "800",
                    _id: "p892345ra766"
                }
            ]
        });
    }

    genServices() {
        return this.state.services.map(service => {
            return <Link to={`/services/${service._id}`} key={service._id}>{service.title}</Link>
        });
    }

    searchId(id) {
        return this.state.services.find(service => {
            return id === service._id;
        });
    }

    render() {
        return (
            <div className="header-container">
                <div className="services"></div>
                <ServicesComponent
                    genServices={this.genServices}
                    searchId={this.searchId}/>
            </div>
        )
    }
}

export default ServicesContainer;
