import React, { useEffect, useState } from 'react';
import '../Profile.css';
import ProfileService from '../ProfileService';
import profileservice from '../ProfileService';
import { Link } from 'react-router-dom';
import ProfilePic from '../ProfilePic.png';
import Glasspic from '../Glasspic.jpg';
import {Userinfo} from '../Interface';

const ChangeEmail=() => {
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
    
    const email = obj?.Email;
    const [newEmail, setNewEmail] = useState<string|undefined>(email);
/*
    const update=() =>{
        const newEmail = {
            Email:email,
        }
        ProfileService.updateemail(newEmail);
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
                <span id='ChangeEmail'>New Email: </span>
                <input id='InputChangeEmail'></input>
                <br/><br/>
                <span id='ChangeEmail'>Password*: </span>
                &nbsp;<input id='InputChangeEmail' value={newEmail} onChange={(e) => {setNewEmail(e.target.value);}}></input>
                <br/><br/>
                <button id='SubmitEmailButton' /*onClick={update}*/>Submit</button>
            </div>

        </div>
    )
}
export default ChangeEmail;