import React,{useState} from 'react'
import {NavLink, Link} from 'react-router-dom';
import './About.css'
import img from './Blog/images/header.jpg';
import { useAuth0 } from "@auth0/auth0-react";
import Dropdown from './Dropdown'

const About = () => {
    const { loginWithRedirect } = useAuth0();
  const [click,setClick] = useState(false)
  const [dropdown,setDropdown] = useState(false);
  const handleClick = () => setClick(!click)
  const closeMobileMenu =() => setClick(false);

  const onMouseEnter = () =>{
      if(window.innerWidth<960){
          setDropdown(false)
      }else{
          setDropdown(true)
      }
  }
  const onMouseLeave = () =>{
      if(window.innerWidth<960){
          setDropdown(false)
      }else{
          setDropdown(false)
      }
  }
  return (
    <>
     <nav className='navbarer'>
                <Link to='/' className='navbar-logooo'
                ><img src={img} alt="" className='i' /></Link>
                <div className='menu-icon' onClick={handleClick
                }>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className={click?'nav-menuuuu activeee': 'nav-menuuuu'}>
                    <li className='nav-itemmm'>
                        <Link to='/home' className='nav-linksss' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-itemmm'>
                        <Link to='/about_page' className='nav-linksss' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'
                    onMouseEnter={onMouseEnter
                    }
                    onMouseLeave={onMouseLeave}>
                        <Link to='/session' className='nav-linksss' onClick={closeMobileMenu}>
                            Yoga Sessions <i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className='nav-itemmm'>
                        <Link to='/blog' className='nav-linksss' onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/profile' className='nav-linksss' onClick={closeMobileMenu}>
                            Profile
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/profile' className='nav-linksss' onClick={closeMobileMenu}>
                            Profile
                        </Link>
                    </li>
                    <li className='nav-item'><button onClick={() => loginWithRedirect()}>Log In</button></li>
                    
                    
                </ul>
            </nav></>
  )
}

export default About
