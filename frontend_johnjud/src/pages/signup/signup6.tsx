import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import yes from './component/verified.png'
//import { NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';

const signin6 = () =>{ 
  return(
    <div>
        <Container className='bigbox'>
            <div className='left'>
                <img src={yes} alt='yes' className='yes'/>
            </div>
            <div className='right'>
                <div className='text_right text2'>
                  <p>Email Verified </p>
                  <p> your email address was successfully verified.</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default signin6;