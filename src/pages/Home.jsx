import React from "react"
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to my portfolio</h1>
            <p>Here you can see all my projects</p>
            <Link to="/profile">
                <button>Learn More</button>
            </Link>
        </div>
    )
}

export default Home;


