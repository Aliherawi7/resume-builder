import React, { useRef, useState } from 'react'
import ReactDOMServer from 'react-dom/server'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { PDFExport } from '@progress/kendo-react-pdf'
import { useParams } from 'react-router-dom'
import './DownloadResume.css'
import templates from './Templates/Templates'
import { useStateValue } from './StateProvider'
import ColorBox from './UI/ColorBox'
import Fonts from './UI/Fonts'
import example from './Templates/example'



function DownloadResume() {
    const [state, dispatch] = useStateValue()
    const { color, template } = useParams()
    const [Template, setTemplate] = useState({ component: templates[template] })
    const [showTemplates, setShowTemplates] = useState(false)
    const [stateColor, setColor] = useState('#' + color)
    const [font, setFont] = useState('AlegreyaSans');

    // change the template's color
    const spanColor = e => {
        let selectedColor = "#" + (e.target.outerHTML.split('#')[1].split(';')[0])
        setColor(selectedColor)
    }
    let resume = useRef()

    // download button handler
    const download = () => {
        const doc = new jsPDF('portrait', 'pt', 'a4');
        //doc.addFont(font, font, 'normal')
        doc.setFont("Times-Roman","TImes-Roman","normal")
        console.log(doc.getFont())

        const component = <Template.component
            contactInformation={state.contactInformation}
            experiences={state.experiences}
            educations={state.educations}
            skills={state.skills}
            summery={state.summery}
            experience={state.experience}
            education={state.education}
            color={stateColor}
            font={font}
        />
        doc.html(ReactDOMServer.renderToStaticMarkup(component), {
            callback: () => {
                doc.save("myResume.pdf")
            }
        })
    }
    const download2 = () => {
        html2canvas(document.querySelector(".template")).then(canvas => {
            document.body.appendChild(canvas);
            const imgData = canvas.toDataURL('document/pdf');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'pdf', 0, 0);
            pdf.addFont(font, font, 'normal');
            pdf.save("resume.pdf")
        })
    }
    const download3 = () => {
        resume.save();
    }


    return (
        <div className="download-resume">
            <div className='edit-panel'>
                <div className='download-button'>
                    <button onClick={download3}><i className='bi bi-download'></i> Download</button>
                </div>
            </div>
            <div className='document-preview'>
                <PDFExport fileName='resum1.pdf' title="" subject="" ref={(r)=> resume=r}>
                    {<Template.component
                        contactInformation={state.contactInformation}
                        experiences={state.experiences}
                        educations={state.educations}
                        skills={state.skills}
                        summery={state.summery}
                        experience={state.experience}
                        education={state.education}
                        color={stateColor}
                        font={font}
                    />}
                </PDFExport>
                {/* {<Template.component
                    contactInformation={state.contactInformation}
                    experiences={state.experiences}
                    educations={state.educations}
                    skills={state.skills}
                    summery={state.summery}
                    experience={state.experience}
                    education={state.education}
                    color={stateColor}
                    font={font}
                />} */}

            </div>
            <div className='style-panel'>
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
                                        <div className='template-item' key={item} onClick={() => setTemplate({ component: item })}>
                                            <temp.component
                                                contactInformation={example.contactInformation}
                                                skills={example.skills}
                                                summery={example.summery}
                                                experience={example.experience}
                                                education={example.education}
                                                color={stateColor}
                                                font={font}
                                            />
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                    <button className='choose-template' onClick={() => setShowTemplates(!showTemplates)}>Change Template</button>
                </div>
                <div className='color-component styling-component'>
                    {<ColorBox spanColor={spanColor} />}
                </div>
                <div className='font-component styling-component'>
                    {<Fonts fontChange={(fontName) => setFont(fontName)} />}
                </div>
            </div>
        </div>
    )
}

export default DownloadResume
