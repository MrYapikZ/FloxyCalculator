import React from "react";
import PropTypes from "prop-types";
import "/src/styles/Button.css";

function Button({ label, onClick, className }){
    return <button className={`button ${className}`} onClick={() => onClick(label)}>{label}</button>
}

export default Button;