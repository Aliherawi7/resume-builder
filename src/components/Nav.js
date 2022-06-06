import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

function Nav() {
    const [state, setState] = useState(false)
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
            <div className='nav-toggle-btn' onClick={() => setState(!state)}>
                <i className='bi bi-list'></i>
            </div>
            <div className="nav-toggle-links" style={{
                transform: state ? "translateY(0)" : "translateY(-30px)",
                visibility: state ? "visible":"hidden",
            }}>
                <Link to="/"><i className='bi bi-house-fill'></i> Home</Link>
                <Link to="/templates"><i className='bi bi-file-text-fill'></i> Templates</Link>
                <Link to="/contact"><i className='bi bi-telephone-fill'></i> contact</Link>
                <Link to="/about"><i className='bi bi-person-fill'></i> About</Link>
            </div>
        </nav>
    )
}

export default Nav
