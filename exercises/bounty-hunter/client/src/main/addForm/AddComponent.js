import React from "react";

function AddComponent(props) {
    const formStyles = {
        display: "flex",
        flexDirection: "column"
    }

    const inputStyles = {
        width: "250px",
        height: "35px",
        backgroundColor: "transparent",
        border: "2px solid green",
        marginTop: "15px",
        outline: "none",
        color: "green",
        paddingLeft: "15px",
        fontSize: "1em"
    }

    const headerStyles = {
        color: "red"
    }

    const containerStyles = {
        marginTop: "55px"
    }
    return (
        <div style={containerStyles}>
            <h1 style={headerStyles}>ADD NEW BOUNTY</h1>
            <form onSubmit={props.handleSubmit} style={formStyles}>
                <input onChange={props.handleChange} type="text" name="firstName" placeholder="First Name" value={props.inputs.firstName} style={inputStyles}/>
                <input onChange={props.handleChange} type="text" name="lastName" placeholder="Last Name" value={props.inputs.lastName} style={inputStyles}/>
            <input onChange={props.handleChange} type="text" name="living" placeholder="Living? (T/F)" value={props.inputs.living.toUpperCase()} style={inputStyles} maxlength="1"/>
                <input onChange={props.handleChange} type="text" name="bounty" placeholder="Bounty price" value={props.inputs.bounty} style={inputStyles}/>
                <input onChange={props.handleChange} type="text" name="type" placeholder="Sith or Jedi" value={props.inputs.type} style={inputStyles}/>
                <button type="submit" style={inputStyles}>ADD</button>
            </form>
        </div>
    )
}

export default AddComponent;
