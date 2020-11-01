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


//import changeStatusService from "./changeStatusService";

type SubmitFormProb = {
    SubmitCallback: () => void
}

interface Value2{
    codePet: string,
    petId: string
}

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



localStorage.setItem('pet_id',petid)
console.log(petid)

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

    const changeStatusAvaToPend = () => {
        // fetch PetStatus จาก database มา check ถ้า PetStatus เป็น Pend ให้
        // เปลี่ยนจากกำลังหาบ้านให้น้อง เป็น น้องกำลังไปบ้านใหม่
        if (PetStatus === "Pend") {
            return (
                <div>น้องกำลังไปบ้านใหม่</div>
            )
        }
    };

    const changeStatusPendToDone = () => {
        // ตรงนี้จะมีการ click ยืนยันโดยตัว donator อีกทีโดยกดที่ปุ่ม ได้บ้านใหม่แล้ว
        // ให้ patch ข้อมูลไปที่ updateStatus แล้วจะคืนค่า petinfo อันใหม่มาให้ ให้เราเลือก petinfo.PetStatus มาใช้เปลี่ยน status
        // เปลี่ยนจากน้องกำลังไปบ้านใหม่ เป็น น้องมีบ้านใหม่แล้ว
        if (PetStatus === "Done") {
            return (
                <div>น้องมีบ้านใหม่แล้ว</div>
            )
        }
    };

    const handleUpdate = () => [

    ];

    const hello = () => {
      return (
          <div>hello</div>
      )
    };
    

    return(
    <div className='bodyPetpro'>
        < Navigation />
        <div className="HeaderPetpro">
        <Container>
              <div className="status">

                <input type="checkbox" id="click2"/>
                <Label for="click2" className="confirm-btn" hidden>พาไปบ้านใหม่</Label>

              <div className="statusz"><img src={check} alt='check'/><div className="status-text">กำลังหาบ้านให้น้อง</div></div>

              <input type="checkbox" id="click"/>
              <Label for="click" className="click-me">พาไปบ้านใหม่</Label>
                <div className="statuszz"><img src={check_y} alt='check_y'/><div className="status-text2">น้องกำลังไปบ้านใหม่</div></div>
                <input type="checkbox" id="click3"/>
                <Label for="click3" className="click-me3">ได้บ้านใหม่แล้ว</Label>

                <div className="statuszzz">
                  <img src={check_r} alt='check_r'/>
                  <div className="status-text3">น้องมีบ้านใหม่แล้ว</div>
                </div>
            </div>
        </Container>
          <div id="sideHehe">
            <div id="petStatusPro">
              <img src={greenRight} width="24" height="24" alt={''}/><h1 id="petStatusPro2">กำลังหาบ้านให้น้อง</h1>
            </div>
            <h5 id="petCodeDon">รหัสสำหรับนัดแลกเปลี่ยนสัตว์: {petid}</h5>
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
        <Container id="infoText1">
            <Container id="ColumnPro5">
                <h1 id="oyay">Type: {PetType}</h1>
                <h1 id="oyay">Gender: {PetGender}</h1>  
                <h1 id="oyay">Length: {PetLength}</h1>     
                <h1 id="oyay">Height: {PetHeight} </h1>
                <h1 id="oyay">Breed: {PetBreed}</h1>
                <h1 id="oyay">Location:{PetAddress}</h1>

            </Container>
            <div id="ColumnSideO">
                  <CertModal id="testagain9"/>
            </div>
                <div id="hehehuhu">
                <NavLink to='/donator/editpetprofile' id="editPetLuv" style={{color: '#61b292'}}>edit</NavLink>
                < DeleteModal id="testagain9"/>
                </div>
           
        </Container>
        <Container id='fuckk'>
          <iframe width="500" height="450" 
            src={link_google} id="maphuhu">
          </iframe>
        </Container>
        
        <Container id="scam">
            <h1 id="TextDescrip">Description:</h1>
            <h5 id="ihatepine" style={{fontSize:16}}>{Describe}</h5>
            <hr id="lineHeader2"/>
        </Container>
    </div>
    );
}

export default Petprofile;