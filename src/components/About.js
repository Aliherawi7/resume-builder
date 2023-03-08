import React from 'react'
import { BRAND_IMAGE } from '../Constants/UIConstants'
import "./About.css"
function About() {
    return (
        <div className='about fade-in m-LR'>
            <div className='about-container'>
                <div className='logo-main'>
                    <img src={BRAND_IMAGE} alt='resume-builder' />
                </div>
                <span>Designed by:</span>
                <h1>Ali Herawi</h1>
                <div className='contact-me'>
                    <a href='http://twitter.com/aliherawi7' style={{ "--color": "#158aed" }}><i className='bi bi-twitter'></i></a>
                    <a href='http://instagram.com/ali.herawi7' style={{ "--color": "#f72368" }}><i className='bi bi-instagram'></i></a>
                    <a href='http://linkedin.com/ali-herawi' style={{ "--color": "#0563bb" }}><i className='bi bi-linkedin'></i></a>
                    <a href='http://github.com/aliherawi7' style={{ "--color": "#000" }}><i className='bi bi-github'></i></a>
                    <a href='' style={{ "--color": "#dc3545" }}><i className='bi bi-envelope'></i></a>
                </div>
            </div>
        </div>
    )
}
export default About
