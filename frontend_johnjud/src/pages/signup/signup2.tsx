import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container ,Form, FormGroup,Label,Input,Button, Col}  from 'reactstrap';
import jjicon from './component/logojj.png'
import './signup.css'
import { NavLink } from 'react-router-dom';

const signup = () =>{
  return(
    <div>
      <Container id='contain'>
        <div className='box_img'>
          <img src={jjicon} alt='test' className='rounded-lg'/>
        </div>
        <Form>
          <Col>
            <FormGroup>
              <Label for="username">Username*</Label>
              <Input type="text" name="username" id="username" placeholder="username" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="password">Password*</Label>
              <Input type="password" name="password" id="password" placeholder="password" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="phone">Phone Number*</Label>
              <Input type="tel" name="phone" id="phone" placeholder="phone number" />
            </FormGroup>
          </Col>
          <NavLink to='/signup'><Button className='secondary'>Back</Button></NavLink>
          <NavLink to='/signup3'><Button className='button_next'>Next 2</Button></NavLink>
        </Form>
      </Container>
    </div>
  )
}

export default signup;