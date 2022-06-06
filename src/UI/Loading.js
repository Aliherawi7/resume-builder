import React from 'react'
import './Loading.css'

function Loading() {
    return (
        <div className="spinner-wrapper" >
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    ) 
}

export default Loading
 