import React from 'react'
import './Fonts.css'

function Fonts( {fontChange}) {
    return (
        <div className='fonts-box'>
            <label>Fonts</label>
            <div className='fonts'>
                <span style={{"--font":"AlegreyaSans",fontFamily:'var(--font'}} onClick={e=>fontChange("AlegreyaSans")}><p>Alegreya Sans</p></span>
                <span style={{"--font":"OpenSans",fontFamily:'var(--font'}} onClick={e=>fontChange("OpenSans")}><p>Open Sans</p></span>
                <span style={{"--font":"Dosis",fontFamily:'var(--font'}} onClick={e=>fontChange("Dosis")}><p>Dosis</p></span>
                <span style={{"--font":"Titillium",fontFamily:'var(--font'}} onClick={e=>fontChange("Titillium")}><p>Titillium</p></span>
                <span style={{"--font":"Helvetica",fontFamily:'var(--font'}} onClick={e=>fontChange("Helvetica")}><p>Helvetica</p></span>
                <span style={{"--font":"Nexa",fontFamily:'var(--font'}} onClick={e=>fontChange("Nexa")}><p>Nexa</p></span>
            </div>
        </div>
    )
}

export default Fonts
