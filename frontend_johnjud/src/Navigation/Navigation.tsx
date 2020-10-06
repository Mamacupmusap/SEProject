//Navbar
import React from 'react';
import {Navbar,Button,Col, UncontrolledDropdown , DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import { NavLink} from 'react-router-dom';
import './Navigation.css';
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
            <Button id='changeMode'>
            <div>
               <img className='manbox' src={manIcon2} alt='man'/>
            </div>
            <div>
               switch to <br/> Donator mode
            </div>
            </Button>
            <div className='icon'>
               <NavLink to='/chat'><img src={chatIcon} alt='chat'/></NavLink>
               <img src={alertIcon} alt='alert' />
               <UncontrolledDropdown>
                  <DropdownToggle nav>
                     <img src={manIcon} alt='man' />
                  </DropdownToggle>
                  <DropdownMenu left className='dropmenu'>
                     <DropdownItem>
                        <NavLink to='/signin'>profile</NavLink>
                     </DropdownItem>
                     <DropdownItem>
                        <NavLink to='/bookmark'>bookmark</NavLink>
                     </DropdownItem>
                     <DropdownItem>
                        <NavLink to='/'>Logout</NavLink>
                     </DropdownItem>
                  </DropdownMenu>
               </UncontrolledDropdown>
            </div>
         </Navbar>
       </div>
   );
}
 
export default Navigation;

