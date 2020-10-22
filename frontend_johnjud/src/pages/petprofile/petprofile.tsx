import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { Container,Label}  from 'reactstrap';
import alert from './imgpic/alert.png'
import './petprofile.css'

const petprofile = () =>{
  return(
    <Container>
      <input type="checkbox" id="testYay"/>
      <Label for="testYay" id="testButtonYay">edit</Label>
      <div className="centerPet">
        <img src={ alert} alt="alertsign" id="alertSign"/>
        <p id="pleaseSignIn">Please sign in</p>
        <NavLink to='/signin'>
          <button type='button' id='confirmYay-btn'>confirm</button>
        </NavLink>
        <input type="checkbox" id="cancelYay"/>
        <Label for="testYay" id="cancelYay-btn">cancel</Label>
      </div>
    </Container>

  )
}

export default petprofile;