import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Read_more.css'
import Header from './NewNavBar';
import im1 from './images_home/img3.jpg'
import Footer from './Footer';


function About_page() {
   
    
  return (
    <>
      <Header/>
      <div>
        <div id='z'>
          <div id='r'>
            <h1 id='w'>ABOUT US</h1>
            <p id='q'>Stretch 'N' Smile began in 2021 as an initiative by Deepali Gupta, who wanted to make yoga accessible. It is an effort to introduce people to the transformative power of yoga and meditation. Inspiring movement and bringing balance between mind, body and soul is the core of what we do: it is our calling! Talking mindfulness from the mat and putting it to practice in life is what we aim for. Yoga is not about flexibility and stretching, it is much more than that. It is about the addition of energy, beauty, and strength to your mind, body and soul. Yoga is about staying grounded while your soul flies high. We believe that smiling is an important part of yoga and our lives. When you stretch with a smile, you will see all the inhibitions and fears disappear.</p>
            <br /><br />
            <p id='e'>At Stretch 'N' Smile, you will get access to live yoga classes, yoga videos, healthy recipes, yoga tips, and much more!. This is your one-stop shop to understand what makes you feel good. We believe in changing your lifestyle to a healthier and peaceful one.</p>
          </div>
          <div>
            <div>
              <h1 id='t'>OUR INSTRUCTOR</h1>
            </div>
            <div id='u'>
              <div>
              <h1 id='i'>Deepali Gupta, RYT 500 | E RYT 200</h1>
                <img src={im1} alt=""  id='y'/>
                
              </div>
              <div>
                <p id='o'>The classes are led by Deepali, who has been praticing yoga for the last 20 years and teaching yoga for the last 4 years. She is also certified as a Kids, Prenatal and Postnatal yoga instructor. ‌Although Deepali is a Software Consultant by profession, Yoga is something that she is deeply passionate about. She finds solace in yoga and it helps her to find peace in the chaos of everyday life. According to Deepali, "Consistent practice of Yoga can help you move from effort to effortlessness". She believes in living a yogic life. To her, yoga is not just a form of workout, it is a way of life.</p>
                <br />
                <p id='p'> ‌"Yoga is not about mastering a posture. It is about using posture to understand and transform yourself" - B. K. S. Iyengar</p>
              </div>
            </div>
          </div>
          <br /><br /><br /><br /><br />
      <Footer/>
        </div>
      </div>
     
    </>
  )
}

export default About_page