//Navbar
import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/article">ARTICLE</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/signin">Signin</NavLink>
       </div>
    );
}
 
export default Navigation;