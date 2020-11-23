import React, { useEffect, useState } from 'react';
import './petprofile.css';
import 'bootstrap/dist/css/bootstrap.css';
import profileservice from './ProfileService';
import Navigation from '../../Navigation/Navigation';
import {Petinfo} from './Interface';
import { NavLink, useHistory} from 'react-router-dom';
import {Button,Container,FormGroup,Col} from 'reactstrap';
import { MyCarousel } from './components/MyCarousel';
import { BookmarkModal } from './components/BookmarkModal';
import {CertModal} from './components/CertModal';
import greenRight from './components/img/check.png';
import mail from './components/img/mail.png';
import {Userinfo} from './interface2';


import { Formik,Form, Field, ErrorMessage , FormikHelpers } from 'formik';
import submitCodeService from "./submitCodeService";
import check_y from "../../pages_sign_donator/petprofile/imgpic/check_y.png";
import check_r from "../../pages_sign_donator/petprofile/imgpic/check_r.png";
import { profile } from 'console';

interface Value2{
    codePet: string,
    petId: string,
    token: string
}

export const Petprofile = (props:any) => {
  const[obj,setObj] = useState<Petinfo>();
  const[userinfo,setUserinfo] = useState<Userinfo>();
  const[profileURL,setProfileURL] = useState<string|undefined>();
  const[firstname,setFirstname] = useState<string|undefined>();
  const[lastname,setLastname] = useState<string|undefined>();
  const[username,setUsername] = useState<string|undefined>();



  const petid = props.match.params.petid;

  localStorage.setItem("petID", petid)

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
    
  const PetName = obj?.PetName;
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

    const isAva = () => {
        
        
        return PetStatus === 'ava'
    }
    useEffect(()=>{
        isAva()
    },[])

    const isPend = () => {
        
        
        return PetStatus === 'pend'
    }
    useEffect(()=>{
        isPend()
    },[])

    const isDone = () => {
        
        
        return PetStatus === 'done'
    }
    useEffect(()=>{
        isDone()
    },[])

  const history=useHistory()
  const makeroom=()=>{
    const a={
      userid1:localStorage.UserId,
      userid2:UserId
    }
    profileservice.makeroomchat(a,localStorage.UserId,UserId,localStorage.Token)
    .then(a=>{
      console.log(a)
      const roomid = a.id
      const s1={
        roomid:roomid,
        User:localStorage.UserId
      }
      profileservice.makenoti1(s1, localStorage.UserId, roomid)
      const s2 ={
        roomid:roomid,
        User:UserId
      }
      profileservice.makenoti2(s2, UserId, roomid)
      history.push(`/receiver/chat/${localStorage.UserId}/${UserId}/${roomid}`)
    })
    // profileservice.makenoti()
  }

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

            {isAva() &&
            (<div id="petStatusPro">
                <img src={greenRight} width="24" height="24" alt={''}/><h1 id="petStatusPro2">กำลังหาบ้านให้น้อง</h1>
            </div>)}

            {isPend() &&
            (<div id="petStatusPro">
                <img src={check_y} width="24" height="24" alt={'check_y'}/><h1 id="nongpaibanmai">น้องกำลังไปบ้านใหม่</h1>
            </div>)}

            {isDone() &&
            (<div id="petStatusPro">
                <img src={check_r} width="24" height="24" alt={'check_y'}/><h1 id="nongmeebanmai">น้องมีบ้านใหม่แล้ว</h1>
            </div>)}

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
                <h1 id="oyay">Height: {PetHeight}</h1>
                <h1 id="oyay">Breed: {PetBreed}</h1>
                <h1 id="oyay">Location: {PetAddress}</h1>
            </Container>
            <div id="ColumnSide">
                <BookmarkModal id="testagain"/>
                <CertModal id="testagain" certPic={PetCerURL}/>
            </div>
        </Container>
        <Container id="fuckj">
          <iframe width="500" height="450" 
            src={link_google} id="maphuhu">
          </iframe>
        </Container>
        
        <Container id="petBobo">
            <h1 id="TextDescrip">Description:</h1>
            <h5 id="ihatepine" style={{fontSize:14}}>{Describe}</h5>
            <hr id="lineHeader2"/>
        </Container>
        <Container id="conRec">
          <h1 id='TextDescrip'>Post by:</h1>
            <div id="PostbyText">
              <img src={profileURL} className="PostUserPic" alt={'No picture'}/>
              <div className="postInfo">
                <div className="postInfo2">
                  <div className="Namee">
                    <h1 id="PostUser"> {username}</h1>
                  </div>
                  <NavLink to={`/receiver/userprofile/${UserId}`} id='PostProfile'> Profile</NavLink>
                </div>
                <Button id='whatitsbrown' onClick={makeroom}><img src={mail} id="mailIcon1" alt={''}/>contact</Button>
                  <div>
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
                              const result = await submitCodeService.submitCode(values);
                              
                              if (result.error === 'Conflict' && PetStatus === 'ava') {
                                  alert('Submit failed\n' + 'The code you entered is incorrect.')
                              }
                              setSubmitting(false);
                              window.location.reload();
                          }}
                      >
                          {({touched }) => (
                              <Form>
                                  <Col>
                                      <FormGroup>
                                          <label id="petCodeHehe">รหัสสำหรับนัดแลกเปลี่ยนสัตว์</label>
                                          <Field name="codePet"
                                                 type="text"
                                                 id="codePet"
                                                 placeholder="codePet"
                                                 />
                                          <ErrorMessage component="div" name="codePet" className="invalid-feedback" />
                                          <button type="submit" id="btnPetCode">Submit</button>
                                      </FormGroup>
                                  </Col>
                              </Form>
                          )}
                      </Formik>
                  </div>
              </div>
            </div>
        </Container>
    </div>
    );
}

export default Petprofile;