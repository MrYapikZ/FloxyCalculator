import React, { useState } from "react";
import '/src/styles/Navbar.css'
import { pre } from "motion/react-client";

function Navbar({ onSelect }) {
    const [isHidden, setIsHidden] = useState(false);

    const toggleNavbar = () => {
        setIsHidden((prev) => !prev)
    }

    return <div className={`navbar-container ${isHidden ? "hidden" : ""}`}>
        <button className="toggle-button" onClick={toggleNavbar}>
            {isHidden ? "☰" : "✕"}
        </button>
        <nav className="navbar">
            <div className="navbar-logo">Floxy</div>
            <ul className="navbar-links">
                <li><a onClick={() => onSelect("Standard Calculator")}>Standard</a></li>
            </ul>
        </nav>
    </div>
}

export default Navbar;