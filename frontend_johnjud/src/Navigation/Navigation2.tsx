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
            <NavLink to='/home'><img className='jjicon' src={JJicon} alt='jjicon'/></NavLink>
            <NavLink to='/home' className='navHead'>HOME</NavLink>
            <NavLink to='/article'className='navHead'>ARTICLE</NavLink>
            <NavLink to='/aboutUS' className='navHead'>ABOUT US</NavLink>
            <NavLink to='/faq' className='navHead'>FAQ</NavLink>
            <Col>
               <input className='search_nav form-control col-lg-8'  type='text' placeholder='search your pet' name='search'></input>
            </Col>

            <NavLink to='/signin'><div className='register'>sign in</div></NavLink>
         </Navbar>
       </div>
   );
}
 
export default Navigation;

