import React from 'react'
import { Link } from 'react-router-dom'

import "../styles/App.css";

function Navbar() {
    
    return (
        <div className="nav-container">
            <div className="nav-logo">
                <h1>LOLA</h1>
            </div>
            <div className="nav-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;

