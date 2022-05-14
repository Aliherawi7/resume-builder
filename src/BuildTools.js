import React, { useState, useEffect, createElement, Suspense } from 'react'
import './BuildTools.css'
import { useStateValue } from './StateProvider'
import { actions } from './reducer'

export function GetStarted() {
    return (
        <div className="get-started animation">
            <h1>This is first step </h1>
        </div>
    )
} 
// contact component
export function Contact() {   
    const [state, dispatch] = useStateValue();
    const nameChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_CONTACT_INFROMATION,
            item: {
                name: e.target.value,
                address: state.contactInformation?.address,
                city: state.contactInformation?.city,
                state: state.contactInformation?.state,
                zipCode: state.contactInformation?.zipCode,
                country: state.contactInformation?.country,
                email: state.contactInformation?.email,
                phone: state.contactInformation?.phone
            }
        })
    }
    const addressChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_CONTACT_INFROMATION,
            item: {
                name: state.contactInformation?.name,
                address: e.target.value,
                city: state.contactInformation?.city,
                state: state.contactInformation?.state,
                zipCode: state.contactInformation?.zipCode,
                country: state.contactInformation?.country,
                email: state.contactInformation?.email,
                phone: state.contactInformation?.phone
            }
        })
    }
    const cityChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_CONTACT_INFROMATION,
            item: {
                name: state.contactInformation?.name,
                address: state.contactInformation?.address,
                city: e.target.value,
                state: state.contactInformation?.state,
                zipCode: state.contactInformation?.zipCode,
                country: state.contactInformation?.country,
                email: state.contactInformation?.email,
                phone: state.contactInformation?.phone
            }
        })
    }
    const stateChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_CONTACT_INFROMATION,
            item: {
                name: state.contactInformation?.name,
                address: state.contactInformation?.address,
                city: state.contactInformation?.city,
                state: e.target.value,
                zipCode: state.contactInformation?.zipCode,
                country: state.contactInformation?.country,
                email: state.contactInformation?.email,
                phone: state.contactInformation?.phone
            }
        })
    }
    const zipCodeChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_CONTACT_INFROMATION,
            item: {
                name: state.contactInformation?.name,
                address: state.contactInformation?.address,
                city: state.contactInformation?.city,
                state: state.contactInformation?.state,
                zipCode: e.target.value,
                country: state.contactInformation?.country,
                email: state.contactInformation?.email,
                phone: state.contactInformation?.phone

            }
        })
    }
    const countryChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_CONTACT_INFROMATION,
            item: {
                name: state.contactInformation?.name,
                address: state.contactInformation?.address,
                city: state.contactInformation?.city,
                state: state.contactInformation?.state,
                zipCode: state.contactInformation?.zipCode,
                email: state.contactInformation?.email,
                phone: state.contactInformation?.phone,
                country: e.target.value
            }
        })
    }
    const emailChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_CONTACT_INFROMATION,
            item: {
                name: state.contactInformation?.name,
                address: state.contactInformation?.address,
                city: state.contactInformation?.city,
                state: state.contactInformation?.state,
                zipCode: state.contactInformation?.zipCode,
                phone: state.contactInformation?.phone,
                country: state.contactInformation?.country,
                email: e.target.value,
            }
        })
    }
    const phoneChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_CONTACT_INFROMATION,
            item: {
                name: state.contactInformation?.name,
                address: state.contactInformation?.address,
                city: state.contactInformation?.city,
                state: state.contactInformation?.state,
                zipCode: state.contactInformation?.zipCode,
                phone: state.contactInformation?.phone,
                country: state.contactInformation?.country,
                email: state.contactInformation?.email,
                phone: e.target.value
            }
        })
    }

    return (
        <div className="contact common-input-style animation">
            <h1>Let's complete your Resume Heading</h1>
            <p>How do you want employers to contact you?</p>
            <div className="input-group">
                <label >Name</label>
                <input type="text" value={state.contactInformation?.name} onChange={(e) => (nameChangeHandler(e))} />
            </div>
            <div className="input-group">
                <label >Address</label>
                <input type="text" value={state.contactInformation?.address} onChange={(e) => (addressChangeHandler(e))} />
            </div>
            <div className="input-row">
                <div className="input-group ">
                    <label >City</label>
                    <input type="text" value={state.contactInformation?.city} onChange={(e) => (cityChangeHandler(e))} />
                </div>
                <div className="input-group multi-input">
                    <label >State</label>
                    <input type="text" value={state.contactInformation?.state} onChange={(e) => (stateChangeHandler(e))} />
                </div>
                <div className="input-group multi-input">
                    <label >ZIP code</label>
                    <input type="text" value={state.contactInformation?.zipCode} onChange={(e) => (zipCodeChangeHandler(e))} />
                </div>
            </div>
            <div className="input-group">
                <label >Country</label>
                <input type="text" value={state.contactInformation?.country} onChange={(e) => (countryChangeHandler(e))} />
            </div>
            <div className="input-row">
                <div className="input-group min-width">
                    <label >Email</label>
                    <input type="email" value={state.contactInformation?.email} onChange={(e) => emailChangeHandler(e)} />
                </div>
                <div className="input-group multi-input">
                    <label >Phone</label>
                    <input type="text" value={state.contactInformation?.phone} onChange={(e) => phoneChangeHandler(e)} />
                </div>
            </div>
        </div>
    )
}
// end contact component

