import React, { useEffect, useState } from 'react';
import '../Profile.css';
import Glasspic from '../Glasspic.jpg';
import ProfilePic from '../ProfilePic.png';
import 'bootstrap/dist/css/bootstrap.css'
import TabProfile from '../TabProfile';
import { Link } from 'react-router-dom';
import LeftBlock from './LeftBlock';
import PetBlock from './PetBlock';
import profileservice from '../ProfileService';
import {Userinfo} from '../Interface';
import Navigation3 from '../../../Navigation/Navigation3'


export const Apps=(props:any) => {
  const[obj,setObj] = useState<any[]>([]);
  const userId = props.match.params.userId

  const fetchProfileInfo=() =>{
    return(
      profileservice.fetchdonation()
      .then(res => {
        setObj(res)
      })
    )
  }

  useEffect(()=>{
    fetchProfileInfo()
  },[])

  const petPro = obj.map(item=>(<span><PetBlock message = {item.PetName} img={item.petPicUrl} link={item._id} /></span>))

  return(   
    <div>
      <Navigation3/>
      <div className = 'Profile'>
        <Link to={`/donator/userprofile/${userId}`}>  
          <img id='profilePic' src={ProfilePic}></img>
        </Link>
        {userId == localStorage.UserId &&
        <Link to={`/donator/userprofile/${userId}/editprofile`}>
          <button className='EditProfile'>Edit Profile</button>
        </Link>}
        <img id='glasspic' src = {Glasspic}></img>
        <div className = 'block'>
        <LeftBlock userId ={userId}/>

          <div className = 'topblock'>
            <TabProfile userId ={userId}/>
          </div>
          <div className = 'bottomblock'>
            <header id='Description'>
            </header>
            <p id='para'>
              <div className='blockPetdonate' >
                {petPro}
              </div>
            </p>
          </div>

        </div>
    </div>
    </div>
    
    

  )

}


export default Apps;
