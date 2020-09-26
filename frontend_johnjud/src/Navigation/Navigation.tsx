//Navbar
import React from 'react';
import {Navbar,Button,Col} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import bookmarkIcon from './img/bookmark.png'
import chatIcon from './img/chat.png';
import alertIcon from './img/alert.png';
import manIcon from './img/man.png';
import manIcon2 from './img/man_white.png';
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
               <input className='search form-control' type='search' placeholder='search your pet'></input>
            </Col>
            <Button className='changeMode'>
            <div>
               <img className='manbox' src={manIcon2} alt='man'/>
            </div>
            <div>
               switch to <br/> Donator mode
            </div>
            </Button>
            <div className='icon'>
               <img src={bookmarkIcon} alt='bookmark' />
               <img src={chatIcon} alt='chat' />
               <img src={alertIcon} alt='alert' />
               <NavLink to='/signin'className='man'><img src={manIcon} alt='man' /></NavLink>
            </div>
         </Navbar>
       </div>
   );
}
 
export default Navigation;