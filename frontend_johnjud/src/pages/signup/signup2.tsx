import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container ,Form, FormGroup,Label,Input,Button, Col}  from 'reactstrap';
import jjicon from './component/logojj.png'
import back from './component/arrow_left.png'
import next from './component/arrow_right.png'
import './signup.css'
import { NavLink } from 'react-router-dom';

const signup = () =>{
  return(
    <div>
      <NavLink to='/signin'><img src={back} alt='' className='back_page'/></NavLink>
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
          <br/><br/>
          <NavLink to='/signup'><Button className='button_back'><img src={back} alt=''/>Back</Button></NavLink>
          <NavLink to='/signup3'><Button className='button_next'>Next<img src={next} alt=''/></Button></NavLink>
        </Form>
      </Container>
    </div>
  )
}

export default signup;