import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import './Style_log.css'
import Mail from './Mail';

function Log() {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/home');
    }
    const [message,setMessage] = useState('');
    const [updated, setUpdated] = useState(message);
    const handleChange = (event) => {
      setMessage(event.target.value);
    };
 
  return (
    <div>
        <form id='form'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} value={message}/>
    
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type='submit' onClick={handleClick} className='btn-success'>Log In</button>
</form>
        
    </div>
  )
}

export default Log