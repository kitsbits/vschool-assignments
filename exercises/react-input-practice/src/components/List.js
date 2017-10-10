import React from "react";

const mapList = (props) => {
    return props.list.map((name, i) => {
        return (
            <li key={name + i}>{name}</li>
        )
    });
}

function List(props) {
    return (
        <ol>
            {mapList(props)}
        </ol>
    )
}

export default List;
