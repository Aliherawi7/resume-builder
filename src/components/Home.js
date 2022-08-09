import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="home">
            <div className="intro">
                <h3>BUILD</h3>
                <h2>YOUR</h2>
                <h1>RESUME</h1>
                <h3>Free and Fast</h3>
                <Link to="/build/getting-started"><button className='hvr-buzz-out'>Let's Build A Resume</button>
                </Link>
            </div>
        </div>
    ) 
}

export default Home
 