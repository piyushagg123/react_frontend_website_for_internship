import React from 'react';
import Header from './NewNavBar';
import {useNavigate} from 'react-router-dom';
import profile from './images_home/profile.png';
import './Style_prof.css';
import { useAuth0 } from "@auth0/auth0-react";


function Profile() {
  const { user} = useAuth0();
  const navigate = useNavigate();
    function handleClick(){
        navigate('/');
    }
  return (
    <div>
      <Header/>
      <div id='profile1'>
        <img src={profile} id='img12' title='prfile'/>
      </div>
      <div id='info1'>
        <h1>Mail:</h1>
        <p>{user.email}</p>
      </div>
      <br /><br /><br /><br />
      <div id='out1'> 
      </div>
    </div>
  )
}

export default Profile