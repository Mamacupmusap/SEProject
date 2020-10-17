import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './chat.css'
import { NavLink } from 'react-router-dom';


const chat = () =>{
  return(
    <div className='body_chat'>
        <NavLink to='./suggestion'> อ่านเพิ่มเติม</NavLink>
    </div>
  )
}

export default chat;