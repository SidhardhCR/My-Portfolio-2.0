import React from 'react'
import { useMediaQuery } from "@uidotdev/usehooks";


function Hero() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  return (
    <div className='hero'>
        <div className='header'>
            <h1 className='myname' >SIDHARDH C R</h1>
            {
              isSmallDevice? <div style={{marginTop:'0.3em'}}><svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><path fill="white" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"></path></svg></div>:<div className='menu'>
              <p>Home</p>
              <p>About</p>
              <p>Skills</p>
              <p>Experience</p>
              <p>Contact</p>
          </div>
            }
         
        </div>
        
        <div >
        <div>
          <div >
            <div className='top-line'></div>
            <h1 className='text'>I'm Sidhardh, a<br/>Web Developer<br/><span> <p className='sub-text'>I'm passionate about web developmnet.</p></span></h1>
           
          </div>
          {isSmallDevice? <img  style={{width:'15.125rem',height:'15.125rem'}} src="/home-mob-pic.png" alt="" /> : <img src="/home-image-1.png" alt="" /> }
            
        </div>  

      <div className='move-down'>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 1024 1024"><path fill="white" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"></path></svg>
      </div>
        </div>
          
    </div>
  )
}

export default Hero