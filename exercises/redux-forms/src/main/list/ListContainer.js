import React from "react";
import ListComponent from "./ListComponent";
import {connect} from "react-redux";
import Item from "./Item";

class ListContainer extends React.Component {
    constructor() {
        super();
        this.genList = this.genList.bind(this);
    }

    genList() {
        return this.props.countries.map((country, i) => {
            return <Item
                        country={country}
                        key={country.name + i}/>;
        });
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <ListComponent genList={this.genList}/>
            </div>
        )
    }
}

// props is an object: this function needs to return an object!
const mapStateToProps = (state) => {
    return {
        countries: state.countries
    };
}

export default connect(mapStateToProps, {})(ListContainer);

// get list of countries from redux state
// write a function that maps through countries array and returns an Item for each
// pass mapping function down to Item through ListComponent

// add delete function to each item
