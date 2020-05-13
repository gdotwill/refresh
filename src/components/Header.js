import React from 'react'
import logo from '../assets/images/logo.svg'

function Header() {
    return (
        <div className="header">
            <img src={logo} />             
            <div id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div> 
            <p className="menu">MENU</p> 
            <p className="mobile-header">
                a <strong>podcast</strong> <br/>
                <strong>company</strong> made
                under the <br/>
                african sky
            </p>        
        </div>
    )
}

export default Header

