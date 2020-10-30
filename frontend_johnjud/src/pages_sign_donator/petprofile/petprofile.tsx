import React, { Component, useEffect, useState } from 'react';
import './petprofile.css';
import 'bootstrap/dist/css/bootstrap.css';
import profileservice from './ProfileService';
import Navigation from '../../Navigation/Navigation3';
import {Petinfo} from './Interface';
import { NavLink} from 'react-router-dom';
import { Button, Container, Nav, Label} from 'reactstrap';
import { MyCarousel } from './components/MyCarousel';
import {CertModal} from './components/CertModal';
import greenRight from './components/img/check.png';
import DeleteModal from './components/DeleteModal';
import check_y from './imgpic/check_y.png'
import check_r from './imgpic/check_r.png'
import check from './imgpic/check.png'

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
        <Container>
              <div className="status">

                <input type="checkbox" id="click2"/>
                <Label for="click2" className="confirm-btn" hidden>พาไปบ้านใหม่</Label>

              <div className="statusz"><img src={check} alt='check'></img><div className="status-text">กำลังหาบ้านให้น้อง</div></div>

              <input type="checkbox" id="click"/>
              <Label for="click" className="click-me">พาไปบ้านใหม่</Label>
              <div className="content">
                <div className="rubnong">
                  <h1>Username ผู้รับน้อง</h1>
                  <input type="text" placeholder="username" className="rubnonguser"/>
                  <h2>*จะมีการเปลี่ยนแปลงสถานะหลังจากผู้รับกดยืนยัน</h2>
                  <div className="btnx">
                    <input type="checkbox" id="click2"/>
                    <Label for="click2" className="confirm-btn">confirm</Label>
                    <Label for="click" className="cancel-btn">cancel</Label>
                  </div>
                </div>
              </div>
                <div className="statuszz"><img src={check_y} alt='check_y'></img><div className="status-text2">น้องกำลังไปบ้านใหม่</div></div>
                <input type="checkbox" id="click3"/>
                <Label for="click3" className="click-me3">ได้บ้านใหม่แล้ว</Label>

                <div className="statuszzz">
                  <img src={check_r} alt='check_r'></img>
                  <div className="status-text3">น้องมีบ้านใหม่แล้ว</div>
                </div>
            </div>
        </Container>
          <div id="sideHehe">
            <div id="petStatusPro">
              <img src={greenRight} width="24" height="24"/><h1 id="petStatusPro2">กำลังหาบ้านให้น้อง</h1>
            </div>
            <h5 id="petCodeDon">รหัสสำหรับนัดแลกเปลี่ยนสัตว์: รหัสสสส</h5>
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