import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Templates from '../Templates/Templates.js'
import example ,{templateColor} from '../Templates/example'
import templates from '../Templates/Templates.js'
function Home() {
    return (
        <main className='m-LR'>
            <div className="home">
                <div className="intro">
                    <h3>BUILD</h3>
                    <h2>YOUR</h2>
                    <h1>RESUME</h1>
                    <h3>Free and Fast</h3>
                    <Link to={"/build/getting-started&&color=87c03d&&template=5"}><button className='hvr-buzz-out'>Let's Build A Resume</button>
                    </Link>
                </div>
            </div>
            <div className='popular-templates'>
                {Templates.map((item) => {
                    const temp ={template:item}
                    const index = Templates.findIndex((input)=>{
                        return input == item
                    });
                    const color = templateColor[index];
                    console.log(index)
                    return (
                        <div className={'temp-item'+(index ==2 || index==3? " xlarg":" ")} key={item.name} style={{backgroundColor:color}}>
                            {<temp.template
                                contactInformation={example.contactInformation}
                                skills={example.skills}
                                summery={example.summery}
                                experience={example.experience}
                                education={example.education}
                                color={color}
                                font={"Maler"}
                            />}
                            <div className='details'>
                                <Link to={"/build/getting-started&&color="+color.substring(1)+"&&template="+index}>
                                <button className='browse-btn ' style={{"--color":color}}>Browse</button>
                                </Link>
                            </div>
                        </div>
                    )
                })}

            </div>
        </main>
    )
}

export default Home
