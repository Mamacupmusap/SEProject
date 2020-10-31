//Navbar
import React from 'react';
import {Navbar,Col} from 'reactstrap';
import { NavLink} from 'react-router-dom';
import './Navigation.css';

import JJicon from './img/newlogo02.png';

const Navigation = () => {  

   return (
       <div>
         <Navbar className='Navbar'>
            <NavLink to='/'><img className='jjicon' src={JJicon} alt='jjicon'/></NavLink>
            <NavLink to='/' className='navHead'>HOME</NavLink>
            <NavLink to='/article' className='navHead'>ARTICLE</NavLink>
            <NavLink to='/aboutUS' className='navHead'>ABOUT US</NavLink>
            <NavLink to='/faq' className='navHead'>FAQ</NavLink>
            <Col>
               <h1 id="hiw"> </h1>
            </Col>
            
            <div className='blank_box'/>
            <NavLink to='/signin'><div className='register'>sign in</div></NavLink>
            <div className='blank_box'/>
         </Navbar>
       </div>
   );
}
 
export default Navigation;

