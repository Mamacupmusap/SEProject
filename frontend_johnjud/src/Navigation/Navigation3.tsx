//Navbar
import React,{ useState, useEffect } from 'react';
import {Navbar,Button,Col, UncontrolledDropdown , DropdownToggle,DropdownMenu,DropdownItem
      ,UncontrolledPopover,PopoverHeader, PopoverBody} from 'reactstrap';
import { NavLink} from 'react-router-dom';
import './Navigation.css';
import chatIcon from './img/chat_white.png';
import alertIcon from './img/alert_white.png';
import manIcon from './img/man_white_logo.png';
import manIcon2 from './img/man_white.png';
import JJicon from './img/JohnJud_white.png';
import {Petinfo} from './Interface';
import NavigationService from './NavigationService'

import AuthenService from "../pages/signin/AuthenService";
import { If } from 'react-if';

const Navigation = () => {
   const haddlelogout = () => {
      AuthenService.logoutUser()
   }
   const[obj,setObj] = useState<Petinfo>();
   const[allPet,setAllPet] = useState<any[]>([]);
   const petInfo=() =>{
     return(
      NavigationService.fetchAllPet()
             .then(name => {
               setAllPet(name)
             })
     )
   }
   useEffect(()=>{
     petInfo().then()
   },[])
    
    const petname = obj?.PetName;
    const userid = obj?.UserId;
    const adopuserid = obj?.AdopUserId;
    const userIdlocal = localStorage.UserId
   return (
       <div>
         <Navbar className='Navbar_brown'>
            <NavLink to='/donator/home'><img className='jjicon' src={JJicon} alt='jjicon'/></NavLink>
            <NavLink to='/donator/home' className='navHead_brown'>HOME</NavLink>
            <NavLink to='/donator/article' className='navHead_brown'>ARTICLE</NavLink>
            <NavLink to='/donator/aboutUS' className='navHead_brown'>ABOUT US</NavLink>
            <NavLink to='/donator/faq' className='navHead_brown'>FAQ</NavLink>
            <Col>
               <h1 id="hiw"> </h1>
            </Col>

            <NavLink to='/receiver/home'>
            <Button id='changeMode_brown' className='form-control'>
            <div className='left'>
               <img className='manbox' src={manIcon2} alt='man'/>
            </div>
            <div className='right'>
               switch to <br/> Donator mode
            </div>
            </Button>
            </NavLink>

            <div id='chat'><NavLink to= {`/donator/chat/${userIdlocal}/chatroom`} ><img src={chatIcon} alt='chat'/></NavLink></div>

            <div id="alert">
               <img src={alertIcon} alt='alert'/>
            </div>
            <UncontrolledPopover trigger="legacy" placement="top" target="alert">
            <PopoverHeader>Notification</PopoverHeader>
               <PopoverBody className="notiPop">                  
                  {allPet.map((value) => {
                     
                     return (
                        <If condition={value.CheckCode}>
                           <If condition={value.AdopUserId==localStorage.UserId}>
                              <h5 id="noti1">คุณได้ทำการนัดแลกเปลี่ยน {value.PetName} เรียบร้อยแล้ว
                              <NavLink to={'/receiver/petprofile/' + value.petid}>
                                 <h5 id="noti2">ดูข้อมูล</h5>
                              </NavLink>
                              </h5>
                           </If>
                        </If>
               )
               })}
               </PopoverBody>
            </UncontrolledPopover>

            <div>
               <UncontrolledDropdown>
                  <DropdownToggle nav>
                     <img src={manIcon} alt='man' />
                  </DropdownToggle>
                  <DropdownMenu right className='dropmenu2' style={{lineHeight:0.8}}>
                     <NavLink to={`/donator/userprofile/${userIdlocal}`}>
                        <DropdownItem>
                           profile
                        </DropdownItem>
                     </NavLink>
                     <NavLink to='/'>
                        <DropdownItem onClick={haddlelogout}>
                           logout
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

