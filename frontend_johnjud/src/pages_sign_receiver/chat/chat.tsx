import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './chat.css'
import { NavLink } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';

const chat = () =>{
  return(
    <div>
      <Navigation/>
      <div className='body_chat'>
          <NavLink to='/receiver/suggestion'> อ่านเพิ่มเติม</NavLink>
      </div>
    </div>
  )
}

export default chat;