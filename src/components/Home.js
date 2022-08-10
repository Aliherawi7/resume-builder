import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Templates,{templatesName} from '../Templates/Templates.js'
import example ,{templateColor} from '../Templates/example'
import PopularTemplate from "./PopularTemplate"


function Home() {
    return (
        <main className='m-LR fade-in'>
            <div className="home">
                <div className="intro ">
                    <h3>BUILD</h3>
                    <h2>YOUR</h2>
                    <h1>RESUME</h1>
                    <h3>Free and Fast</h3>
                    <Link to={"/build/getting-started&&color=87c03d&&template=5"}><button className='hvr-buzz-out'>Let's Build A Resume</button>
                    </Link>
                </div>
            </div>
            <PopularTemplate  navigate={""}/>
        </main>
    )
}

export default Home
