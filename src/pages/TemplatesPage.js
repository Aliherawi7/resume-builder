import React, { useEffect, useState } from 'react'
import "./TemplatesPage.css"
import Templates, { templatesName } from '../Templates/Templates'
import example, { templateColor } from '../Templates/example'
import { Link } from 'react-router-dom'
import ColorBox from "../UI/ColorBox"
import Fonts from "../UI/Fonts"
import PopularTemplate from '../components/PopularTemplate'



let index = 0;
function TemplatesPage() {

    const [template, setTemplate] = useState({ component: Templates[index] })
    const [font, setFont] = useState('AlegreyaSans');
    const [tempColor, setTemColor] = useState("#000");
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    //set the template color
    const spanColor = e => {
        let selectedColor = "#" + (e.target.outerHTML.split('#')[1].split(';')[0])
        setTemColor(selectedColor)
    }
    const changeTemplate = (id) => {
        index = id
        setTemplate({ component: Templates[id] })
        setTemColor(templateColor[index])
        window.scrollTo(0, 0)
    }
    return (
        <div className='templates-page fade-in m-LR'>
            <div className='getting-started'>
                <div className='container'>
                    <div className="template-tools right-to-left">
                        <h2>{templatesName[index].name}</h2>
                        <p className='template-description'>{templatesName[index].description}</p>
                        <div className='color-box'>
                            {<ColorBox spanColor={spanColor} />}
                            <Fonts fontChange={(fontName) => setFont(fontName)} />
                            <Link to={"/build/template&&color=" + tempColor.slice(1) + "&&font=" + font + "&&template=" + index} className='btn-select-template hvr-shadow-radial'>
                                SELECT THIS TEMPLATE
                            </Link>
                            <p><b>Can’t decide?</b> Don’t sweat it, you can always change your template later.</p>

                        </div>

                    </div>
                    <div className='template-slider left-to-right'>
                        <div className='page-preview'>
                            {<template.component
                                contactInformation={example.contactInformation}
                                skills={example.skills}
                                summery={example.summery}
                                experience={example.experience}
                                education={example.education}
                                color={tempColor}
                                font={font}
                            />}
                        </div>
                    </div>
                </div>
            </div>
            <PopularTemplate navigate={changeTemplate} />
        </div>
    )
}

export default TemplatesPage