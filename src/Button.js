import React from "react";

const Button = props => {
    return (
        <button className="xs-col-12" style={btnStyle} onClick={props.onClick}>
            {props.content}
        </button>
    );
};
const btnStyle = {
    background: "gray",
    fontSize: "25px",

    color: "white",

    padding: "10px 5px"
};

export default Button;