// Experience components
export function ExperienceInfo() {
    return (
        <div className="info animation">
            <h2>Next Section:</h2>
            <h1>Work Experience</h1>
            <ul className="tips-list">
                <li className="tips-item"><span>Work Experience is usually the most important section on your entire resume.</span></li>
                <li className="tips-item"><span>Here, recruiters will look for evidence that demonstrates you have what it takes for the job at hand.</span></li>
                <li className="tips-item"><span>Let's gather information about your accomplishments in past jobs to fill this section.</span></li>
            </ul>
        </div>
    )
}
export function Experience() {
    const [state, dispatch] = useStateValue();
    const jobTitleChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_EXPERIENCE,
            item: {
                jobTitle: e.target.value,
                employer: state.experience.employer,
                city: state.experience.city,
                state: state.experience.state,
                startDate: state.experience.stateDate,
                endDate: state.experience.endDate

            }
        })
    }
    const employerChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_EXPERIENCE,
            item: {
                jobTitle: state.experience.jobTitle,
                employer: e.target.value,
                city: state.experience.city,
                state: state.experience.state,
                startDate: state.experience.stateDate,
                endDate: state.experience.endDate

            }
        })
    }
    const cityChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_EXPERIENCE,
            item: {
                jobTitle: state.experience.jobTitle,
                employer: state.experience.employer,
                city: e.target.value,
                state: state.experience.state,
                startDate: state.experience.stateDate,
                endDate: state.experience.endDate

            }
        })
    }
    const stateChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_EXPERIENCE,
            item: {
                jobTitle: state.experience.jobTitle,
                employer: state.experience.employer,
                city: state.experience.city,
                state: e.target.value,
                startDate: state.experience.stateDate,
                endDate: state.experience.endDate

            }
        })
    }
    const startDateChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_EXPERIENCE,
            item: {
                jobTitle: state.experience.jobTitle,
                employer: state.experience.employer,
                city: state.experience.city,
                state: state.experience.state,
                startDate: e.target.value,
                endDate: state.experience.endDate

            }
        })
    }
    const endDateChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_EXPERIENCE,
            item: {
                jobTitle: state.experience.jobTitle,
                employer: state.experience.employer,
                city: state.experience.city,
                state: state.experience.state,
                startDate: state.experience.startDate,
                endDate: e.target.value

            }
        })
    }
    const checkBoxChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_EXPERIENCE,
            item: {
                jobTitle: state.experience.jobTitle,
                employer: state.experience.employer,
                city: state.experience.city,
                state: state.experience.state,
                startDate: state.experience.startDate,
                endDate: e.target.checked ? 'current' : ''
            }
        })
    }

    return (
        <div className="experience  common-input-style animation">
            <h1>Work Experience</h1>
            <p>Start with your most recent work experience.</p>
            <div className="input-group">
                <label >Job Title</label>
                <input type="text" value={state.experience?.jobTitle} onChange={(e) => jobTitleChangeHandler(e)} />
            </div>
            <div className="input-group">
                <label >Employer</label>
                <input type="text" value={state.experience.employer} onChange={(e) => employerChangeHandler(e)} />
            </div>
            <div className="input-row">
                <div className="input-group half-width">
                    <label >City</label>
                    <input type="text" value={state.experience.city} onChange={(e) => cityChangeHandler(e)} />
                </div>
                <div className="input-group multi-input half-width">
                    <label >State</label>
                    <input type="text" value={state.experience.state} onChange={(e) => stateChangeHandler(e)} />
                </div>
            </div>

            <div className="input-row">
                <div className="input-group half-width">
                    <label >start date</label>
                    <input type="date" value={state.experience.startDate} onChange={(e) => startDateChangeHandler(e)} />
                </div>
                <div className="input-group multi-input half-width position-relative">
                    <span className={state.experience.endDate == 'current' ? 'deactive' : ''}></span>
                    <label >end date</label>
                    <input type="date" value={state.experience.endDate} onChange={(e) => endDateChangeHandler(e)} />
                </div>
            </div>
            <div className="input-check">
                <input type="checkbox" onChange={e => checkBoxChangeHandler(e)} />
                <span>I currently work here</span>
            </div>
        </div>
    )
}
export function ReviewExperience({addNewExperience}) {
    const [state, dispatch] = useStateValue()

    useEffect(() => {
        const holder = [...state.experiences];
        if (!holder.includes(state.experience) && state.education != {}) {
            dispatch({
                type: actions.ADD_EXPERIENCES,
                item: state.experience
            })
            dispatch({
                type: actions.ADD_EDUCATION,
                item: {}
            })
        }
    }, [])
    const deleteButtonHandler = (item) => {
        const itemIndex = state.experiences.findIndex((el) => {
            return el == item
        })
        if (itemIndex >= 0) {
            let holder = state.experiences;
            holder.splice(itemIndex, 1);
            dispatch({
                type: actions.REMOVE_FROM_EXPERIENCES,
                item: holder
            })

        }
        if (item == state.experience) {
            dispatch({
                type: actions.ADD_EXPERIENCE,
                item: {}
            })
        }
    }
    return (
        <div className="build-tool-review common-input-style">
            <h1>Review work experience</h1>
            <p>Add, edit or remove your work experience.</p>
            <div className="build-tool-history">
                {state.experiences.length > 0 ? state.experiences?.map((item) => {
                    let holder;
                    if (item.jobTitle) {
                        holder = (
                            <div className="review position-relative">
                                <div className="review-buttons">
                                    <span><i className="bi bi-pencil-fill"></i></span>
                                    <span onClick={() => (deleteButtonHandler(item))}><i className="bi bi-trash-fill"></i></span>
                                    <span><i className="bi bi-arrows-move"></i></span>
                                </div>
                                <h2 className="normal-text">{item?.jobTitle ? item.jobTitle : "" + ", " + item.employer ? item.employer : ""}</h2>
                                <p className="normal-text">{(item?.startDate ? item.startDate + " - " : '') + (item.endDate ? item.endDate : '')}</p>
                            </div>
                        )
                    }
                    return holder

                }) : ""}
            </div>
            <button className="build-tool-review-button" onClick={addNewExperience}>add another experience</button>
        </div>
    )
}
// end Experience components

