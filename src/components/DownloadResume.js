import React, { useRef, useState } from 'react'
import { PDFExport } from '@progress/kendo-react-pdf'
import { useNavigate, useParams } from 'react-router-dom'
import './DownloadResume.css'
import templates from '../Templates/Templates'
import { useStateValue } from '../StateProvider'
import ColorBox from '../UI/ColorBox'
import Fonts from '../UI/Fonts'
import Example from '../Templates/Example'



function DownloadResume() {
    const navigate = useNavigate()
    const [state, ] = useStateValue()
    const { color, template } = useParams()
    const [Template, setTemplate] = useState({ Component: templates[template] })
    const [showTemplates, setShowTemplates] = useState(false)
    const [stateColor, setColor] = useState('#' + color)
    const [font, setFont] = useState('AlegreyaSans');
    console.log(Template)

    // change the template's color
    const spanColor = e => {
        let selectedColor = "#" + (e.target.outerHTML.split('#')[1].split(';')[0])
        setColor(selectedColor)
    }
    let resume = useRef()

    // download button handler
    const download = () => {
        resume.save();
    }
    const backToBuildPage = () => {
        const templateIndex = templates.findIndex(item => {
            return item === Template.Component
        })
        if (templateIndex >= 0)
            navigate("/build/template&&color=" + stateColor.slice(1) + "&&font=" + font + "&&template=" + templateIndex)
    }


    return (
        <div className="download-resume">
            <div className='edit-panel'>
                <div className='button-container'>
                    <button onClick={download} className="hvr-shrink"><i className='bi bi-download '></i> Download</button>
                    <button onClick={backToBuildPage} className="hvr-shrink"><i className='bi bi-pencil-fill'></i> edit information</button>
                </div>

            </div>
            <div className='document-preview'>
                {<Template.Component
                    contactInformation={state?.contactInformation}
                    experiences={state?.experiences}
                    educations={state?.educations}
                    skills={state?.skills}
                    summery={state?.summery}
                    experience={state?.experience}
                    education={state?.education}
                    color={stateColor}
                    font={font}
                />}
            </div>
            <div className='download-file'>
                <PDFExport fileName='resum1.pdf' title="" subject="" ref={(r) => resume = r} style={{ fontFamily: font+" !imprtant", color: color }}>
                    {<Template.Component
                        contactInformation={state?.contactInformation}
                        experiences={state?.experiences}
                        educations={state?.educations}
                        skills={state?.skills}
                        summery={state?.summery}
                        experience={state?.experience}
                        education={state?.education}
                        color={stateColor}
                        font={font}
                    />}
                </PDFExport>
            </div>
            <span className='edit-menu'><i className='bi bi-three-dots-vertical'></i></span>
            <div className='style-panel'>
                <div className='panel-container'>
                    <div className='change-template'>
                        <div className='change-templates-container' style={{ transform: showTemplates ? 'translateX(0)' : 'translateX(200vh)' }}>
                            <div className='template-container'>
                                <div className='header'>
                                    <h3>Change Template</h3>
                                    <span onClick={() => setShowTemplates(!showTemplates)}><i className='bi bi-x-lg'></i></span>
                                </div>
                                <div className='templates-gallery'>
                                    {templates.map((item) => {
                                        const temp = {
                                            component: item
                                        }
                                        return (
                                            <div className='template-item' key={item} onClick={() => setTemplate({ Component: item })}>
                                                <temp.component
                                                    contactInformation={Example.contactInformation}
                                                    skills={Example.skills}
                                                    summery={Example.summery}
                                                    experience={Example.experience}
                                                    education={Example.education}
                                                    color={stateColor}
                                                    font={font}
                                                />
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                        <button className='choose-template hvr-shrink' onClick={() => setShowTemplates(!showTemplates)}>Change Template</button>
                    </div>
                    <div className='color-component styling-component'>
                        {<ColorBox spanColor={spanColor} />}
                    </div>
                    <div className='font-component styling-component'>
                        {<Fonts fontChange={(fontName) => setFont(fontName)} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadResume
