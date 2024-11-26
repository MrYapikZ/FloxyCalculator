import React, { useState } from "react";
import CalculatorStandard from "../utils/CalculatorStandard";
import Navbar from "../components/Navbar";

function Test() {
    const [selectedPage, setSelectedPage] = useState("Standard Calculator");

    const renderPage = (page) => {
        switch (selectedPage) {
            case "Standard Calculator":
                return <CalculatorStandard />
        }
    }

    return (<div className="test">
        <Navbar onSelect={setSelectedPage} />
        <h1>{selectedPage}</h1>
        {renderPage()}
    </div>
    )
}

export default Test;