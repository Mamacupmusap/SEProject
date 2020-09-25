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
              <Label for="Name">Name*</Label>
              <Input type="text" name="Name" id="Name" placeholder="name" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Surname">Surname*</Label>
              <Input type="text" name="Surname" id="Surname" placeholder="surname" />
            </FormGroup>
          </Col>
          <Col md=''>
            <FormGroup>
              <Label for="Date">Birth Date*</Label>
              <Input type="date" name="Date" id="Date" />
            </FormGroup>
          </Col>
          <Col md=''>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <div id='box' className='form-control'>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" name='gender' value='male'/>
                  <label>Male</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" name='gender' value='female'/>
                  <label>Female</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" name='gender' value='others'/>
                  <label>others</label>
                </div>
              </div>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Address">Address*</Label>
              <Input type="text" name="Address" id="Address" placeholder="address" />
            </FormGroup>
          </Col>
          <NavLink to='/signup2'><Button className='secondary'>Back</Button></NavLink>
          <NavLink to='/'><Button className='button_next'>Sign up!</Button></NavLink>
        </Form>
      </Container>
    </div>
  )
}

export default signup;