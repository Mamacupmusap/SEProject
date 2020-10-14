import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './chat.css'
import { Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const chat = () =>{
  return(
    <div>
        <div className='right_chat'>
          <div className='right_chat_head'>
            <p>John Bruh</p>
          </div>
          <div className='suggestion'>
            <p>
              คำแนะนำในการยืนยันสัตว์
            <NavLink to='./suggestion'> อ่านเพิ่มเติม</NavLink>
            </p>
          </div>
          <div className='right_space'></div>
          <div className='text_chat'>
            <Input type='text' />
          </div>
        </div>
    </div>
  )
}

export default chat;