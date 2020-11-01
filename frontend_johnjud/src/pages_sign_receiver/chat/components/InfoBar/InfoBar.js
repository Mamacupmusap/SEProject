import React from 'react';
import './InfoBar.css';
import { NavLink } from 'react-router-dom';


const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3 id="roomName">John Bush{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <NavLink to='/receiver/suggestion' style={{color:'white'}} id="read_suggest">คำแนะนำเพิ่มเติม</NavLink>
    </div>
  </div>
);

export default InfoBar;