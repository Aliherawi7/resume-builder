import React from 'react'
import './ColorBox.css'

function ColorBox({spanColor}) {
    return (
        <div className='color-box'>
                        <label>colors</label>
                        <div className='colors'>
                            <span style={{ "--color": "#000" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#436975" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#305fec" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#0e9fc1" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#7ebca3" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#ac7bae" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#0e5cad" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#96006f" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#c5a3ab" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#d39c00" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#9f44d3" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#002661" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#633aa2" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#e80505" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#360940" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#776483" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#0396ff" }} onClick={(e) => spanColor(e)}></span>
                            <span style={{ "--color": "#f55555" }} onClick={(e) => spanColor(e)}></span>
                        </div>
                       </div>
    )
}

export default ColorBox
