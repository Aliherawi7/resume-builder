import React from 'react'

function Template5({ contactInformation, experiences, experience, educations, education, skills, summery, color, font }) {
    const backgroundColor = {
        "--color": color,
        backgroundColor: color
    }
    const fontStyles = {
        fontWeight: "900",
        fontFamily: font,
        color: color

    }
    const styles = {
        fontWeight: "900",
        fontFamily: font,
        color: "#fff"
    }
    return (
        <div className='template template5 a4'>
            <div className='main-container' style={backgroundColor}>
                
            </div>
        </div>
    )
}

export default Template5