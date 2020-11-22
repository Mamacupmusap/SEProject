import React, { useEffect, useState } from 'react';
import './petprofile.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../../Navigation/Navigation2';
import {Petinfo} from './Interface';
import { Container} from 'reactstrap';
import { MyCarousel } from './components/MyCarousel';
import { BookmarkModal } from './components/BookmarkModal';
import {CertModal} from './components/CertModal';
import greenRight from './components/img/check.png';
import { ProfileModal} from './components/ProfileModal';
import ContactModal from './components/ContactModal';
import profileservice from './ProfileService'
import {Userinfo} from './interface3';

export const Petprofile = (props:any) => {
  const[obj,setObj] = useState<Petinfo>();
  const[userinfo,setUserinfo] = useState<Userinfo>();
  const[profileURL,setProfileURL] = useState<string|undefined>();
  const[firstname,setFirstname] = useState<string|undefined>();
  const[lastname,setLastname] = useState<string|undefined>();
  const[username,setUsername] = useState<string|undefined>();

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
  const PetPicUrl= obj?.PetPicURL;
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

  const fetchProfileInfos=() =>{
    return(
      profileservice.fetchProfileInfos(UserId)
      .then(res => {
        setUserinfo(res)
      })
    )
  }
  const editprofileinfo=()=>{
    setProfileURL(userinfo?.ImgURL)
    setUsername(userinfo?.UserName)
    setFirstname(userinfo?.FirstName)
    setLastname(userinfo?.LastName)
  }
  useEffect(()=>{
    fetchProfileInfos()
  },[UserId])
  useEffect(()=>{
    editprofileinfo()
  },[userinfo])

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
            < MyCarousel PetURl={PetPicUrl}/>
        </div>
        <div className="informationn">
            Information
            <hr id="lineHeader"/>
        </div>
        <Container id="infoText">
            <Container id="ColumnPro">
                <h1 id="oyay">Type: {PetType}</h1>
                <h1 id="oyay">Gender: {PetGender}</h1> 
                <h1 id="oyay">Length: {PetLength}</h1> 
                <h1 id="oyay">Height: {PetHeight} </h1>
                <h1 id="oyay">Breed: {PetBreed}</h1>
                <h1 id="oyay">Location: {PetAddress}</h1>
            </Container>
            <div className="ColumnSide">
                <BookmarkModal id="testagain"/>
                <CertModal id="testagain" certPic={PetCerURL}/>
            </div>
        </Container>
        <Container  id='fuckjk'>
          <iframe width="500" height="450" 
            src={link_google} id="maphuhu">
          </iframe>
        </Container>
        
        <Container id="petBobo1">
            <h1 id="TextDescrip">Description:</h1>
            <h5 style={{textAlign:'start', fontSize:14}}>{Describe}</h5>
            <hr id="lineHeader2"/>
        </Container>
        <Container id="conNot">
          <h1 id='TextDescrip'>Post by:</h1>
            <div id="PostbyTextNotSign">
            <img src={profileURL} className="PostUserPic" alt={'No picture'}/>
              <div className="postInfoNot">
                <div className="postInfo2Not">
                  <div className="NameNot">
                    <h1 id="PostUserNot"> {username}</h1>
                  </div>
                  <ProfileModal/>
                </div>
                <ContactModal/>    
              </div>
            </div>
        </Container>
    </div>
    );
}

export default Petprofile;