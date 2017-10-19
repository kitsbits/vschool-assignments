import React from "react";

function FormComponent(props) {
    const containerStyles = {
        display: "flex",
        width: "50%",
        margin: "auto",
        marginTop: "75px"

    }

    const inputStyles = {
        height: "35px",
        width: "205px",
        paddingLeft: "15px",
        marginLeft: "25px"
    }

    const buttonStyles = {
        height: "40px",
        width: "102px",
        backgroundColor: "transparent",
        outline: "none",
        border: "1px solid blue",
        color: "blue",
        marginLeft: "25px"
    }
    return (
        <div style={containerStyles}>
            <form onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange} name="name" type="text" placeholder="Country Name" value={props.inputs.name} style={inputStyles}/>
                <input onChange={props.handleChange} name="imgURL" type="text" placeholder="Flag Image URL" value={props.inputs.imgURL} style={inputStyles} />
            <button type="submit" style={buttonStyles}>ADD</button>
            </form>
        </div>
    )
}

export default FormComponent;
