import React, { Component, useEffect, useState } from 'react';
import './petprofile.css';
import 'bootstrap/dist/css/bootstrap.css';
import profileservice from './ProfileService';
import Navigation from '../../Navigation/Navigation';
import {Petinfo} from './Interface';
import { NavLink, useHistory} from 'react-router-dom';
import { Button, Container} from 'reactstrap';
import { MyCarousel } from './components/MyCarousel';
import { BookmarkModal } from './components/BookmarkModal';
import {CertModal} from './components/CertModal';
import User from './components/img/User.png';
import greenRight from './components/img/check.png';
import mail from './components/img/mail.png';
import userEvent from '@testing-library/user-event';

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
  const history=useHistory()
  const makeroom=()=>{
    const a={
      userid1:localStorage.UserId,
      userid2:UserId
    }
    profileservice.makeroomchat(a,localStorage.UserId,UserId)
    .then(a=>{
      if(a=="exist"){
        history.push('http://localhost:2000/donator/chat')
      }
      else{
        history.push('http://localhost:2000/donator/chat')
      }
    })
  }
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
        <Container id="infoText">
            <Container id="ColumnPro">
                <h1 id="oyay">Type: {PetType}</h1>
                <h1 id="oyay">Gender: {PetGender}</h1>       
                <h1 id="oyay">Length: {PetLength}</h1>
                <h1 id="oyay">Height: {PetHeight}</h1>
                <h1 id="oyay">Breed: {PetBreed}</h1>
                <h1 id="oyay">Location: {PetAddress}</h1>
            </Container>
            <div id="ColumnSide">
                <BookmarkModal id="testagain"/>
                <CertModal id="testagain"/>
            </div>
        </Container>
        <Container id="fuckj">
          <iframe width="500" height="450" 
            src={link_google} id="maphuhu">
          </iframe>
        </Container>
        
        <Container id="petBobo">
            <h1 id="TextDescrip">Description:</h1>
            <h5 id="ihatepine" style={{fontSize:16}}>{Describe}</h5>
            <hr id="lineHeader2"></hr>
        </Container>
        <Container>
          <h1 id='TextDescrip'>Post by:</h1>
            <div id="PostbyText">
              <img src={User} className="PostUserPic"/>
              <div className="postInfo">
                <div className="postInfo2">
                  <h1 id="PostUser"> Tiffany Young </h1>
                  <NavLink to='/contactprofile' id='PostProfile'> Profile</NavLink>
                </div>
                <NavLink to='/receiver/chat'><Button id='whatitsbrown' onClick={makeroom}><img src={mail} id="mailIcon1"/>contact</Button></NavLink>
                <div>
                  <form>
                    <div id="enterPetCode">
                      <label id="petCodeHehe">รหัสสำหรับนัดแลกเปลี่ยนสัตว์</label>
                      <input
                        /*type="email"*/
                        id="inputPetCode"
                        style={{marginLeft:10}}
                      />
                      <button type="submit" id="btnPetCode">
                      Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </Container>
    </div>
    );
}

export default Petprofile;