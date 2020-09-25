//Navbar
import React from 'react';
import {Navbar,NavbarBrand,Button,Col} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import chatIcon from './img/chat.png';
import alertIcon from './img/alert.png';
import manIcon from './img/man.png';
import JJicon from './img/JJicon2.png';
 
const Navigation = () => {
    return (
       <div>
         <Navbar className='Navbar'>
            <img className='jjicon' src={JJicon} alt='jjicon'/>
            <NavbarBrand><NavLink to='/'className='navHead' >JOHNJUD</NavLink></NavbarBrand>
            <NavLink to='/home' className='navHead'>HOME</NavLink>
            <NavLink to='/article'className='navHead'>ARTICLE</NavLink>
            <NavLink to='/aboutUS' className='navHead'>ABOUT US</NavLink>
            <NavLink to='/faq' className='navHead'>FAQ</NavLink>
            <Col md='6'>
               <input className='search form-control w-25' type='search' placeholder='search your pet'></input>
            </Col>
            <Button className='changeMode'>
               <div>
                  <img className='manbox' src={manIcon} alt='man'/>
               </div>
               <div>
                  switch to <br/> Donator mode
               </div>
            </Button>
            <img src={chatIcon} alt='chat'/>
            <img src={alertIcon} alt=''/>
            <NavLink to='/signin'className='man'><img src={manIcon} alt=''/></NavLink>
         </Navbar>
       </div>
   );
}
 
export default Navigation;