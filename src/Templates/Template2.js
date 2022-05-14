import React from 'react'
import "./Template.css"
import "./Template2.css"


function Template2({ contactInformation, experiences, experience, educations, education, skills, summery, color }) {
    const backgroundColor = {
        "--backgroundColor": color
    }
    const Fontcolor = {
        "--color": color
    }
    return (
        <div className="template template2 a4">
            <div className="container-bg1" style={backgroundColor}>
                <div className="container-bg2">
                    <div className='right-corner'></div>
                    <div className='top-right-corner'></div>
                    <div className='bottom-right-corner'></div>
                    <div className='profile-picture' >
                        <img src="/image/yyyy.jpg" />
                    </div>

                    <div className='contact-info'>
                        <div className='contact-name' style={Fontcolor}><p>{contactInformation?.name}</p></div>
                        <div className='contact'>
                            <p className='normal-text'><i style={Fontcolor} className="bi bi-telephone-fill"></i>{contactInformation?.phone ? contactInformation.phone : ''} </p>
                            <p className='normal-text'><i style={Fontcolor} className="bi bi-envelope-fill"></i>{contactInformation?.email ? contactInformation.email : ''}</p>
                            <p className='normal-text'><i style={Fontcolor} className="bi bi-geo-alt-fill"></i>
                                {(contactInformation?.address ? contactInformation.address + ", " : '') +
                                    (contactInformation?.city ? contactInformation.city + ", " : '') +
                                    (contactInformation?.country ? contactInformation.country : '')}</p>
                        </div>
                    </div>
                    <div className='information-container'>
                        <div className='part-a'>
                            <div className="professional-summary subtitle section">
                                <h2 style={Fontcolor}>professional summary</h2>
                                <div>
                                    {summery?.map((item) => {
                                        return item != "" ? <p className="summery normal-paragraph" key={item}>{item}</p> : null

                                    })}
                                </div>
                            </div>
                            <div className="experience subtitle section">
                                <h2 style={Fontcolor}>Experience</h2>
                                {experiences?.length > 0 ? experiences?.map((item) => {
                                    return (
                                        <div key={item} className="experience-container">
                                            <p className="normal-title mb-5">{item?.jobTitle ? item.jobTitle : ''}</p>
                                            <p className="normal-paragraph">{item?.employer ? item.employer : ''}</p>
                                            <p className="normal-paragraph">{(item?.city ? item.city : "") + (item?.state ? ", " + item?.state : '')}</p>
                                            <p className="normal-paragraph">{(item?.startDate ? item.startDate : '') + (item?.endDate ? " - " + item.endDate : '')}</p>
                                            <p className="normal-paragraph">{' '}</p>
                                        </div>
                                    )
                                }) : <div>
                                    <p className="normal-title mb-5">{experience?.jobTitle ? experience.jobTitle : ''}</p>
                                    <p className="normal-paragraph">{experience?.employer ? experience.employer : ''}</p>
                                    <p className="normal-paragraph">{experience?.city ? experience.city : "" + ", " + experience?.state ? experience.state : ''}</p>
                                    <p className="normal-paragraph">{(experience?.startDate ? experience.startDate : '') + (experience?.endDate ? " - " + experience.endDate : '')}</p>
                                </div>}
                            </div>

                        </div>
                        <div className='part-b'>
                            <div className="skills subtitle section">
                                <h2 style={Fontcolor}>Skills</h2>
                                <ul className="skill-list">
                                    {skills?.map((item) => {
                                        return item != "" ? <li key={item}>{item}</li> : null

                                    })}
                                </ul>
                            </div>
                            <div className="education subtitle section">
                                <h2 style={Fontcolor}>Education</h2>
                                {educations?.length > 0 ? educations?.map((item) => {
                                    return (
                                        <div key={item} className="experience-container">
                                            <p className="normal-title mb-5">{(item?.degree ? item.degree : '') + (item?.fieldOfStudy ? ' : ' + item.fieldOfStudy : '')}</p>
                                            <p className="normal-paragraph">{item?.schoolName ? item.schoolName : ''}</p>
                                            <p className="normal-paragraph">{(item?.city ? item.city : "") + (item?.state ? ", " + item?.state : '')}</p>
                                            <p className="normal-paragraph">{(item?.graduationMonth ? item.graduationMonth : '') + (item?.graduationYear ? " " + item.graduationYear : '')}</p>
                                            <p className="normal-paragraph">{' '}</p>
                                        </div>
                                    )
                                }) :
                                    <div className="experience-container">
                                        <p className="normal-title mb-5">{(education?.degree ? education.degree : '') + (education?.fieldOfStudy ? " : " + education.fieldOfStudy : '')}</p>
                                        <p className="normal-paragraph">{education?.schoolName ? education.schoolName : ''}</p>
                                        <p className="normal-paragraph">{(education?.city ? education.city : "") + (education?.state ? ", " + education?.state : '')}</p>
                                        <p className="normal-paragraph">{(education?.graduationMonth ? education.graduationMonth : '') + (education?.graduationYear ? " " + education.graduationYear : '')}</p>
                                        <p className="normal-paragraph">{' '}</p>
                                    </div>

                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Template2
