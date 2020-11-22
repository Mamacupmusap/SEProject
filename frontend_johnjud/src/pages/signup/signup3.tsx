import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import yes from './component/verified.png'
import { NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';
import Navigation2 from '../../Navigation/Navigation2';

const Signup3 = () =>{ 
  localStorage.removeItem("SignupInfo");
  localStorage.removeItem("keyinfo");
  localStorage.removeItem("id");
  return(
    <div>
      <Navigation2/>
        <Container className='bigbox'>
            <div className='left'>
                <img src={yes} alt='yes' className='yes'/>
            </div>
            <div className='rightOTP'>
                <div className='text_rightOTP text2'>
                  <p style={{fontSize:14}}>OTP was successfully verified. </p>
                  <NavLink to='/signin'><p style={{fontSize:12, color:'#61B292'}}> return to sign in ...</p></NavLink>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Signup3;