// Education components
export function EducationInfo() {
    return (
        <div className="info animation">
            <h2>Next Section:</h2>
            <h1>Education</h1>
            <ul className="tips-list">
                <li className="tips-item"><span>List your degrees in order of the most recently accomplished degree first.</span></li>
                <li className="tips-item"><span>If you’re still in school, mention your expected graduate date.</span></li>
                <li className="tips-item"><span>It’s optional to include any honors, awards, scholarships or professional certifications.</span></li>
            </ul>
        </div>
    )
}
export function Education() {
    const [state, dispatch] = useStateValue();

    const schoolNameChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_EDUCATION,
            item: {
                schoolName: e.target.value,
                city: state.education.city,
                country: state.education.country,
                degree: state.education.degree,
                fieldOfStudy: state.education.fieldOfStudy,
                graduationMonth: state.education.graduationMonth,
                graduationYear: state.education.graduationYear
            }
        })
    }
    const cityChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_EDUCATION,
            item: {
                schoolName: state.education.schoolName,
                city: e.target.value,
                country: state.education.country,
                degree: state.education.degree,
                fieldOfStudy: state.education.fieldOfStudy,
                graduationMonth: state.education.graduationMonth,
                graduationYear: state.education.graduationYear
            }
        })
    }
    const countryChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_EDUCATION,
            item: {
                schoolName: state.education.schoolName,
                city: state.education.city,
                country: e.target.value,
                degree: state.education.degree,
                fieldOfStudy: state.education.fieldOfStudy,
                graduationMonth: state.education.graduationMonth,
                graduationYear: state.education.graduationYear
            }
        })
    }
    const degreeChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_EDUCATION,
            item: {
                schoolName: state.education.schoolName,
                city: state.education.city,
                country: state.education.country,
                degree: e.target.value,
                fieldOfStudy: state.education.fieldOfStudy,
                graduationMonth: state.education.graduationMonth,
                graduationYear: state.education.graduationYear
            }
        })
    }
    const fieldOfStudyChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_EDUCATION,
            item: {
                schoolName: state.education.schoolName,
                city: state.education.city,
                country: state.education.country,
                degree: state.education.degree,
                fieldOfStudy: e.target.value,
                graduationMonth: state.education.graduationMonth,
                graduationYear: state.education.graduationYear
            }
        })
    }
    const graduationMonthChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_EDUCATION,
            item: {
                schoolName: state.education.schoolName,
                city: state.education.city,
                country: state.education.country,
                degree: state.education.degree,
                fieldOfStudy: state.education.fieldOfStudy,
                graduationMonth: e.target.value,
                graduationYear: state.education.graduationYear
            }
        })
    }
    const graduationYearChangeHandler = (e) => {
        dispatch({
            type: actions.ADD_EDUCATION,
            item: {
                schoolName: state.education.schoolName,
                city: state.education.city,
                country: state.education.country,
                degree: state.education.degree,
                fieldOfStudy: state.education.fieldOfStudy,
                graduationMonth: state.education.graduationMonth,
                graduationYear: e.target.value
            }
        })
    }

    return (
        <div className="education common-input-style animation">
            <h1>Education</h1>
            <p>Where did you go to school?</p>
            <div className="input-group">
                <label >School Name</label>
                <input type="text" required value={state.education?.schoolName} onChange={(e) => schoolNameChangeHandler(e)} />
            </div>
            <div className="input-row">
                <div className="input-group ">
                    <label >City</label>
                    <input type="text" value={state.education?.city} onChange={(e) => cityChangeHandler(e)} />
                </div>
                <div className="input-group multi-input">
                    <label >Country</label>
                    <input type="text" value={state.education?.country} onChange={(e) => countryChangeHandler(e)} />
                </div>
            </div>
            <div className="input-group">
                <label >Degree</label>
                <select onChange={(e) => degreeChangeHandler(e)}>
                    <option>Select Your Degree</option>
                    <option>High School Diploma</option>
                    <option>GED</option>
                    <option>Associate of Arts</option>
                    <option>Associate of Science</option>
                    <option>Associate of Applied Science</option>
                    <option>Bachelor of Arts</option>
                    <option>Bachelor of Science</option>
                    <option>BBA</option>
                    <option>Master of Arts</option>
                    <option>Master of Science</option>
                    <option>MBA</option>
                    <option>J.D.</option>
                    <option>M.D.</option>
                    <option>Ph.D.</option>
                    <option>+ Enter your own study</option>
                </select>
            </div>
            <div className="input-group">
                <label >Field of Study</label>
                <input type="text" value={state.education?.fieldOfStudy} onChange={(e) => fieldOfStudyChangeHandler(e)} />
            </div>
            <div className="input-row ">
                <label className="multi-input">Graduation Date</label>
                <select className="multi-input" required value={state.education.graduationMonth} onChange={(e) => graduationMonthChangeHandler(e)}>
                    <option>Month</option>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option>May</option>
                    <option>Jun</option>
                    <option>Jul</option>
                    <option>Aug</option>
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>Nov</option>
                    <option>Dec</option>
                </select>
                <select className="multi-input" required value={state.education.graduationYear} onChange={(e) => graduationYearChangeHandler(e)}>
                    <option>Year</option>
                    <option>2030</option>
                    <option>2029</option>
                    <option>2028</option>
                    <option>2027</option>
                    <option>2026</option>
                    <option>2025</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                    <option>2009</option>
                    <option>2008</option>
                    <option>2007</option>
                    <option>2006</option>
                    <option>2005</option>
                    <option>2004</option>
                    <option>2003</option>
                    <option>2002</option>
                    <option>2001</option>
                    <option>2000</option>
                    <option>1999</option>
                    <option>1998</option>
                    <option>1997</option>
                    <option>1996</option>
                    <option>1995</option>
                    <option>1994</option>
                    <option>1993</option>
                    <option>1992</option>
                    <option>1991</option>
                    <option>1990</option>
                    <option>1989</option>
                    <option>1988</option>
                    <option>1987</option>
                    <option>1986</option>
                    <option>1985</option>
                    <option>1984</option>
                    <option>1983</option>
                    <option>1982</option>
                    <option>1981</option>
                    <option>1980</option>
                </select>
            </div>
        </div>
    )
}
export function ReviewEducation({addNewEducation}) {
    const [state, dispatch] = useStateValue()

    useEffect(() => {
        const holder = [...state.educations];
        if (!holder.includes(state.education) && state.education != {}) {
            dispatch({
                type: actions.ADD_EDUCATIONS,
                item: state.education
            })
            dispatch({
                type: actions.ADD_EDUCATION,
                item: {}
            })
        }
    }, [])

    const deleteButtonHandler = (item) => {
        const itemIndex = state.educations.findIndex((el) => {
            return el == item
        })
        if (itemIndex >= 0) {
            let holder = state.educations;
            holder.splice(itemIndex, 1);
            dispatch({
                type: actions.REMOVE_FROM_EXPERIENCES,
                item: holder
            })

        }
        if (item == state.education) {
            dispatch({
                type: actions.ADD_EDUCATION,
                item: {}
            })
        }
    }
    return (
        <div className="build-tool-review common-input-style">
            <h1>Review Education</h1>
            <p>Add, edit or remove your education history.</p>
            <div className="build-tool-history">
                {state.educations.length > 0 ? state.educations?.map((item) => {
                    let holder;
                    console.log(item)
                    if (item.schoolName) {
                        holder = (
                            <div className="review position-relative">
                                <div className="review-buttons">
                                    <span><i className="bi bi-pencil-fill"></i></span>
                                    <span onClick={() => (deleteButtonHandler(item))}><i className="bi bi-trash-fill"></i></span>
                                    <span><i className="bi bi-arrows-move"></i></span>
                                </div>
                                <h2 className="normal-text">{item?.schoolName ? item.schoolName : "" + ", " + item.fieldOfStudy ? item.fieldOfStudy : ""}</h2>
                                <p className="normal-text">{(item?.graduationMonth ? item.graduationMonth + " - " : '') + (item.graduationYear ? item.graduationYear : '')}</p>
                            </div>
                        )
                    }
                    console.log(item)
                    return holder

                }) : ""}
            </div>
            <button className="build-tool-review-button" onClick={addNewEducation}>add another degree</button>
        </div>
    )
}
// end Education components

