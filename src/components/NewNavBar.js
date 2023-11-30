import React,{useState} from 'react'
import {NavLink,Link} from 'react-router-dom'
import {FiAlignRight,FiXCircle,FiChevronDown} from 'react-icons/fi'
import img from './Blog/images/header.jpg';
import './New.css';
import { useAuth0 } from "@auth0/auth0-react";

const NewNavBar = () => {
    const { logout } = useAuth0();
    const { loginWithRedirect,isAuthenticated } = useAuth0();
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
  return (
    <div id='sd'>
        <header className="header__middle">
        <div className="container">
            <div className="row">
                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <img  src={img} alt="logo" /> 
                    </NavLink>
                </div>
                <div className="header__middle__menus">
                    <nav className="main-nav " >
                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}
                    <ul className={boxClass.join(' ')}>
                        <li  className="menu-item" >
                            <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                        </li>
                        <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/about_page`}> About Us</NavLink> </li>
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Yoga Sessions <FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/session`}> Sessions </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/workshops`}> Workshops </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/c-workshops`}> Corporate Workshops </NavLink> </li>
                            </ul>
                        </li>
                        <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/blog`}> Blog </NavLink> </li>
                        {
                            isAuthenticated ?
                                <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/profile`}> Profile </NavLink> </li> :
                                <li></li>
                            
                        }
                        {
                            isAuthenticated ? (<li className='menu-item signUp'><button className="sign btn btn-success" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                          </button></li>):(
                                <li className='menu-item signUp'><button className=" sign btn btn-success large" onClick={() => loginWithRedirect()}>Log In</button></li>
                          )
                        }
                        
                        
                        
                    </ul>
                    </nav>     
                </div>   
            </div>
	    </div>
    </header>
    </div>
  )
}

export default NewNavBar