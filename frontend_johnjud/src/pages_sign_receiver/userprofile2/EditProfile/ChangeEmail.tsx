import React, { useEffect, useState } from 'react';
import '../Profile.css';
import ProfileService from '../ProfileService';
import profileservice from '../ProfileService';
import { Link, useHistory } from 'react-router-dom';
import ProfilePic from '../ProfilePic.png';
import Glasspic from '../Glasspic.jpg';
import {Userinfo} from '../Interface';
import Navigation3 from '../../../Navigation/Navigation'

const ChangeEmail=(props:any) => {
    const[obj,setObj] = useState<Userinfo>();
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
    
    const email = obj?.Email;
    const [Password, setPassword] = useState<string>('')
    const [newEmail, setNewEmail] = useState<string>('');
    const history = useHistory();
    const update=() =>{
        ProfileService.updateemail(newEmail,localStorage.Token)
        .then(a=>{
            console.log(a)
            if(a){
                alert("Change Email Success!")
                history.push(`/donator/userprofile/${userId}/editprofile`)
            }
            else{
                alert("Error")
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
                <img id='profilePic' src={ProfilePic} alt={''}/>
            </Link>
            <img id='glasspic' src = {Glasspic}/>
            <div className='BlockBehindProfilePic'>
                <div className='profilename'>
                <br/><br/>
                    <h1><u> username </u></h1>
                </div>
            </div>
            <div className='ChangeBlock'>
                <span id='ChangeEmail'>New Email: </span>
                <input id='InputChangeEmail' value={newEmail} onChange={(e) => {setNewEmail(e.target.value);}}/>
                <br/><br/>
                <button id='SubmitEmailButton' onClick={update}>Submit</button>
            </div>
            </div>
            </div>
            }
            {localStorage.UserId!==userId && 
            <div>
                this is not for you!!!!!!!!!

            </div>
            }
        </div>
    )
}
export default ChangeEmail;