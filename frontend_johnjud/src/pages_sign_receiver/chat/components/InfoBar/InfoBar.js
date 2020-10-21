import React from 'react';
import './InfoBar.css';
import { NavLink } from 'react-router-dom';


const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3>{room}</h3>
      <NavLink to='/receiver/suggestion'> อ่านเพิ่มเติม</NavLink>
    </div>
    <div className="rightInnerContainer">
    </div>
  </div>
);

export default InfoBar;