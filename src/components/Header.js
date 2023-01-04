import React, { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
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

    //onclick function for nav links
    const setActive = (path) => {
        // dispatch({
        //     type: actions.ACTIVE_NAV_LINK,
        //     item: path
        // })
        setState(path)
    }
    //onclick function for nav-brand
    const goHome = () => {
        // dispatch({
        //     type: actions.ACTIVE_NAV_LINK,
        //     item: "/"
        // })
        navigate("/");
    }
    return (
        <header className='header p-LR'>
            <Link to="/" onClick={goHome}>
                <img src="/image/logo2.png" className='nav-brand' alt='resume-builder' />
            </Link>
            <nav style={{ right: showMenu ? "0" : "-250px" }}>
                <Link to={"/"} onClick={() => setActive("/")}>
                    <span className={state === "/" ? "active" : ""}>Home</span>
                </Link>
                <Link to={"/templates"} onClick={() => setActive("/works")}>
                    <span className={state.includes("/templates") ? "active" : ""}>Templates</span>
                </Link>
                <Link to={"/about"} onClick={() => setActive("/blog")}>
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
