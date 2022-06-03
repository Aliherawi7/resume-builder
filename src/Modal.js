import React, { useState, useEffect } from 'react'
import './Modal.css'
function Modal(props) {
    return (
        <div className="modal" style={{ visibility: props.show ? 'visible' : 'hidden' }}>
            <div className="modal-container">
                <div className="page-container">
                    {props.children}
                </div>
                <span onClick={props.close}><i className="bi bi-x-lg close-btn"></i></span>
            </div>
        </div>
    ) 
}

export default Modal 
