import React from 'react'
import './Sessions.css'
import Header from './NewNavBar'
import { C_work_item } from './C_work_item'
import Footer from './Footer';
function C_work() {
  return (
    <>
    <Header/>
    <h1 className='h'>CORPORATE WORKSHOPS</h1>
    <h3 className='h'>Daily classes to boost your strength and endurance and improve the connection between your mind and body.</h3>
        <div className="cont">
            {
                C_work_item.map((item,index)=>{
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

export default C_work