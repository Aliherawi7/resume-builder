import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

function Nav() {
    return (
        <nav>
            <Link to="/">
            <img className="nav-brand" src="/image/logo2.png" alt="logo" />
            </Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/templates">Templates</Link>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav> 
    )
}
 
export default Nav
