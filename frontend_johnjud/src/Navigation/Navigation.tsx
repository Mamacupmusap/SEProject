//Navbar
import React from 'react';
import {Navbar,Button,Col, UncontrolledDropdown , DropdownToggle,DropdownMenu,DropdownItem
      ,UncontrolledPopover,PopoverHeader, PopoverBody} from 'reactstrap';
import { NavLink} from 'react-router-dom';
import './Navigation.css';
import chatIcon from './img/chat.png';
import alertIcon from './img/alert.png';
import manIcon from './img/man.png';
import manIcon2 from './img/man_white.png';
import JJicon from './img/newlogo02.png';
import AcceptPetModal from './components/AcceptPetModal';

const Navigation = () => {   
   return (
       <div>
         <Navbar className='Navbar'>
            <NavLink to='/receiver/home'><img className='jjicon' src={JJicon} alt='jjicon'/></NavLink>
            <NavLink to='/receiver/home' className='navHead'>HOME</NavLink>
            <NavLink to='/receiver/article'className='navHead'>ARTICLE</NavLink>
            <NavLink to='/receiver/aboutUS' className='navHead'>ABOUT US</NavLink>
            <NavLink to='/receiver/faq' className='navHead'>FAQ</NavLink>
            <Col>
               <input className='search_nav form-control col-lg-8' type='text' placeholder='search your pet' name='search'></input>
            </Col>

            <NavLink to='/donator/home'>
            <Button id='changeMode'className='form-control'>
            <div className='left'>
               <img className='manbox' src={manIcon2} alt='man'/>
            </div>
            <div className='right'>
               switch to <br/> Donator mode
            </div>
            </Button>
            </NavLink>

            <div id='chat'><NavLink to='/receiver/chat'><img src={chatIcon} alt='chat'/></NavLink></div>

            <div id="alert">
               <img src={alertIcon} alt='alert'/>
            </div>
            <UncontrolledPopover trigger="legacy" placement="top" target="alert">
            <PopoverHeader>Notification</PopoverHeader>
               <PopoverBody className="notiPop">
                  <h5 id="noti1">คุณได้ทำการนัดแลกเปลี่ยน PetName เรียบร้อยแล้ว</h5>
                  <NavLink to="/receiver/petprofile">
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
                     <NavLink to='/receiver/userprofile'>
                        <DropdownItem>
                           profile
                        </DropdownItem>
                     </NavLink>
                     <NavLink to='/receiver/bookmark'>
                        <DropdownItem>
                           bookmark
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