// skill components

export function SkillsInfo() {

    return (
        <div className="info animation">
            <h2>Next Section:</h2>
            <h1>Skills</h1>
            <ul className="tips-list">
                <li className="tips-item"><span>This section brings the work experience and education sections together.</span></li>
                <li className="tips-item"><span>Here's your chance to showcase the skills you've developed through your career and education to potential employers.</span></li>
            </ul>
        </div>
    )
}

export function Skills() {
    const [state, dispatch] = useStateValue()
    const [skill, setSkill] = useState('')
    useEffect(() => {
        let s = state.skills.toString().replaceAll(',', '\n')
        setSkill(s)
    }, [])
    const textAreaHandler = (e) => {
        setSkill(e.target.value)
        let skills = e.target.value.split('\n')
        dispatch({
            type: actions.ADD_SKILLS,
            item: skills
        })
    }
    return (
        <div className="skills common-input-style animation">
            <h1>Skills</h1>
            <p>Highlight 6-8 of your top skills.</p>
            <div className="input-group">
                <label >Skills:</label>
                <textarea 
                placeholder="Click here to write your skills." 
                value={skill} 
                onChange={e => textAreaHandler(e)}>

                </textarea>
            </div>
        </div>
    )
}
//end skill components

// summery components
export function SummeryInfo() {
    return (
        <div className="info animation">
            <h2>Next Section:</h2>
            <h1>Professional Summary</h1>
            <ul className="tips-list">
                <li className="tips-item"><span>The Professional Summary consists of 2-3 sentences at the top of your resume and is one of the first things a hiring manager will read.</span></li>
                <li className="tips-item"><span>This is your chance to sell yourself for the job by showcasing your professional accomplishments. Impress employers by tailoring your summary to the job description.</span></li>
            </ul>
        </div>
    )
}
export function Summery() {
    const [state, dispatch] = useStateValue()
    const [summery, setSummery] = useState()
    useEffect(() => {
        let s = state.summery.toString().replaceAll(',', '\n')
        setSummery(s)
    }, [])
    const textAreaHandler = e =>{
        setSummery(e.target.value)
        dispatch({
            type: actions.ADD_SUMMERY,
            item: e.target.value.split('\n')
        })
    }
    return (
        <div className="summery common-input-style animation">
            <h1>Professional Summary</h1>
            <p>Finish your resume with short summary</p>
            <div className="input-group">
                <label >summery:</label>
                <textarea 
                placeholder="Click here to write your professional summary."
                value={summery}
                onChange={e => textAreaHandler(e)}
                >

                </textarea>
            </div>
        </div>
    )
}
//end summery components
const buildTools = [GetStarted, Contact, ExperienceInfo, Experience, ReviewExperience, EducationInfo, Education, ReviewEducation, SkillsInfo, Skills, SummeryInfo, Summery]

export default buildTools