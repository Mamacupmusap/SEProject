import React, { Component, useEffect, useState } from 'react';
import './petprofile.css';
import 'bootstrap/dist/css/bootstrap.css';
import profileservice from './ProfileService';
import Navigation2 from '../../Navigation/Navigation2';
import {Petinfo} from './Interface';
import { NavLink} from 'react-router-dom';
import { Button} from 'reactstrap';
import { MyCarousel } from './components/MyCarousel';
import { BookmarkModal } from './components/BookmarkModal';
import back_button from './components/img/arrow_left.png';
import {CertModal} from './components/CertModal';
import map from './components/img/Map.png';
import lineunder from './components/img/lineunder.png';
import User from './components/img/User.png';
import contact from './components/img/contact.png';

export const Petprofile = () => {
    const[obj,setObj] = useState<Petinfo>();

    const fetchProfileInfo=() =>{
      return(
        profileservice.fetchadoption()
        .then(res => {
          setObj(res)
        })
      )
    }
  
    useEffect(()=>{
      fetchProfileInfo()
    },[])
    
    const petname = obj?.PetName;
    const petbreed = obj?.PetBreed;
    const petgender = obj?.PetGender;
    const pettype = obj?.type;
    const petPicUrl = obj?.petPicUrl;
    const regPetStatus = obj?.regPetStatus;
    const adopPetStatus = obj?.adopPetStatus;
    const petstatus = obj?.PetStatus;
    const petlength = obj?.petLength;
    const petheight = obj?.petHeight;
    const userid = obj?.UserId;
    const adopuserid = obj?.AdopUserId;
    
    return(
    <div className='font'>
        < Navigation2 />
        <Button color="link"><img className='back_button' src={back_button} alt='back_button'/></Button>
        <div className="Header">
            {petname}
        </div>
        <div className="carousel">
            < MyCarousel />
        </div>
        <div className="container">
            Information<br /><br />
            -----------
        </div>
        <div className="infoText">
            <div className="Column">
                <p>Type: {pettype}</p>
                <p>Gender: {petgender}</p>       
                <p>Length: {petlength}</p>
                <p>Height: {petheight}</p>
                <p>Breed: {petbreed}</p>
                <p>Location:</p>
                <p>bla bla</p>
            </div>
            <div className="Column">
                <BookmarkModal/>
                <CertModal/>
            </div>
        </div>
        <img src={map} className="Map"/>
        
        <div className='Text'>
            <p>Description:</p>
            {petstatus}
        </div>
        <img src={lineunder} className="lineunder"/>
        <p className='Text'>Post by:</p>
        <div className="PostbyText">
            <img src={User} className="User"/>
            <p> Tiffany Young </p>
            <NavLink to='/contactprofile' className='Profile'> Profile</NavLink>     
            <NavLink to='/chat'><img src={contact} className="Contact" alt='contact'/></NavLink>    
        </div>
    </div>
    );
}

export default Petprofile;