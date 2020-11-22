import React, { useEffect, useState } from 'react';
import '../Profile.css';
import Glasspic from '../Glasspic.jpg';
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
  const [Objs,setObjs] = useState<Userinfo>();
  const userId = props.match.params.userId

  const fetchProfileInfo=() =>{
    return(
      profileservice.fetchdonation(userId)
      .then(res => {
        setObj(res)
      })
    )
  }
  const fetchProfileInfos=() =>{
    return(
      profileservice.fetchProfileInfo(userId)
      .then(res => {
        setObjs(res)
      })
    )
  }

  useEffect(()=>{
    fetchProfileInfo()
    fetchProfileInfos()
  },[])

  const petPro = obj.map(item=>(<span><PetBlock message = {item.PetName} img={item.PetPicURL} link={item.petid}/></span>))
  const ProfilePic = Objs?.ImgURL

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
            <br></br>
            <h4 className='h4'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pet Donation</h4>
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
