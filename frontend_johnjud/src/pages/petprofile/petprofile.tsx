import React, { useEffect, useState } from 'react';
import './petprofile.css';
import 'bootstrap/dist/css/bootstrap.css';
//import profileservice from './ProfileService';
import Navigation from '../../Navigation/Navigation2';
import {Petinfo} from './Interface';
//import { NavLink} from 'react-router-dom';
import { Container} from 'reactstrap';
import { MyCarousel } from './components/MyCarousel';
import { BookmarkModal } from './components/BookmarkModal';
import {CertModal} from './components/CertModal';
import User from './components/img/User.png';
import greenRight from './components/img/check.png';
//import mail from './components/img/mail.png';
import { ProfileModal} from './components/ProfileModal';
import ContactModal from './components/ContactModal';
import profileservice from './ProfileService'


export const Petprofile = (props:any) => {
  const[obj,setObj] = useState<Petinfo>();
  const petid = props.match.params.petid;

  const fetchProfileInfo=() =>{
    return(
      profileservice.fetchProfileInfo(petid)
      .then(res => {
        setObj(res)
      })
    )
  }

  useEffect(()=>{
    fetchProfileInfo()
  },[])
    
  const PetName=  obj?.PetName;
  const PetBreed = obj?.PetBreed;
  const PetGender=  obj?.PetGender;
  const PetType=  obj?.Type;
  const PetPicUrl= obj?.PetPicUrl;
  const PetStatus=  obj?.PetStatus;
  const PetLength = obj?.PetLength;
  const PetHeight=  obj?.PetHeight;
  const PetCerURL = obj?.PetCerURL;
  const TimeStampUpdate = obj?.TimeStampUpdate;
  const UserId=  obj?.UserId;
  const TimeUpdate = obj?.TimeUpdate;
  const Describe=  obj?.Describe;
  const PetAddress = obj?.PetAddress;
    

  const link_google = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD2YzHpZurcTrS3PBA667hyc7OcncN4EGg&q=${PetAddress}`

    return(
    <div className='bodyPetpro'>
        < Navigation />
        <div className="HeaderPetpro">
          <div id="petStatusPro">
            <img src={greenRight} width="24" height="24" alt={''}/><h1 id="petStatusPro2">กำลังหาบ้านให้น้อง</h1>
          </div> 
          <div className="toppppp">
            {PetName}
          </div>
          <hr id="lineHeader"/> 
        </div>
        <div className="carousel">
            < MyCarousel />
        </div>
        <div className="informationn">
            Information
            <hr id="lineHeader"/>
        </div>
        <Container className="infoText">
            <Container className="ColumnPro">
                <h1 id="oyay">Type: {PetType}</h1>
                <h1 id="oyay">Gender: {PetGender}</h1> 
                <h1 id="oyay">Length: {PetLength}</h1> 
                <h1 id="oyay">Height: {PetHeight} </h1>
                <h1 id="oyay">Breed: {PetBreed}</h1>
                <h1 id="oyay">Location:{PetAddress}</h1>
            </Container>
            <div className="ColumnSide">
                <BookmarkModal id="testagain"/>
                <CertModal id="testagain"/>
            </div>
        </Container>
        <Container>
          <iframe width="500" height="450" 
            src={link_google} id="maphuhu">
          </iframe>
        </Container>
        
        <Container>
            <h1 id="TextDescrip">Description:</h1>
            {Describe}
            <hr id="lineHeader2"/>
        </Container>
        <Container>
          <h1 id='TextDescrip'>Post by:</h1>
            <div className="PostbyText">
              <img src={User} className="PostUserPic" alt={"'"}/>
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