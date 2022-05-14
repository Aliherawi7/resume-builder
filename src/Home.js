import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="home">
            <div className="intro">
                <h2>
                    BUILD A RESUME
                    THAT WILL GET YOU HIRED
                </h2>
                <Link to="/build/getting-started"><button>Let's Build A Resume</button>
                </Link>
            </div>
        </div>
    ) 
}

export default Home
 