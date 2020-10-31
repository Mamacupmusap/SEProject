import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { Container,Label}  from 'reactstrap';
import verified from './verified.png'
import './AcceptPetModal2.css'

const AcceptPetModal2 = () =>{
  return(
    <Container>
      <input type="checkbox" id="accYes"/>
      <Label for="accYes" id="accYesButton">contact</Label>
      <div className="accYesPopUp">
        <img src={ verified} id="accYesVeri"/>
        <p id="accYesSuccessTxt">Please sign in</p>
        <input type="checkbox" id="accClose"/>
        <Label for="accYes" id="cancelYay-btn">cancel</Label>
      </div>
    </Container>

  )
}

export default AcceptPetModal2;