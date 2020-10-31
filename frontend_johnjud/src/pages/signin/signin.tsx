import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {GoogleLogin} from 'react-google-login';
import {Button,Container} from 'reactstrap';
import './signin.css';
import { NavLink } from 'react-router-dom';
import Navigation2 from '../../Navigation/Navigation2';

const clientId = '99307406475-s1a1a9rcrfpo3kchirudo8i8fnidr0og.apps.googleusercontent.com'

const responseGoogle = (response : any) => {
  console.log(response);
}

const signin = () =>{
  return(
    <div>
      <Navigation2/>
    <Container>
      <div className='left-half'>
        <div id='logo'></div>
      </div>
      <div className='right-half'>
        <div className='right-white-bg'>
          <Container className='box'>
            <h2> Welcome to JohnJud! </h2>
            <br/><br/>
            <Container className='textbox'>
             
              <NavLink to='/signin2' className='botton_signin'><Button outline color='secondary'>Sign in with JohnJud account</Button></NavLink>
              <br/>
              <p>haven't register? <NavLink to='./signup'>sign up </NavLink></p>
            </Container>
          </Container>
        </div>
      </div>
    </Container>
    </div>
  )
}

export default signin;