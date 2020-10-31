import React, { Component, useEffect, useState } from 'react';
import './petprofile.css';
import 'bootstrap/dist/css/bootstrap.css';
import profileservice from './ProfileService';
import Navigation from '../../Navigation/Navigation2';
import {Petinfo} from './Interface';
import { NavLink} from 'react-router-dom';
import { Button, Container} from 'reactstrap';
import { MyCarousel } from './components/MyCarousel';
import { BookmarkModal } from './components/BookmarkModal';
import {CertModal} from './components/CertModal';
import User from './components/img/User.png';
import greenRight from './components/img/check.png';
import mail from './components/img/mail.png';
import { ProfileModal} from './components/ProfileModal';
import ContactModal from './components/ContactModal';


export const Petprofile = () => {
  const[obj,setObj] = useState<Petinfo>();
  /*({
    petid: '',
    PetName: '',
    PetBreed: '',
    PetGender: '',
    Type: '',
    PetPicURL: '',
    PetStatus: '',
    PetLength: 10,
    PetHeight: 10,
    PetCerURL: '',
    TimeStampUpdate: new Date(Date.now()) ,
    UserId: '',
    AdopUserId: ''});*/

    /*const fetchProfileInfo=() =>{
      return(
        profileservice.fetchProfileInfo()
        .then(res => {
          console.log(res);
          setObj(res)
          console.log(obj)
        })
      )
    }
  
    useEffect(()=>{
      fetchProfileInfo()},[])*/
    const getObj = () =>
    fetch('http://localhost:3000/petinfo/two')
    
    .then((res) => res.json())

    useEffect(() => {
    getObj().then((obj) => setObj(obj))
    }, [])
    
    const PetName=  obj?.PetName;
    const PetBreed = obj?.PetBreed;
    const PetGender=  obj?.PetGender;
    const PetType=  obj?.Type;
    const PetPicUrl= obj?.PetPicUrl;
    const PetStatus=  obj?.PetStatus;
    const PetLength = obj?.PetLength;
    const PetHeight=  obj?.PetHeight;
    const PetCerURL = obj?.PetCerURL;
    const TimeStampUpdate = obj?.TimeStampUpdate
    const UserId=  obj?.PetStatus;
    const AdopUserId = obj?.PetLength;
    const CheckCode=  obj?.CheckCode;
    const CodePet = obj?.CodePet;

    return(
    <div className='bodyPetpro'>
        < Navigation />
        <div className="HeaderPetpro">
          <div id="petStatusPro">
            <img src={greenRight} width="24" height="24"/><h1 id="petStatusPro2">กำลังหาบ้านให้น้อง</h1>
          </div> 
          <div className="toppppp">
            {PetName}
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
            <Container className="ColumnPro">
                <h1 id="oyay">Type: {PetType}</h1>
                <h1 id="oyay">Gender: {PetGender}</h1> 
                <h1 id="oyay">Length: {PetLength}</h1> 
                <h1 id="oyay">height: {PetHeight} </h1>
                <h1 id="oyay">Breed: {PetBreed}</h1>
                <h1 id="oyay">Location:{}</h1>
                <h1 id="oyay">{PetStatus}</h1>
            </Container>
            <div className="ColumnSide">
                <BookmarkModal id="testagain"/>
                <CertModal id="testagain"/>
            </div>
        </Container>
        <Container>
          <iframe width="500" height="450" 
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD2YzHpZurcTrS3PBA667hyc7OcncN4EGg&q=Space+Needle,Seattle+WA" id="maphuhu">
          </iframe>
        </Container>
        
        <Container>
            <h1 id="TextDescrip">Description:</h1>
            {PetStatus}
            <hr id="lineHeader2"></hr>
        </Container>
        <Container>
          <h1 id='TextDescrip'>Post by:</h1>
            <div className="PostbyText">
              <img src={User} className="PostUserPic"/>
              <div className="postInfo">
                <div className="postInfo2">
                  <h1 id="PostUser"> Tiffany Young </h1>
                  < ProfileModal/>
                </div>
                <ContactModal/>    
              </div>
            </div>
        </Container>
    </div>
    );
}

export default Petprofile;