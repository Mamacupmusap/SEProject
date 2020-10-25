import React, { useEffect, useState } from 'react';
import '../Profile.css';
import ProfileService from '../ProfileService';
import profileservice from '../ProfileService';
import { Link } from 'react-router-dom';
import ProfilePic from '../ProfilePic.png';
import Glasspic from '../Glasspic.jpg';
import {Userinfo} from '../Interface';

const ChangePhone=() => {
    const[obj,setObj] = useState<Userinfo>();

    const fetchProfileInfo=() =>{
      return(
        profileservice.fetchProfileInfo()
        .then(res => {
          setObj(res)
        })
      )
    }
  
    useEffect(()=>{
      fetchProfileInfo()
    },[])

    const phone = obj?.PhoneNO;
/*
    const update=() =>{
        const newPhone= {
            Email:phone,
        }
        ProfileService.updateemail(newPhone);
    }
    */
    return(
        <div className = 'ChangePage'>
            <Link to='/donator/userprofile'>  
                <img id='profilePic' src={ProfilePic}></img>
            </Link>
            <img id='glasspic' src = {Glasspic}></img>
            <div className='BlockBehindProfilePic'>
                <div className='profilename'>
                <br/><br/>
                    <h1><u> username </u></h1>
                </div>
            </div>
            <div className='ChangeBlock'>
                <span id='ChangePhone'>New Phone Number*: </span>
                <input id='InputChangePhone'></input>
                <br/><br/>
                <span id='ChangePhone'>Password*: </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input id='InputChangePhone'></input>
                <br/><br/>
                <button id='SubmitPhoneButton'>Submit</button>
            </div>

        </div>
    )
}
export default ChangePhone;