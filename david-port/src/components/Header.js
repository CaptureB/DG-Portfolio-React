import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Header() {
    const [expandHeader, setExpandHeader] = useState(false)
    return (
        <div className="header" id ={expandHeader ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => {setExpandHeader((prev) => !prev);
                }}>
                    <ReorderIcon /> 
                </button>
            </div>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/contactMe"> Contact </Link>
                <Link to="/resume"> Resume </Link>
            </div>
        </div>
    )
}

export default Header;