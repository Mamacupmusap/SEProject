//Navbar
import React from 'react';
import {Navbar,Button,Col, UncontrolledDropdown , DropdownToggle,DropdownMenu,DropdownItem
      ,UncontrolledPopover,PopoverHeader, PopoverBody} from 'reactstrap';
import { NavLink} from 'react-router-dom';
import './Navigation.css';
import chatIcon from './img/chat_white.png';
import alertIcon from './img/alert_white.png';
import manIcon from './img/man_white_logo.png';
import manIcon2 from './img/man_white.png';
import JJicon from './img/JohnJud_white.png';


const Navigation = () => {   
   return (
       <div>
         <Navbar className='Navbar_brown'>
            <NavLink to='/donator/home'><img className='jjicon' src={JJicon} alt='jjicon'/></NavLink>
            <NavLink to='/donator/home' className='navHead_brown'>HOME</NavLink>
            <NavLink to='/donator/article'className='navHead_brown'>ARTICLE</NavLink>
            <NavLink to='/donator/aboutUS' className='navHead_brown'>ABOUT US</NavLink>
            <NavLink to='/donator/faq' className='navHead_brown'>FAQ</NavLink>
            <Col>
               <h1 id="hiw"> </h1>
            </Col>

            <NavLink to='/receiver/home'>
            <Button id='changeMode_brown'className='form-control'>
            <div className='left'>
               <img className='manbox' src={manIcon2} alt='man'/>
            </div>
            <div className='right'>
               switch to <br/> Donator mode
            </div>
            </Button>
            </NavLink>

            <div id='chat'><NavLink to='/donator/chat'><img src={chatIcon} alt='chat'/></NavLink></div>

            <div id="alert">
               <img src={alertIcon} alt='alert'/>
            </div>
            <UncontrolledPopover trigger="legacy" placement="top" target="alert">
            <PopoverHeader>Notification</PopoverHeader>
               <PopoverBody className="notiPop">
                  <h5 id="noti1">คุณได้ทำการนัดแลกเปลี่ยน PetName เรียบร้อยแล้ว</h5>
                  <NavLink to="/donator/petprofile">
                     <h5 id="noti2">ดูข้อมูล</h5>
                  </NavLink>
               </PopoverBody>
            </UncontrolledPopover>

            <div>
               <UncontrolledDropdown>
                  <DropdownToggle nav>
                     <img src={manIcon} alt='man' />
                  </DropdownToggle>
                  <DropdownMenu right className='dropmenu'>
                     <NavLink to='/donator/userprofile'>
                        <DropdownItem>
                           profile
                        </DropdownItem>
                     </NavLink>
                     <NavLink to='/'>
                        <DropdownItem>
                           Logout
                        </DropdownItem>
                     </NavLink>
                  </DropdownMenu>
               </UncontrolledDropdown>
            </div>
            
         </Navbar>
       </div>
   );
}
 
export default Navigation;

