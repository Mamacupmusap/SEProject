import React, { useState } from 'react';
import '../Profile.css';
import Glasspic from '../Glasspic.jpg';
import 'bootstrap/dist/css/bootstrap.css'
import TabProfile from '../TabProfile';
import { Link } from 'react-router-dom';
import LeftBlock from './LeftBlock';
import { useEffect } from 'react';
import profileservice from '../ProfileService'
import {Userinfo} from '../Interface';
import Navigation3 from '../../../Navigation/Navigation'

const Apps=(props:any) => {
  const[obj,setObj] = useState<Userinfo>();
  const userId = props.match.params.userId

  const fetchProfileInfo=() =>{
    return(
      profileservice.fetchProfileInfo(userId)
      .then(res => {
        setObj(res)
      })
    )
  }

  useEffect(()=>{
    fetchProfileInfo()
  },[])
  
  const description = obj?.Description;
  const ProfilePic = obj?.ImgURL;

  // 
  // 

  return(   
    <div>
    
    <div>
      <Navigation3/>
      <div className = 'Profile'>
     
        <Link to={`/receiver/userprofile/${userId}`}>  
          <img id='profilePic' src={ProfilePic}></img>
        </Link>
   
        {userId == localStorage.UserId &&
        <Link to={`/receiver/userprofile/${userId}/editprofile`}>
          <button className='EditProfile'>Edit Profile</button>
        </Link>
        }
        <img id='glasspic' src = {Glasspic}></img>
        
        <div className = 'block'>
        <LeftBlock userId ={userId}/>

          <div className = 'topblock'>
            <TabProfile userId ={userId}/>
          </div>
          
          <div className = 'bottomblock'>
            <br></br>
            <h4 className='h4'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Description</h4>
            <header id='Description'>
            </header>
            <p id='para'>
              {description}
            </p>
          </div>

        </div>
    </div>
    </div>
    </div>
    

  )

}


export default Apps;
