import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
    return (
        <footer className='m-LR'>
            <div className='footer-body'>
                <div className='app-info footer-part'>
                    <Link to="/" className='left-border'>
                        <h2>Resume Builder</h2>
                    </Link>
                    <p>
                        Build your resume free and fast with resume builder application.
                    </p>
                    <div className='social-network'>
                        <Link to="" style={{ "--color": "#e91e63" }}><i className='bi bi-instagram'></i></Link>
                        <Link to="" ><i className='bi bi-github'></i></Link>
                        <Link to="" style={{ "--color": "#0d99dc" }}><i className='bi bi-linkedin'></i></Link>
                        <Link to="" style={{ "--color": "#0396ff" }}><i className='bi bi-twitter'></i></Link>
                    </div>
                </div>
                <div className='quick-links footer-part'>
                    <h2 className='left-border'>Quick links</h2>
                    <Link to="/">Home</Link>
                    <Link to="/templates">Templates</Link>
                    <Link to="">GitHub Repository</Link>
                    <Link to="/about">About</Link>

                </div>
                <div className='contact footer-part'>
                    <h2 className='left-border'>Contact</h2>
                    <p><i className='bi bi-telephone-fill'></i> : (+93)797608705</p>
                    <p><i className='bi bi-whatsapp'></i> : (+93)797608705</p>
                    <p><i className='bi bi-telegram'></i> : (+93)797608705</p>
                    <p><i className='bi bi-envelope-fill'></i> : Aliherawi7@gmail.com</p>
                </div>
            </div>
            <div className='copyright'>
                <p>© 2022 Resume Builder. All rights reserved - Designed and developed by <strong>Ali Herawi</strong></p>
            </div>
        </footer>
    )
}

export default Footer