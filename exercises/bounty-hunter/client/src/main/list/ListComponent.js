import React from "react";
import {connect} from "react-redux";
import {editBounty, deleteBounty} from "../../redux/actions";
import {Link} from "react-router-dom";

function ListComponent(props) {
    const priceStyles = {
        color: "green",
        marginBottom: "10px"
    }

    const deadPriceStyles = {
        color: "grey",
        marginBottom: "10px"
    }

    const containerStyles = {
        display: "flex",
        flexDirection: "column",
        color: "green"
    }

    const deadContainerStyles = {
        display: "flex",
        flexDirection: "column",
        color: "grey"
    }

    const buttonStyles = {
        width: "45px",
        height: "25px",
        backgroundColor: "transparent",
        border: "1px solid yellow",
        outline: "none",
        color: "yellow",
        marginRight: "10px"
    }

    const deadButtonStyles = {
        width: "45px",
        height: "25px",
        backgroundColor: "transparent",
        border: "1px solid grey",
        outline: "none",
        color: "grey",
        marginRight: "10px"
    }

    const buttonContainerStyles = {
        marginTop: "15px"
    }

    return (
        <div style={props.bounty.living === "F" ? deadContainerStyles : containerStyles}>
            <h3 style={props.bounty.living === "F" ? deadPriceStyles : priceStyles}>>> ${props.bounty.bounty}</h3>
            <h2>{props.bounty.firstName}</h2>
            <h3>{props.bounty.lastName}</h3>
            <div style={buttonContainerStyles}>
            <Link to={`/bounties/${props.bounty._id}`}><button style={props.bounty.living === "F" ? deadButtonStyles : buttonStyles}>EDIT</button></Link>
            <button onClick={(e) => props.deleteBounty(props.bounty._id)} type="button" style={props.bounty.living === "F" ? deadButtonStyles : buttonStyles}>DELETE</button>
            </div>
        </div>
    )
}

export default connect(null, {editBounty, deleteBounty})(ListComponent);
