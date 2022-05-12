import React,{useState, useEffect} from 'react'
import './GettingStarted.css'
import Template1 from './Templates/Template1'
import Template2 from './Templates/Template2'
import example from './Templates/example'
const templates = [Template1, Template2]

function GettingStarted() {

    const [Template, setTemplate] = useState({component:templates[0]})
    const [color, setColor] = useState('#000')
    const spanColor = e => {
        let selectedColor = "#" + (e.target.outerHTML.split('#')[1].split(';')[0])
        setColor(selectedColor)
    }

    return (
        <div className="getting-started">
            <div className='container'>
                <div className="template-tools">
                    <h2>Template name</h2>
                    <p className='template-description'></p>
                    <div className='color-box'>
                        <label>colors</label>
                        <div className='colors'>
                            <span style={{ "--color": "#000" }} onMouseOver={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#436975" }} onMouseOver={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#305fec" }} onMouseOver={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#0e9fc1" }} onMouseOver={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#7ebca3" }} onMouseOver={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#ac7bae" }} onMouseOver={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#f46464" }} onMouseOver={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#96006f" }} onMouseOver={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#c5a3ab" }} onMouseOver={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#d39c00" }} onMouseOver={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#9f44d3" }} onMouseOver={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#002661" }} onMouseOver={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#ca26ff" }} onMouseOver={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#e80505" }} onMouseOver={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#360940" }} onMouseOver={(e) => spanColor(e)}></span>
                        </div>
                        <button className='btn-select-template'>
                            SELECT THIS TEMPLATE
                        </button>
                         <p><b>Can’t decide?</b> Don’t sweat it, you can always change your template later.</p>
                    </div>
                </div>
                <div className='template-slider'>
                    <div className='page-preview'>
                       {<Template.component
                            contactInformation={example.contactInformation}
                            skills={example.skills}
                            summery={example.summery}
                            experience={example.experience}
                            education={example.education}
                            color ={color}
                        />} 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default GettingStarted
