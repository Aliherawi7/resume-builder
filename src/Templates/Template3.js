import React from 'react'
import "./Template.css"
import "./Template3.css"
function Template3({ contactInformation, experiences, experience, educations, education, skills, summery, color, font }) {
    const backgroundColor = {
        backgroundColor: color
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
        <div className='template template3 a4'>
            <div className='main-container'>
                <div className='contact info-container' >
                    <div className='column'>
                        <div className='image-container'></div>
                    </div>
                    <div className='image' style={{ borderColor: color }}>
                        <img src={contactInformation.image ? URL.createObjectURL(contactInformation.image) : "/image/yyyy.png"} />
                    </div>
                    <div className='contact-information'>
                        <h1 className='contact-name'>{contactInformation.name}</h1>
                        <div className='contact-info' style={styles}>
                            <p className='normal-text'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style={{ fill: color }} d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" /></svg>
                                {contactInformation?.phone ? contactInformation.phone : ''}
                            </p>
                            <p className='normal-text'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style={{ fill: color }} d="M448 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V128C512 92.65 483.3 64 448 64zM64 112h384c8.822 0 16 7.178 16 16v22.16l-166.8 138.1c-23.19 19.28-59.34 19.27-82.47 .0156L48 150.2V128C48 119.2 55.18 112 64 112zM448 400H64c-8.822 0-16-7.178-16-16V212.7l136.1 113.4C204.3 342.8 229.8 352 256 352s51.75-9.188 71.97-25.98L464 212.7V384C464 392.8 456.8 400 448 400z" /></svg>
                                {contactInformation?.email ? contactInformation.email : ''}
                            </p>
                            <p className='normal-text'>
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
                                return item != "" ? <p className="summery normal-paragraph" key={item}>{item}</p> : null
                            })}
                        </div>
                    </div>
                </div>
                <div className='education info-container'>
                    <div className='column'>
                    </div>
                    <div className='section-label'>
                        <h2 style={styles}>Education</h2>
                    </div>
                    <span></span>
                    <div className='information'>
                        <div className="education subtitle section">
                            {educations?.length > 0 ? educations?.map((item) => {
                                return (
                                    <div style={styles} key={item} className="experience-container">
                                        <p className="normal-title mb-5">{(item?.degree ? item.degree : '') + (item?.fieldOfStudy ? ' : ' + item.fieldOfStudy : '')}</p>
                                        <p className="normal-paragraph">{item?.schoolName ? item.schoolName : ''}</p>
                                        <p className="normal-paragraph">{(item?.city ? item.city : "") + (item?.state ? ", " + item?.state : '')}</p>
                                        <p className="normal-paragraph">{(item?.graduationMonth ? item.graduationMonth : '') + (item?.graduationYear ? " " + item.graduationYear : '')}</p>
                                        <p className="normal-paragraph">{' '}</p>
                                    </div>
                                )
                            }) :
                                <div style={styles} className="experience-container">
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
    )
}

export default Template3
