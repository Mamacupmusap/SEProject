import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

import { Container ,Form, FormGroup,Label,Input,Button, Col}  from 'reactstrap';
import jjicon from './component/logojj.png'
import './signup.css'

const signup = () =>{
  return(
    <div>
      <Container id='contain'>
        <div className='box_img'>
          <img src={jjicon} alt='icon' className='rounded-lg'/>
        </div>
        <Form>
          <Col>
            <FormGroup>
              <Label for="email">Email*</Label>
              <Input type="email" name="email" id="email" placeholder="email" />
            </FormGroup>
          </Col>
          <NavLink to='/signup2'><Button className='button_next'>Next</Button></NavLink>
        </Form>
      </Container>
    </div>
  )
}

export default signup;