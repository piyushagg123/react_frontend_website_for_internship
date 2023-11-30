import React from 'react';
import './Style_head.css';
import img from './Blog/images/header.jpg';



function Navbar() {
  return (
    <div>
      <div id="bggg" >
    <div >
        <div id="navbarrr">
            <a href="/home"><img src={img} alt="" id="nav_img"/></a>
            <div id="navbar_heads">
                <a href="/home" className="head">home</a>
                <a href="/about" className="head">about</a>
                <a href="/sessions" className="head">yoga sessions</a>
                <a href="/blog" className='head'>blog</a>
                <a href="/profile">profile</a>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar