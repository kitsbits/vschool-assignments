import React from "react";

function FormInputs(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} type="text" name="title" value={props.inputs.title}/>
            <input onChange={props.handleChange} type="text" name="description" value={props.inputs.description}/>
            <button type="submit">ADD</button>
        </form>
    )
}

export default FormInputs;
