import React from 'react'
import POClogo from '../assets/images/poc-logo.svg'
import instagram from '../assets/images/Instagram.svg'
import facebook from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'

function Footer() {
    return (
        <div className="footer">
            <div class="row">                
                <div class="col-md-6 col-sm-6">
                    <div className="content">
                        <img src={POClogo}/>
                        <p>PEOPLE OF COLOUR.</p> 
                    </div>                  
                </div>
                <div class="col-md-6 col-sm-6"> 
                    <div className="socials">
                        <img src={twitter}/>
                        <img src={facebook}/>
                        <img src={instagram}/> 
                    </div>
                    <div className="socials-mobile">
                        <p>Tw</p>
                        <p>Fb</p>
                        <p>Ig</p>
                    </div>                                                                         
                </div>
            </div>                             
        </div>
    )
}

export default Footer
