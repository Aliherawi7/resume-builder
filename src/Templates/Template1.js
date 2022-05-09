import React from 'react'
import "./Template1.css"

function Template1({ contactInformation, experiences,experience, educations, skills, summery }) {
    return (
        <div className="template1 a4">
            <div className="container-A">
                <div className="contact-info section">
                    <h1>{contactInformation?.name}</h1>
                    <p><i className="bi bi-telephone-fill"></i>{contactInformation?.phone} </p>
                    <p><i className="bi bi-envelope-fill"></i>{contactInformation?.email}</p>
                    <p><i className="bi bi-geo-alt-fill"></i>{contactInformation?.address + ", " + contactInformation?.city + ", " + contactInformation?.country}</p>
                </div>
                <div className="skills subtitle section">
                    <h2>Skills</h2>
                    <ul>
                        {skills?.map((item) => {
                            return (
                                <li>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="container-B">
                <div className="professional-summary subtitle section">
                    <h2>professional summary</h2>
                    <p className="normal-text">{summery}</p>
                </div>
                <div className="experience subtitle section">
                    <h2>Experience</h2>{experiences.length > 0 ? experiences?.map((item) => {
                        return (
                            <div key={item}>
                                <p className="normal-title">{item?.jobTitle}</p>
                                <p className="normal-text">{item?.employer}</p>
                                <p className="normal-text">{item?.city + ", " + item?.state}</p>
                                <p className="normal-text">{item?.startDate + " - " + item?.endDate}</p>
                                <p className="normal-text">{'this is test'}</p>
                            </div>
                        )
                    }) : <div>
                            <p className="normal-title">{experience?.jobTitle}</p>
                            <p className="normal-text">{experience?.employer}</p>
                            <p className="normal-text">{experience?.city + ", " + experience?.state}</p>
                            <p className="normal-text">{experience?.startDate + " - " + experience?.endDate}</p>
                            <p className="normal-text">{'this is test'}</p>
                        </div>}
                </div>
                <div className="education subtitle section">
                    <h2>Education</h2>

                </div>
            </div>
        </div>
    )
}

export default Template1
