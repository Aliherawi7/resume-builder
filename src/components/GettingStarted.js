import React,{useState} from 'react'
import './GettingStarted.css'
import Templates,{templatesName} from '../Templates/Templates'
import example from '../Templates/example'
import { Link, useNavigate,useParams } from 'react-router-dom'
import ColorBox from '../UI/ColorBox'
import Fonts from '../UI/Fonts'


// controll build path
let counter = 0
function GettingStarted() {
    const { color, template } = useParams();
    console.log(color)
    console.log(template)
    const [Template, setTemplate] = useState({component:Templates[template]})
    const [font, setFont] = useState('AlegreyaSans');
    const [tempColor, setColor] = useState("#"+color)

    //set the template color
    const spanColor = e => {
        let selectedColor = "#" + (e.target.outerHTML.split('#')[1].split(';')[0])
        setColor(selectedColor)
    } 
    
    // slide to next step
    const nextHandler = ()=>{
        if(counter >= Templates.length-1) counter = -1
        counter++;
        setTemplate({component:Templates[counter]})
    }
    // slide to previous step
    const prevHandler = ()=>{
        if(counter <= 0) counter = Templates.length
        counter--;
        setTemplate({component:Templates[counter]})
    }
    return (
        <div className="getting-started">
            <div className='container'>
                <div className="template-tools">
                    <h2>{templatesName[counter].name}</h2>
                    <p className='template-description'>{templatesName[counter].description}</p>
                    <div className='color-box'>
                        {<ColorBox spanColor={spanColor} />}
                        <Fonts fontChange={(fontName)=> setFont(fontName)} />
                        <Link to={"/build/template&&color=" + tempColor.slice(1)+"&&font="+ font + "&&template=" + counter} className='btn-select-template'>
                            SELECT THIS TEMPLATE
                        </Link>
                        <p><b>Can’t decide?</b> Don’t sweat it, you can always change your template later.</p>

                    </div>
                    
                </div>
                <div className='template-slider'>
                    <button className='btn-left hvr-shrink ' onClick={nextHandler}><i className='bi bi-chevron-left'></i></button>
                    <div className='page-preview'>
                       {<Template.component
                            contactInformation={example.contactInformation}
                            skills={example.skills}
                            summery={example.summery}
                            experience={example.experience}
                            education={example.education}
                            color ={tempColor}
                            font={font}
                        />}
                    </div>
                    <button className='btn-right hvr-shrink ' onClick={prevHandler}><i className='bi bi-chevron-right'></i></button>
                </div>
            </div>
        </div>
    )
}

export default GettingStarted
