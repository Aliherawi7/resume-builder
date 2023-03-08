import React from 'react'
import { AVATAR } from '../Constants/UIConstants'
import "./Template.css"
import "./Template3.css"
function Template3({ contactInformation, experiences, experience, educations, education, skills, summery, color, font }) {
    const backgroundColor = {
        "--backgroundColor": color
    }
    const fontStyles = {
        fontFamily: font,
        color: color

    }
    const styles = {
        fontWeight: "900",
        fontFamily: font,
        color: color
    }
    return (
        <div className='template template3 a4' >
            <div className='main-container' style={backgroundColor}>
                <div className='contact info-container' >
                    <div className='column'>
                        <div className='image-container'></div>
                    </div>
                    <div className='image profile-picture' style={{ borderColor: color }}>
                    <img src={contactInformation.image ? URL.createObjectURL(contactInformation.image) : AVATAR}  alt={contactInformation?.name}/>
                    </div>
                    <div className='contact-information info-section'>
                        <h1 className='contact-name' style={styles}>{contactInformation.name}</h1>
                        <div className='contact-info' style={styles}>
                            <p className='normal-text'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style={{ fill: color }} d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" /></svg>
                                {contactInformation?.phone ? contactInformation.phone : ''}
                            </p>
                            <p className='normal-text'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style={{ fill: color }} d="M448 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V128C512 92.65 483.3 64 448 64zM64 112h384c8.822 0 16 7.178 16 16v22.16l-166.8 138.1c-23.19 19.28-59.34 19.27-82.47 .0156L48 150.2V128C48 119.2 55.18 112 64 112zM448 400H64c-8.822 0-16-7.178-16-16V212.7l136.1 113.4C204.3 342.8 229.8 352 256 352s51.75-9.188 71.97-25.98L464 212.7V384C464 392.8 456.8 400 448 400z" /></svg>
                                {contactInformation?.email ? contactInformation.email : ''}
                            </p>
                            <p className='normal-text location'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path style={{ fill: color }} d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" /></svg>
                                {(contactInformation?.address ? contactInformation.address + ", " : '') +
                                    (contactInformation?.city ? contactInformation.city + ", " : '') +
                                    (contactInformation?.country ? contactInformation.country : '')}
                            </p>
                        </div>
                    </div>

                    <div className='profesion-summery'>
                        <h2 style={styles}>professional summary</h2>
                        <div >
                            {summery?.map((item) => {
                                return item !== "" ? <p className="summery normal-paragraph" key={item}>{item}</p> : null
                            })}
                        </div>
                    </div>
                </div>

                <div className='education info-container'>
                    <div className='column'>
                    </div>
                    <div className='section-label'>
                        <span className='top-shadow'></span>
                        <h2 style={styles}>Education</h2>
                        <span className='bottom-shadow'></span>
                    </div>

                    <div className='information'>
                        <div className="education subtitle section">
                            {educations?.length > 0 ? educations?.map((item) => {
                                return (
                                    <div style={styles} key={item} className="experience-container">
                                        <div className='information-header'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style={{ fill: color }} d="M500.3 227.7C515.9 243.3 515.9 268.7 500.3 284.3L284.3 500.3C268.7 515.9 243.3 515.9 227.7 500.3L11.72 284.3C-3.905 268.7-3.905 243.3 11.72 227.7L227.7 11.72C243.3-3.905 268.7-3.905 284.3 11.72L500.3 227.7z" /></svg>
                                            <p className="normal-title">{(item?.degree ? item.degree : '') + (item?.fieldOfStudy ? ' : ' + item.fieldOfStudy : '')}</p>
                                        </div>
                                        <p className="normal-paragraph">{item?.schoolName ? item.schoolName : ''}</p>
                                        <p className="normal-paragraph location">{(item?.city ? item.city : "") + (item?.country ? ", " + item?.country : '')}</p>
                                        <p className="normal-paragraph">{(item?.graduationMonth ? item.graduationMonth : '') + (item?.graduationYear ? " " + item.graduationYear : '')}</p>
                                        <p className="normal-paragraph">{' '}</p>
                                    </div>
                                )
                            }) :
                                <div style={styles} className="experience-container">
                                    <div className='information-header'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style={{ fill: color }} d="M500.3 227.7C515.9 243.3 515.9 268.7 500.3 284.3L284.3 500.3C268.7 515.9 243.3 515.9 227.7 500.3L11.72 284.3C-3.905 268.7-3.905 243.3 11.72 227.7L227.7 11.72C243.3-3.905 268.7-3.905 284.3 11.72L500.3 227.7z" /></svg>
                                        <p className="normal-title">{(education?.degree ? education.degree : '') + (education?.fieldOfStudy ? " : " + education.fieldOfStudy : '')}</p>
                                    </div>
                                    <p className="normal-paragraph">{education?.schoolName ? education.schoolName : ''}</p>
                                    <p className="normal-paragraph location">{(education?.city ? education.city : "") + (education?.state ? ", " + education?.state : '')}</p>
                                    <p className="normal-paragraph">{(education?.graduationMonth ? education.graduationMonth : '') + (education?.graduationYear ? " " + education.graduationYear : '')}</p>
                                    <p className="normal-paragraph">{' '}</p>
                                </div>

                            }
                        </div>
                    </div>
                </div>
                <div className='experience info-container'>
                    <div className='column'>
                    </div>
                    <div className='section-label'>
                        <span className='top-shadow'></span>
                        <h2 style={styles}>Experience</h2>
                        <span className='bottom-shadow'></span>
                    </div>
                    <div className="experience subtitle section">
                        {experiences?.length > 0 ? experiences?.map((item) => {
                            return (
                                <div style={styles} key={item} className="experience-container">
                                    <div className='information-header'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style={{ fill: color }} d="M500.3 227.7C515.9 243.3 515.9 268.7 500.3 284.3L284.3 500.3C268.7 515.9 243.3 515.9 227.7 500.3L11.72 284.3C-3.905 268.7-3.905 243.3 11.72 227.7L227.7 11.72C243.3-3.905 268.7-3.905 284.3 11.72L500.3 227.7z" /></svg>
                                        <p className="normal-title">{item?.jobTitle ? item.jobTitle : ''}</p>
                                    </div>
                                    <p className="normal-paragraph">{item?.employer ? item.employer : ''}</p>
                                    <p className="normal-paragraph location">{(item?.city ? item.city : "") + (item?.country ? ", " + item?.country : '')}</p>
                                    <p className="normal-paragraph">{(item?.startDate ? item.startDate : '') + (item?.endDate ? " - " + item.endDate : '')}</p>
                                    <p className="normal-paragraph">{' '}</p>
                                </div>
                            )
                        }) : <div style={styles}>
                            <div className='information-header'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style={{ fill: color }} d="M500.3 227.7C515.9 243.3 515.9 268.7 500.3 284.3L284.3 500.3C268.7 515.9 243.3 515.9 227.7 500.3L11.72 284.3C-3.905 268.7-3.905 243.3 11.72 227.7L227.7 11.72C243.3-3.905 268.7-3.905 284.3 11.72L500.3 227.7z" /></svg>
                                <p className="normal-title">{experience?.jobTitle ? experience.jobTitle : ''}</p>
                            </div>
                            <p className="normal-paragraph">{experience?.employer ? experience.employer : ''}</p>
                            <p className="normal-paragraph location">{(experience?.city ? experience.city : "") + ", " + (experience?.country ? experience.country : '')}</p>
                            <p className="normal-paragraph">{(experience?.startDate ? experience.startDate : '') + (experience?.endDate ? " - " + experience.endDate : '')}</p>
                        </div>}
                    </div>
                </div>
                <div className='skills info-container'>
                    <div className='column'>
                    </div>
                    <div className='section-label'>
                        <span className='top-shadow'></span>
                        <h2 style={styles}>Skills</h2>
                        <span className='bottom-shadow'></span>
                    </div>
                    <div className="skills subtitle section">
                        <ul className="skill-list">
                            {skills?.map((item) => {
                                return item !== "" ? <li style={fontStyles} key={Math.random()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style={{ fill: color }} d="M500.3 227.7C515.9 243.3 515.9 268.7 500.3 284.3L284.3 500.3C268.7 515.9 243.3 515.9 227.7 500.3L11.72 284.3C-3.905 268.7-3.905 243.3 11.72 227.7L227.7 11.72C243.3-3.905 268.7-3.905 284.3 11.72L500.3 227.7z" /></svg>
                                    {item}
                                </li> : null

                            })}
                        </ul>
                    </div>
                </div>
                <div className='social-networks info-container'>
                    <div className='column' style={backgroundColor}>
                    </div>
                    <div className='section-label'>
                        <span className='top-shadow'></span>
                        <h2 style={styles}>social networks</h2>
                        <span className='bottom-shadow'></span>

                    </div>
                    <div style={styles} className='social-network subtitle section' >
                        <p className='normal-text'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path style={{ fill: color }} d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                            {contactInformation?.github}</p>
                        <p className='normal-text'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path style={{ fill: color }} d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                            {contactInformation?.linkedin}</p>
                        <p className='normal-text'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style={{ fill: color }} d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                            {contactInformation?.twitter}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Template3
