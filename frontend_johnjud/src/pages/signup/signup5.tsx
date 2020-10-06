import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Container}  from 'reactstrap';
import jjicon from './component/logojj.png'
import { NavLink } from 'react-router-dom';

const signin5 = () =>{ 
  return(
    <div id='contain'>
        <div className='box_img'>
          <img src={jjicon} alt='test' className='rounded-lg'/>
        </div>
        <Container className='box_text'>
            <p className='text1'>Please verify your email</p>
            <div className='text2'>
                <p>You’re almost there! We sent an email to</p>
                <p>bububaba@hotmail.com</p>
            </div>
            <div className='text3'>
                <p>To complete your signup, please clicking on the link in that email</p>
                <p>if you don’t see it, you may need to check your spam folder</p>
                <br/>
                <p>Still can’t find the email?</p>
            </div>
            <NavLink to='/signup6'><Button id='button_next'>Resend Email</Button></NavLink>
        </Container>
    </div>
  )
}

export default signin5;