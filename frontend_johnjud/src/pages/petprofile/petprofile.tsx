import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import alert from './imgpic/alert.png'


const petprofile = () =>{
  return(
    <div>
      <div className="loginPopup">
        <img src={ alert} alt="alertsign" id="alertSign"/>
        <p>Please sign in</p>
        <button type='button' value='confirm' id='confirm'>confirm</button>
        <button type='button' value='cancel' id='cancel'>cancel</button>
      </div>>
    </div>
  )
}

export default petprofile;