import React, { useState } from 'react'
import "./Build.css"
import { useNavigate, useParams } from 'react-router-dom'
import Modal from '../UI/Modal'
import buildTools from './BuildTools'
import templates from '../Templates/Templates'
import { useStateValue } from '../StateProvider'

//this is  next and back buttons controller
let counter = 0;
function Build() {
    const { color, template, font } = useParams()
    const navigate = useNavigate()
    const [showPage, setShowPage] = useState(false)

    const [state, dispatch] = useStateValue()

    // keep the build step component e.g contact, experience
    const [BuildComponent, setBuildComponent] = useState({ component: buildTools[0] })

    // keep the paper template while adding information
    const [TemplateComponent, setTemplateComponent] = useState({ component: templates[template] })

    // go to te next build step
    const handleNextButton = () => {
        if (counter >= buildTools.length - 1) {
            navigate("/download-resume&&template=" + template + "&color=" + color)
            counter = 0
            return
        }
        counter++
        setBuildComponent({ component: buildTools[counter] })
    }
    // go to te previous build step
    const handleBackButton = () => {
        if (counter <= 0) {
            navigate('/build/getting-started')
            return
        }
        counter--
        setBuildComponent({ component: buildTools[counter] })
    }
    // handle path links clicks
    const pathLinkHandler = (x) => {
        counter = x
        setBuildComponent({ component: buildTools[counter] })
    }

    // take the user to the adding experience page
    const addNewExperience = () => {
        counter = 3;
        pathLinkHandler(counter)
    }
    // take the user to the adding education page
    const addNewEducation = () => {
        counter = 6;
        pathLinkHandler(counter)
    }
    return (
        <div className="build">
            <div className="build-path">
                <div className='path-name-medium'>
                    <span className={counter == 0 ? "active" : ""}>get started</span>
                    <span className={(counter == 1 ) ? "active" : ""}>Contact</span>
                    <span className={(counter >= 2 && counter < 5) ? "active" : ""}>Experience</span>
                    <span className={(counter >= 5 && counter < 8) ? "active" : ""}>Education</span>
                    <span className={(counter >= 8 && counter < 10) ? "active" : ""}>Skills</span>
                    <span className={(counter >= 10) ? "active" : ""}>Summary</span>
                </div>
                <ul className="links">
                    <li className={counter >= 0 ? "active" : ""} onClick={() => (pathLinkHandler(0))}><span>get started</span></li>
                    <li className={counter >= 1 ? "active" : ""} onClick={() => (pathLinkHandler(1))}><span>Contact</span></li>
                    <li className={counter >= 2 ? "active" : ""} onClick={() => (pathLinkHandler(3))}><span>Experience</span></li>
                    <li className={counter >= 5 ? "active" : ""} onClick={() => (pathLinkHandler(6))}> <span>Education</span></li>
                    <li className={counter >= 8 ? "active" : ""} onClick={() => (pathLinkHandler(9))}><span>Skills</span></li>
                    <li className={counter >= 10 ? "active" : ""} onClick={() => (pathLinkHandler(11))}> <span>Summary</span></li>
                </ul>
            </div>

            <div className="build-container">
                <div className="build-tools">
                    <div className="build-form">
                        {<BuildComponent.component addNewExperience={addNewExperience} pathLinkHandler={pathLinkHandler} addNewEducation={addNewEducation} />}
                    </div>
                    <div className="control-buttons">
                        <button className="back hvr-shadow-radial" onClick={handleBackButton}>Back</button>
                        <button className="save-next hvr-shadow-radial" onClick={handleNextButton}>Save & Next</button>
                    </div>
                </div>
                <div className="page-preview">
                    <div className="expand">
                        <span onClick={() => setShowPage(!showPage)}>
                            <i className="bi bi-arrows-angle-expand"></i>
                        </span>
                    </div>
                    <div className="document" id='document'>
                        <TemplateComponent.component
                            contactInformation={state.contactInformation}
                            experiences={state.experiences}
                            educations={state.educations}
                            skills={state.skills}
                            summery={state.summery}
                            experience={state.experience}
                            education={state.education}
                            color={"#" + color}
                            font={font}
                        />
                    </div>
                </div>
            </div>
            <Modal show={showPage} close={() => setShowPage(!showPage)}>
                <div className="document">
                    <TemplateComponent.component
                        image={state.image}
                        contactInformation={state.contactInformation}
                        experiences={state.experiences}
                        educations={state.educations}
                        skills={state.skills}
                        summery={state.summery}
                        experience={state.experience}
                        education={state.education}
                        color={"#" + color}
                        font={font}
                    />
                </div>
            </Modal>
        </div>
    )
}

export default Build
