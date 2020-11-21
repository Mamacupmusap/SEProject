import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Container} from 'reactstrap';
import './signin.css';
import { NavLink } from 'react-router-dom';
import Navigation2 from '../../Navigation/Navigation2';


const signin = () =>{
  return(
    <div>
      <Navigation2/>
    <Container>
      <div className='left-half'>
        <div id='logo'/>
      </div>
      <div className='right-half'>
        <div className='right-white-bg'>
          <Container className='box'>
            <h2> Welcome to JohnJud! </h2>
            <br/><br/>
            <Container className='textbox'>
             
              <NavLink to='/signin2'><Button id='button_signin1'>Sign in with JohnJud account</Button></NavLink>
              <br/>
              <p id="yesihavent">haven't register? <NavLink to='./signup'>sign up </NavLink></p>
            </Container>
          </Container>
        </div>
      </div>
    </Container>
    </div>
  )
}

export default signin;