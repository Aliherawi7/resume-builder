import React, { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { BRAND_IMAGE } from '../Constants/UIConstants';
import "./Header.css"

function Header() {
    // const [{ navActive }, dispatch] = useStatevalue();
    const navActive = window.location.pathname
    const navigate = useNavigate();
    const [state, setState] = useState(navActive + "");
    const [showMenu, setShowMenu] = useState(false);
    
    // get sctived nav link from data layer
    useEffect(() => {
        setState(navActive + "")
    }, [navActive])

    return (
        <header className='header p-LR'>
            <Link to="/">
                <img src={BRAND_IMAGE} className='nav-brand' alt='resume-builder' />
            </Link>
            <nav style={{ right: showMenu ? "0" : "-250px" }}>
                <Link to={"/"} >
                    <span className={state === "/" ? "active" : ""}>Home</span>
                </Link>
                <Link to={"/templates"}>
                    <span className={state.includes("/templates") ? "active" : ""}>Templates</span>
                </Link>
                <Link to={"/about"} >
                    <span className={state.includes("/about") ? "active" : ""}>About</span>
                </Link>
            </nav>
            <div className='toggle-menu'>
                <input type="checkbox" onChange={() => setShowMenu(!showMenu)} className="toggle" />
                <div className="burger">
                    <div></div>
                </div>
            </div>

        </header>
    )
}

export default Header
