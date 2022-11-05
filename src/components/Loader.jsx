import React from "react";
import { BarLoader } from "react-spinners";

import "../styles/App.css";

function Loader() {
    return (
        <div className="loader">
            <BarLoader color="#f50057" />
        </div>
    );
}

export default Loader;