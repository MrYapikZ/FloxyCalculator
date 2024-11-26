import React from "react";
import PropTypes from "prop-types";
import "/src/styles/Display.css"

function Display({ value }) {
    return (<div className="display">
        <input className="main-result" value={value} />
    </div>);
}

export default Display;