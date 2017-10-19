import React from "react";

function FormComponent(props) {
    const inputStyles = {
        height: "35px",
        width: "200px",
        marginLeft: "20px",
        paddingLeft: "15px",
    }

    const buttonStyles = {
        height: "40px",
        width: "100px",
        outline: "none",
        border: "1px solid blue",
        backgroundColor: "transparent",
        marginLeft: "20px",
        color: "blue",
        fontSize: "0.75em"
    }

    const containerStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
    }
    return (
        <div style={containerStyles}>
            <form onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange} type="text" name="imgURL" value={props.inputs.imgURL} placeholder="Image URL" style={inputStyles}/>
                <input onChange={props.handleChange} type="text" name="topText" value={props.inputs.topText} placeholder="Top text" style={inputStyles}/>
                <input  onChange={props.handleChange} type="text" name="bottomText" value={props.inputs.bottomText} placeholder="Bottom text" style={inputStyles}/>
            <button type="submit" style={buttonStyles}>GENERATE</button>
            </form>
        </div>
    )
}

export default FormComponent
