import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import yes from './component/verified.png'
import { NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';
import Navigation2 from '../../Navigation/Navigation2';

const signin6 = () =>{ 
  return(
    <div>
      <Navigation2/>
        <Container className='bigbox'>
            <div className='left'>
                <img src={yes} alt='yes' className='yes'/>
            </div>
            <div className='right'>
                <div className='text_right text2'>
                  <p>OTP was successfully verified. </p>
                  <NavLink to='/signin2'><p> return to Login ...</p></NavLink>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default signin6;