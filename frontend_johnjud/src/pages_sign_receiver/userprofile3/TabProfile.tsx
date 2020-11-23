import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {
    BrowserRouter as Router,
    Link,
    Redirect
  } from "react-router-dom";
import profileservice from './ProfileService';
import { useEffect } from 'react';
import {petnum} from './EditProfile/interface3'

const TapProfile = (props:any) => {
  const userId = props.userId

  const [count,setcount] = useState<number>();
  const [countadop,setcountadop] = useState<number>();
  const [countdonate,setcountdonate] = useState<number>();

  const fetchProfileInfo=() =>{
    return(

      profileservice.fetchregisternum(userId)
      .then(res => {
        setcount(res)
      })
    )
  }

  const fetchProfileInfos=() =>{
    return(
      profileservice.fetchadoptionnum(userId)
      .then(res => {
        setcountadop(res)
      })
    )
  }
  const fetchProfileInfoss=() =>{
    return(
      profileservice.fetchdonationnum(userId)
      .then(res => {
        setcountdonate(res)
      })
    )
  }


  useEffect(()=>{
    fetchProfileInfo()
    fetchProfileInfos()
    fetchProfileInfoss()

  },[])
  
  return (
    <div>
        <div>
            <Link to={`/receiver/userprofile/${userId}/proadoption`}>
                <button id='ButtonPetAdop' >Pet Adoption<br/><br/> {countadop}</button>
            </Link>
            <Link to={`/receiver/userprofile/${userId}/proregister`} >
                <button id='ButtonPetAdop' >Pet Registeration<br/><br/> {count} </button>
            </Link>
            <Link to={`/receiver/userprofile/${userId}/prodonation`} >
                <button id='ButtonPetAdop' >Pet Donation<br/><br/> {countdonate}</button>
            </Link>
        </div>
    </div>
  );
}

export default TapProfile;