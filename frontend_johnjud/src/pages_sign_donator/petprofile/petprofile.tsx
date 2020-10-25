import React, { Component, useEffect, useState } from 'react';
import './petprofile.css';
import 'bootstrap/dist/css/bootstrap.css';
import profileservice from './ProfileService';
import Navigation from '../../Navigation/Navigation3';
import {Petinfo} from './Interface';
import { NavLink} from 'react-router-dom';
import { Button, Container, Nav} from 'reactstrap';
import { MyCarousel } from './components/MyCarousel';
import {CertModal} from './components/CertModal';
import greenRight from './components/img/check.png';
import DeleteModal from './components/DeleteModal';

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
    <div className='bodyPetpro'>
        < Navigation />
        <div className="HeaderPetpro">
          <div id="petStatusPro">
            <img src={greenRight} width="24" height="24"/><h1 id="petStatusPro2">กำลังหาบ้านให้น้อง</h1>
          </div> 
          <div className="toppppp">
            {petname}
          </div>
          <hr id="lineHeader"></hr> 
        </div>
        <div className="carousel">
            < MyCarousel />
        </div>
        <div className="informationn">
            Information
            <hr id="lineHeader"></hr>
        </div>
        <Container className="infoText">
            <Container className="ColumnPro5">
                <h1 id="oyay">Type: {pettype}</h1>
                <h1 id="oyay">Gender: {petgender}</h1>       
                <h1 id="oyay">Length: {petlength}</h1>
                <h1 id="oyay">Height: {petheight}</h1>
                <h1 id="oyay">Breed: {petbreed}</h1>
                <h1 id="oyay">Location:</h1>
                <h1 id="oyay">bla bla</h1>
            </Container>
            <div className="ColumnSideO">
                  <CertModal id="testagain9"/>
            </div>
                <div id="hehehuhu">
                <NavLink to='/donator/petprofile1' id="editPetLuv" style={{color: '#61b292'}}>edit</NavLink>
                < DeleteModal id="testagain9"/>
                </div>
           
        </Container>
        <Container>
          <iframe width="500" height="450" 
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD2YzHpZurcTrS3PBA667hyc7OcncN4EGg&q=Space+Needle,Seattle+WA" id="maphuhu">
          </iframe>
        </Container>
        
        <Container>
            <h1 id="TextDescrip">Description:</h1>
            {petstatus}
            <hr id="lineHeader2"></hr>
        </Container>
    </div>
    );
}

export default Petprofile;