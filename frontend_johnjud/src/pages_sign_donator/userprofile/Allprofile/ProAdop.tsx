import React, { useEffect, useState } from 'react';
import '../Profile.css';
import Glasspic from '../Glasspic.jpg';
import ProfilePic from '../ProfilePic.png';
import 'bootstrap/dist/css/bootstrap.css'
import TabProfile from '../TabProfile';
import { Link } from 'react-router-dom';
import LeftBlock from './LeftBlock';
import Profileservice from '../ProfileService'
import PetBlock from './PetBlock';
import profileservice from '../ProfileService';
import {Userinfo} from '../Interface';



const Apps=() => {
  const[obj,setObj] = useState<any[]>([]);

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

  const petPro = obj.map(item=>(<span><PetBlock message = {item.PetName} img={item.petPicUrl} link={item._id}/></span>))

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
              {petPro}
            </p>
          </div>

        </div>
    </div>
    

  )

}


export default Apps;
