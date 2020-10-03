import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';

import next from './component/arrow_right.png'
import back from './component/arrow_left.png'
import { Container ,Form, FormGroup,Label,Input,Button, Col}  from 'reactstrap';
import jjicon from './component/logojj.png'
import './signup.css'

const clientId = '99307406475-s1a1a9rcrfpo3kchirudo8i8fnidr0og.apps.googleusercontent.com'

const responseGoogle = (response : any) => {
  console.log(response);
}
const signup = () =>{
  return(
    <div>
      <NavLink to='/signin'><img src={back} alt='' className='back_page'/></NavLink>
      <Container id='contain'>  
        <div className='box_img'>
          <img src={jjicon} alt='icon' className='rounded-lg'/>
        </div>
        <Container className='textbox'>
          <br/><br/>
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign up with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <br/>
          <p className='line'><span>or create JohnJud account</span></p>
        </Container>
        <Form>
          <Col>
            <FormGroup>
              <Label for="email">Email*</Label>
              <Input type="email" name="email" id="email" placeholder="email"/>
            </FormGroup>
          </Col>
          <NavLink to='/signup2'><Button id='button_next'>Next<img src={next} alt=''/></Button></NavLink>
        </Form>
      </Container>
    </div>
  )
}

export default signup;