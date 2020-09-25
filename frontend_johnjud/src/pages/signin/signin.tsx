import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {GoogleLogin} from 'react-google-login';
import {Button,Container,Form,FormGroup,Col,Label,Input} from 'reactstrap';
import './signin.css';
import { NavLink } from 'react-router-dom';

const clientId = '99307406475-s1a1a9rcrfpo3kchirudo8i8fnidr0og.apps.googleusercontent.com'

const responseGoogle = (response : any) => {
  console.log(response);
}

const signin = () =>{
  return(
    <Container>
      <div className='left-half'>
        <div id='logo'></div>
      </div>
      <div className='right-half'>
        <div className='right-white-bg'>
          <div className='box'>
            <h2> Welcome to JohnJud! </h2>
            <Container className='textbox'>
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google account"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
              <br/>
              <Button outline color='secondary'>Sign in with JohnJud account</Button>
              <br/>
              <p className='register'>haven't register? <NavLink to='./signup'>sign up </NavLink></p>
            </Container>
            <Container>
              <Form>
                <Col>
                  <FormGroup>
                    <Label for="username" className='head'>Username*</Label>
                    <Input type="text" name="username" id="username" placeholder="username" />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="password" className='head'>Password*</Label>
                    <Input type="password" name="password" id="password" placeholder="password" />
                  </FormGroup>
                </Col>
              </Form>
              <Button className='button_signin'>Sign In</Button>
            </Container>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default signin;