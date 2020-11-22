import React, { useEffect, useState } from 'react';
import '../Profile.css';
import ProfileService from '../ProfileService';
import profileservice from '../ProfileService';
import { Link, useHistory } from 'react-router-dom';
import ProfilePic from '../ProfilePic.png';
import Glasspic from '../Glasspic.jpg';
import {Userinfo} from '../Interface';
import Navigation3 from '../../../Navigation/Navigation3'


const ChangePhone=(props:any) => {
    const[obj,setObj] = useState<Userinfo>();
    const history = useHistory();
    const userId = props.match.params.userId;
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

    const profileURL = obj?.ImgURL;
    const username = obj?.UserName;
    const [newPhone,setNewPhone] = useState<string>('');


    const update=() =>{
        
        ProfileService.updatephone(newPhone,localStorage.Token)
        .then(a => {
            if(a){
                // alert("please verify OTP")
                history.push(`/donator/userprofile/${userId}/editprofile/changephone/OTP`)
            }
            else{
                alert("Please try new phone no!")
            }
        })
        

    }
    
    return(
        <div>
        {localStorage.UserId == userId &&
            <div>
            
            <Navigation3/>
            <div className = 'ChangePage'>
            <Link to='/donator/userprofile'>  
                <img id='profilePic' src={profileURL}></img>
            </Link>
            <img id='glasspic' src = {Glasspic}></img>
            <div className='BlockBehindProfilePic'>
                <div className='profilename'>
                <br/><br/>
                    <h1><u> {username} </u></h1>
                </div>
            </div>
            <div className='ChangeBlock'>
                <span id='ChangePhone'>New Phone Number : </span>
                <input id='InputChangePhone'  value={newPhone} onChange={(e) => {setNewPhone(e.target.value);}}></input>
                <br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br/><br/>
                <button id='SubmitPhoneButton' onClick={update}>Submit</button>
            </div>

        </div>
        </div>}
        {localStorage.UserId!==userId && 
            <div>
                this is not for you!!!!!!!!!

            </div>
            }
        </div>

    )
}
export default ChangePhone;