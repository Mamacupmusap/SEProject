import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Container,Input}  from 'reactstrap';
//import jjicon from './component/logojj.png'
import { NavLink } from 'react-router-dom';
import mobile from './component/mobile.png'
import Navigation2 from '../../Navigation/Navigation2';

const signin4 = () =>{ 
  return(
    <div>
      <Navigation2/>
      <Container className='bigbox'>
          <div className='left'>
            <img src={mobile} alt='mobile' className='mobile'/>
          </div>
          <div className='right'>
            <Container className='text_right'>
              <div className='text2'>
                <p>OTP has been sent via SMS to your registered number</p>
                <p>(+66 xx-xxx-xxxx)</p>
                <p id='text3'>please enter your OTP</p>
              </div>
              <div className='otp'>
                <Input type='text' placeholder='xxx-xxx' className='col-lg-6 input_otp'/>
                <NavLink to='/signup5'><Button id='submit'>Submit</Button></NavLink>
              </div>
            </Container>
          </div>
      </Container>
    </div>
  )
}

export default signin4;