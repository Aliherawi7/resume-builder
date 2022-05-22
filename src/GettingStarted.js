import React,{useState, useEffect} from 'react'
import './GettingStarted.css'
import Template1 from './Templates/Template1'
import Template2 from './Templates/Template2'
import example from './Templates/example'
import { Link } from 'react-router-dom'
import ColorBox from './UI/ColorBox'
const templates = [Template1, Template2]
let counter = 0
function GettingStarted() {

    const [Template, setTemplate] = useState({component:templates[0]})
    const [color, setColor] = useState('#000')
    const spanColor = e => {
        let selectedColor = "#" + (e.target.outerHTML.split('#')[1].split(';')[0])
        setColor(selectedColor)
    }  
    const nextHandler = ()=>{
        if(counter >= templates.length-1) counter = -1
        counter++;
        console.log(templates.length)
        setTemplate({component:templates[counter]})
    }
    const prevHandler = ()=>{
        if(counter <= 0) counter = templates.length
        counter--;
        console.log(counter)
        setTemplate({component:templates[counter]})
    }
    return (
        <div className="getting-started">
            <div className='container'>
                <div className="template-tools">
                    <h2>Template name</h2>
                    <p className='template-description'></p>
                    <div className='color-box'>
                        {<ColorBox spanColor={spanColor} />}
                        <Link to={"/build/template&&color=" + color.slice(1) + "&template=" + counter} className='btn-select-template'>
                            SELECT THIS TEMPLATE
                        </Link>
                        <p><b>Can’t decide?</b> Don’t sweat it, you can always change your template later.</p>

                    </div>
                    
                </div>
                <div className='template-slider'>
                    <button className='btn-left' onClick={nextHandler}><i className='bi bi-chevron-left'></i></button>
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
                    <button className='btn-right' onClick={prevHandler}><i className='bi bi-chevron-right'></i></button>
                </div>
            </div>
        </div>
    )
}

export default GettingStarted
