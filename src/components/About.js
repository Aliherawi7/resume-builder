import React from 'react'
import "./About.css"
function About() {
    return (
        <div className='about'>
            <div className='about-container'>
                <div className='logo-main'>
                    <img src='./image/logo2.png' />
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
            <footer>
                <div className='footer-logo'>
                    <img src='./image/logo2.png' />
                </div>
                <div className="copyright">
                    © Copyright <strong><span>Resume-Builder</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://linkedin.com/ali-herawi">Ali herawi</a>
                </div>
            </footer>
        </div>
    )
}

export default About
