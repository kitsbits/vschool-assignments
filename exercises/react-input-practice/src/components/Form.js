import React from "react";

function Form(props) {
    return (
        <div>
            <input onChange={props.change} type="text" value={props.theText}/>
            <h1>{props.theText}</h1>
        <button onClick={(e) => props.click(props.theText)}>SAVE</button>
        </div>
    )
}

export default Form;
