import React from 'react'

function GettingStarted() {
    return (
        <div className="getting-started">
            <div className='container'>
                <div className='template-slider'>

                </div>
                <di className="template-tools">
                    <h2>Template name</h2>
                    <p className='template-description'></p>
                    <div className='color-box'>
                        <label>color</label>
                        <div className='colors'>
                            <span style={"--color: #000"} onMouseOver={(e)=>console.log(e)}></span>
                            <span style={"--color: #000"} onMouseOver={(e)=>console.log(e)}></span>
                            <span style={"--color: #000"} onMouseOver={(e)=>console.log(e)}></span>
                            <span style={"--color: #000"} onMouseOver={(e)=>console.log(e)}></span>
                            <span style={"--color: #000"} onMouseOver={(e)=>console.log(e)}></span>
                            <span style={"--color: #000"} onMouseOver={(e)=>console.log(e)}></span>
                            <span style={"--color: #000"} onMouseOver={(e)=>console.log(e)}></span>
                            <span style={"--color: #000"} onMouseOver={(e)=>console.log(e)}></span>
                        </div>

                    </div>
                </di>
            </div>
        </div>
    )
}

export default GettingStarted
