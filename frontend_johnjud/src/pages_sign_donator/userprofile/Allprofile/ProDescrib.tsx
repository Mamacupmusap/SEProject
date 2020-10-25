import React, { useState } from 'react';
import '../Profile.css';
import Glasspic from '../Glasspic.jpg';
import ProfilePic from '../ProfilePic.png';
import 'bootstrap/dist/css/bootstrap.css'
import TabProfile from '../TabProfile';
import { Link } from 'react-router-dom';
import LeftBlock from './LeftBlock';
import { useEffect } from 'react';
import profileservice from '../ProfileService'
import {Userinfo} from '../Interface';

const Apps=() => {
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
  
  const description = obj?.Description;

  return(   
    <div className = 'Profile'>
        <Link to='/donator/userprofile'>  
          <img id='profilePic' src={ProfilePic}></img>
        </Link>
        <Link to='/donator/userprofile/editprofile'>
          <button className='EditProfile'>Edit Profile</button>
        </Link>
        <img id='glasspic' src = {Glasspic}></img>
        
        <div className = 'block'>
        <LeftBlock/>

          <div className = 'topblock'>
            <TabProfile/>
          </div>
          
          <div className = 'bottomblock'>
            <header id='Description'>
            </header>
            <p id='para'>
              {description}
            </p>
          </div>

        </div>
    </div>
    

  )

}


export default Apps;
