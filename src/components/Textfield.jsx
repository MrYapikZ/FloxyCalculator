import React from "react";

function TextField(props) {
    return (
        <div className="text-field">
            <input
                type='number'
                className="text-input"
                value={props.value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={props.placeholder}
                required={props.required}
            />
        </div>
    );
}

export default TextField;