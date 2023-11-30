import React from 'react'
import './Sessions.css'
import Header from './NewNavBar';
import { Workshop_items } from './Workshop_items';
import Footer from './Footer';
function Workshops() {
  return (
    <>
    <Header/>
    <h1 className='h'>WORKSHOPS</h1>
    <h3 className='h'>Make your weekends joyful with yoga! The best weekend plan to feel powerful and stronger.</h3>
        <div className="cont">
            {
                Workshop_items.map((item,index)=>{
                    return(
                        <div className="conti">
                            <div className="content">
                            <h3 className="item-head">{item.heading}</h3>
                            <p className="item-body">{item.body}</p>
                            
                            <div className='movement'>
                            <button className='btn btn-success book-now'>Book Now</button>
                            </div>
                            </div>
                         
                        </div>
                    )
                })
            }
        </div>
        <br/><br/><br/>
        
        
        <Footer/>
    </>
  )
}

export default Workshops