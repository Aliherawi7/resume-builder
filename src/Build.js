import React, { useState } from 'react'
import "./Build.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import Modal from './Modal'
import buildTools from './BuildTools'
import Template1 from './Templates/Template1'
import Template2 from './Templates/Template2'
import { useStateValue } from './StateProvider'
let counter = 0;
const templates = [Template1, Template2]
function Build() {
    const {color, template} = useParams()
    const navigate = useNavigate()
    const [showPage, setShowPage] = useState(false)
    const [state, dispatch] = useStateValue()
    const [BuildComponent, setBuildComponent] = useState({ component: buildTools[0] })
    const [TemplateComponent, setTemplateComponent] = useState({ component:templates[template]  })
    

    const handleNextButton = () => {
        if (counter >= buildTools.length - 1) return // we will do more here e.g : going to the download page
        counter++
        setBuildComponent({ component: buildTools[counter] })
    }
    const handleBackButton = () => {
        if (counter <= 0) {
            navigate('/build/getting-started')
            return
        }
        counter--
        setBuildComponent({ component: buildTools[counter] })
    }
    const pathLinkHandler = (x) => {
        counter = x
        setBuildComponent({ component: buildTools[counter] })
    }
    const addNewExperience = () => {
        counter = 3;
        pathLinkHandler(counter)
    }
    const addNewEducation = () => {
        counter = 6;
        pathLinkHandler(counter)
    }

    return (
        <div className="build">
            <div className="build-path">
                <ul className="links">
                    <li className={counter >= 0 ? "active" : ""} onClick={() => (pathLinkHandler(0))}><span>get started</span></li>
                    <li className={counter >= 1 ? "active" : ""} onClick={() => (pathLinkHandler(1))}><span>Contact</span></li>
                    <li className={counter >= 2 ? "active" : ""} onClick={() => (pathLinkHandler(3))}><span>Experience</span></li>
                    <li className={counter >= 5 ? "active" : ""} onClick={() => (pathLinkHandler(6))}> <span>Education</span></li>
                    <li className={counter >= 8 ? "active" : ""} onClick={() => (pathLinkHandler(9))}><span>Skills</span></li>
                    <li className={counter >= 10 ? "active" : ""} onClick={() => (pathLinkHandler(11))}> <span>Summery</span></li>
                </ul>
            </div>

            <div className="build-container">
                <div className="build-tools">
                    <div className="build-form">
                        {<BuildComponent.component addNewExperience={addNewExperience} addNewEducation={addNewEducation} />}
                    </div>
                    <div className="control-buttons">
                        <button className="back" onClick={handleBackButton}>Back</button>
                        <button className="save-next" onClick={handleNextButton}>Save & Next</button>
                    </div>
                </div>
                <div className="page-preview">
                    <div className="expand">
                        <span onClick={() => setShowPage(!showPage)}>
                            <i className="bi bi-arrows-angle-expand"></i>
                        </span>
                    </div>
                    <div className="document">
                        <TemplateComponent.component
                            contactInformation={state.contactInformation}
                            experiences={state.experiences}
                            educations={state.educations}
                            skills={state.skills}
                            summery={state.summery}
                            experience={state.experience}
                            education={state.education}
                            color={"#"+color}
                        />
                    </div>
                </div>
            </div>
            <Modal show={showPage} close={() => setShowPage(!showPage)}>
                <div className="document">
                    <TemplateComponent.component
                        contactInformation={state.contactInformation}
                        experiences={state.experiences}
                        educations={state.educations}
                        skills={state.skills}
                        summery={state.summery}
                        experience={state.experience}
                        education={state.education}
                        color={"#"+color}
                    />
                </div>
            </Modal>
        </div>
    )
}

export default Build
