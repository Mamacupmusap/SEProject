import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import Navigation3 from '../../Navigation/Navigation3';

const petprofile = () =>{
  return(
    <div>
      <Navigation3/>
      <NavLink to='/donator/petprofile1'>ไปยัง edit pet profile</NavLink>
    </div>
  )
}

export default petprofile;