import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';


const petprofile = () =>{
  return(
    <div>
        <NavLink to='./petprofile1'>ไปยัง edit pet profile</NavLink>
    </div>
  )
}

export default petprofile;