import React from 'react';
import './InfoBar.css';
import { NavLink } from 'react-router-dom';


const InfoBar = (prop:any) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3 id="roomName">{prop.username2}</h3>
    </div>
    <div className="rightInnerContainer">
      <NavLink to='/receiver/suggestion' style={{color:'white'}} id="read_suggest">คำแนะนำเพิ่มเติม</NavLink>
    </div>
  </div>
);

export default InfoBar;