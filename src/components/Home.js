import React , {useState}from 'react'
import './Style.css';
import img1 from "./images_home/img1.jpg";
import img2 from "./images_home/img2.jpg";
import img3 from "./images_home/img3.jpg";
import img4 from './Blog/images/yoga_2.jpg';
import img5 from './Blog/images/yoga_3.jpg';
import img6 from './Blog/images/yoga_4.jpg';
import Header from './NewNavBar';
import './Style_log.css';
import Search from './Search';
import Footer from './Footer';


function Home() {

  return (
    <>
    <Header/>
      
      <div id='m'>
      <div className="carousel slide" id="myCarousel" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <img src={img1} className='slider'/>
              <div className="carousel-caption">
                <h1>LIFE GETS BETTER WITH A SMILE.</h1>
              </div>
            </div>
            <div className="item">
              <img src={img2} className='slider'/>
              <div className="carousel-caption">
                <h1>A SMILE CAN FIX EVERYTHING EVEN YOUR BACKACHE</h1>
              </div>
            </div>
            <div className="item">
              <img src={img3} className='slider'/>
              <div className="carousel-caption">
                <h1>YOGA TAKES PLACE INTO THE PRESENT MOMENT</h1>
              </div>
            </div>
          </div>
    
          <a href="#myCarousel" className="left carousel-control" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span></a>
    
          <a href="#myCarousel" className="right carousel-control" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span></a>
        </div>
      </div>


<br/> <br/>
<div id='bg'>
      <div id='content'>
      <div className='head container-fluid' id='abc'>
      <h1 id='heading'>ABOUT STRETCH'N'SMILE YOGA</h1>
      <h3>"Yoga takes you into the present moment, the only place where life exists." - Patanjali</h3>
      <div>
      <p>Anything that you do with complete awareness is YOGA. Yoga offers us a chance to add energy, strength and beauty and soul. It is the art of finding peace from within. Yoga gives you an opportunity to be YOU, the true you.</p>
      <p>Founded by Deepali Gupta, Stretch 'N' Smile yoga aims to make yoga a wholesome experience for everyone. It provides a space for practice and growth, and tools to make you a better version of yourself.</p>
      <p>Yoga can happen anywhere, anytime, and in any form. There is no perfect place, time or attire for yoga. If you sit back and relax, take a deep breath and let the calmness flow through your body, yoga is happening to you. You cannot do yoga. In fact, yoga is your natural state.</p>
      </div>
      <button className='btn-success btn-lg'>Know More</button>
      </div>

      
    
      <div id="skills">
        <div className="container">
        <h1>OUR SERVICES</h1>
          <div className="row">
            
            <div className="col-md-4">
              <img src={img4} className="aboutImage"/>
              <h2>Sessions</h2>
            </div>
            <div className="col-md-4">
              <img src={img5} className="aboutImage"/>
              <h2>Workshops</h2>
              </div>
            <div className="col-md-4">
              <img src={img6} className="aboutImage"/>
              <h2>Corporate Workshops</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
</div>
      <div className='testimonial_container'>

        <div id="project" className="container-fluid">
        <div id='extend'>
        <h1 id="pro">WHAT PEOPLE THINK ABOUT US</h1>
        <Search/>
        </div>
       </div>

      </div>
      <Footer/>

    </>

  )
}

export default Home