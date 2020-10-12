import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './chat.css'
import { Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const chat = () =>{
  return(
    <div>
        <div className='left_chat'>
          <div className='left_chat_head'>
            <p>message</p>
          </div>
          <div className='left_detail'>
            <p>Test1</p>
          </div>
          <div className='left_detail'>
            <p>Test2</p>
          </div>
          <div className='left_detail'>
            <p>Test3</p>
          </div>
          <div className='left_detail'>
            <p>Test4</p>
          </div>
          <div className='left_detail'>
            <p>Test5</p>
          </div>
          <div className='left_detail'>
            <p>Test6</p>
          </div>
           
        </div>
        <div className='right_chat'>
          <div className='right_chat_head'>
            <p>John Bruh</p>
          </div>
          <div className='suggestion'>
            <p>
              คำแนะนำในการยืนยันสัตว์
            <NavLink to='/suggestion'> อ่านเพิ่มเติม</NavLink>
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