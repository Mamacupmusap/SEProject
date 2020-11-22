import React, { Component, useEffect, useState } from 'react';
import './petprofile.css';
import 'bootstrap/dist/css/bootstrap.css';
import profileservice from './ProfileService';
import Navigation from '../../Navigation/Navigation3';
import {Petinfo} from './Interface';
import { NavLink} from 'react-router-dom';
import {Button, Container, Nav, Label, Col, FormGroup} from 'reactstrap';
import { MyCarousel } from './components/MyCarousel';
import {CertModal} from './components/CertModal';
import DeleteModal from './components/DeleteModal';
import check_y from './imgpic/check_y.png'
import check_r from './imgpic/check_r.png'
import check from './imgpic/check.png'

import { Formik,Form, Field, ErrorMessage , FormikHelpers } from 'formik';
import changeStatusService from "./changeStatusService";

interface Value2{
    petId: string,
    token: string
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

localStorage.setItem('petID',petid)
localStorage.removeItem('EditpetInfo')

console.log(petid)

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
    const genCode = obj?.GenCode;

    const link_google = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD2YzHpZurcTrS3PBA667hyc7OcncN4EGg&q=${PetAddress}`

    const isAva = () => {
        console.log('ava')
        console.log(PetStatus === 'ava')
        return PetStatus === 'ava'
    }
    useEffect(()=>{
        isAva()
    },[])

    const isPend = () => {
        console.log('pend')
        console.log(PetStatus === 'pend')
        return PetStatus === 'pend'
    }
    useEffect(()=>{
        isPend()
    },[])

    const isDone = () => {
        console.log('done')
        console.log(PetStatus === 'done')
        return PetStatus === 'done'
    }
    useEffect(()=>{
        isDone()
    },[])

    return(
    <div className='bodyPetpro'>
        < Navigation />
        <div className="HeaderPetpro">
        <Container>
            <div className="status">
                {isAva() &&
                (<div>
                    <img src={check} alt='check'/><div className="status-text">กำลังหาบ้านให้น้อง</div>
                </div>)}

                {isPend() &&
                (<div>
                    <img src={check_y} alt='check_y'/><div className="status-text2">น้องกำลังไปบ้านใหม่</div>
                    <Formik
                        initialValues={{
                            codePet: '',
                            petId: petid,
                            token: localStorage.Token
                        }}
                        onSubmit={async (
                            values: Value2,
                            { setSubmitting }: FormikHelpers<Value2>
                        ) => {
                            console.log(values.token)
                            console.log(values.petId)
                            const result = await changeStatusService.updateStatus(values);
                            console.log(result);
                            setSubmitting(false);
                            window.location.reload();
                        }}
                    >
                        {({touched }) => (
                            <Form>
                                <Col>
                                    <FormGroup>
                                        <Button type='submit'>ได้บ้านใหม่แล้ว</Button>
                                    </FormGroup>
                                </Col>
                            </Form>
                        )}
                    </Formik>
                </div>)}

                {isDone() &&
                (<div>
                    <img src={check_r} alt='check_r'/><div className="status-text3">น้องมีบ้านใหม่แล้ว</div>
                </div>)}

            </div>
        </Container>
          <br/>
          <div id="sideHehe">
            <h5 id="petCodeDon">รหัสสำหรับนัดแลกเปลี่ยนสัตว์: {genCode}</h5>
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
        <Container id="infoText1">
            <Container id="ColumnPro5">
                <h1 id="oyay">Type: {PetType}</h1>
                <h1 id="oyay">Gender: {PetGender}</h1>  
                <h1 id="oyay">Length: {PetLength}</h1>     
                <h1 id="oyay">Height: {PetHeight} </h1>
                <h1 id="oyay">Breed: {PetBreed}</h1>
                <h1 id="oyay">Location: {PetAddress}</h1>

            </Container>
            <div id="ColumnSideO">
                <CertModal id="testagain" certPic={PetCerURL}/>
            </div>
                <div id="hehehuhu">
                <NavLink to={`/donator/editpetprofile/${petid}`} id="editPetLuv" style={{color: '#61b292'}}>edit</NavLink>
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
            <h5 id="ihatepine" style={{fontSize:14}}>{Describe}</h5>
            <hr id="lineHeader2"/>
        </Container>
    </div>
    );
}

export default Petprofile;