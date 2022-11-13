import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'


import "../styles/App.css";

function Navbar() {
    const [error, setError] = useState(false)
    const [ toggle, setToggle ] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleMenu = () => {
        setToggle(!toggle)
    }

    if(error) {
        throw new Error("Something went wrong")
    }
    
    return (
        <div className="nav-container">
            <div className="nav-logo">
                <h1>LOLA</h1>
            </div>
            <div className="nav-links">
                {(toggle || screenWidth > 768) && (
                    <ul>
                        <li>
                            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
                        </li>
                        <li>
                            <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>Profile</Link>
                        </li>
                        <li>
                            <Link to="/projects" style={{ textDecoration: 'none', color: 'black' }}>Projects</Link>
                        </li>
                    </ul>
                )}
                <button className='nav-icon' onClick={toggleMenu}>
                    <GiHamburgerMenu />
                </button>
            </div>
        </div>
    )
}

export default Navbar;