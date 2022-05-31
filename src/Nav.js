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
                <Link to="/"><i className='bi bi-house-fill'></i> Home</Link>
                <Link to="/templates"><i className='bi bi-file-text-fill'></i> Templates</Link>
                <Link to="/contact"><i className='bi bi-telephone-fill'></i> contact</Link>
                <Link to="/about"><i className='bi bi-person-fill'></i> About</Link>
            </div>
        </nav> 
    )
}

export default Nav
