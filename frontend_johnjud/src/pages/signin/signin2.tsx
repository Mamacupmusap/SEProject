import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Container,Form,FormGroup,Col,Label,Input} from 'reactstrap';
import './signin.css';
import { NavLink } from 'react-router-dom';
import back from './arrow_left.png'


const clientId = '99307406475-s1a1a9rcrfpo3kchirudo8i8fnidr0og.apps.googleusercontent.com'

const responseGoogle = (response : any) => {
  console.log(response);
}

const signin = () =>{
  return(
    <Container>
      <div className='left-half'>
        <NavLink to='/signin'><img src={back} alt='' className='back_page'/></NavLink>
        <div id='logo'></div>
      </div>
      <div className='right-half'>
        <div className='right-white-bg'>
          <div className='box'>
            <h2> Sign in </h2>
            <Container>
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