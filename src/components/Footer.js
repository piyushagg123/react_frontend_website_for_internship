import React from 'react'
import './Style_footer.css'
import Mail from './images_home/mail.png';
import Insta from './images_home/instagram.png';
import Facebook from './images_home/facebook.png';

function Footer() {
  return (
   <div id='foot'>
     <div id="foote">
       <h1>STRETCH'N'SMILE YOGA</h1>
        <p>All the information on this website is published in good faith and for general information purpose only. Stretchnsmileyoga does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Stretchnsmileyoga), is strictly at your own risk. Stretchnsmileyoga will not be liable for any losses and/or damages in connection with the use of our website.</p>
        <div>
          <a href="gmail.com"><img src={Mail} alt="mail" className='social-media space'/></a>
          <a href="facebook.com"><img src={Facebook} alt="facebook" className='social-media space'/></a>
          <a href="instagram.com"><img src={Insta} alt="instagram" className='social-media'/></a>
          <br /><br /><br /><br /><br />
          <div id='links'>
          <a href="/home" className='space'>home</a>
          <a href="/about_page" className='space'>about</a>
          <a href="/blog">blog</a>
          </div>
          <br /><br /><br />
          <h5>Copyright &copy; <a href="">ACESPIRE 2022</a></h5>
          
        </div>
        
    </div>
   </div>
  )
}

export default Footer