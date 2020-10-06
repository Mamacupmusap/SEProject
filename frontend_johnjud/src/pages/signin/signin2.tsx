import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Container,Form,FormGroup,Col,Label,Input} from 'reactstrap';
import './signin.css';
//import { NavLink } from 'react-router-dom';

const signin = () =>{
  return(
    <Container>
      <div className='left-half'>
        <div id='logo'></div>
      </div>
      <div className='right-half'>
        <div className='right-white-bg'>
          <div className='box2'>
            <Container>
              <h2 id='center'> Sign in </h2>
              <br/><br/>
              <Form>
                <Col>
                    <FormGroup>
                    <Label for="email" id='head_box'>Email</Label>
                    <Input type="email" name="email" id="email" placeholder="email"/>
                    </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="password" id='head_box'>Password</Label>
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