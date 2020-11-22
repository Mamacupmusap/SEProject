import React, { useEffect, useState } from 'react';
import '../Profile.css';
//import ProfileService from '../ProfileService';
import profileservice from '../ProfileService';
import { Link, useHistory } from 'react-router-dom';
// import ProfilePic from '../ProfilePic.png';
import Glasspic from '../Glasspic.jpg';
import Navigation3 from '../../../Navigation/Navigation'
import {Userinfo} from '../Interface';

const ChangePassword=(props:any) => {
    const [Password, setPassword] = useState<string>('')
    const [ConfirmPassword, setConfirmPassword] = useState<string>('')
    const history = useHistory()
    const userId = props.match.params.userId;
    const[obj,setObj] = useState<Userinfo>();
    const submit=() =>{
        if(Password!=ConfirmPassword){
            alert("Those passwords didn't match. Try again.");
            return;
        }
        profileservice.updatePassword(Password,ConfirmPassword,localStorage.Token)
        .then( res=>{
            console.log(res)
            if(res){
                alert("Change Password Success!")
                history.push(`/receiver/userprofile/${userId}/editprofile`)
            }
            else{
                alert("Change Password Failed!")
            }
        })
        
    }
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
    return(
        <div>
            {localStorage.UserId == userId &&
            <div>
            <Navigation3/>
            <div className = 'ChangePage'>
            <Link to={`/donator/userprofile/${userId}`}>  
                <img className='profilePic' src={profileURL} alt={''}/>
            </Link>
            <img id='glasspic' src = {Glasspic} alt={''}/>
            <div className='BlockBehindProfilePic'>
                <div className='profilename'>
                <br/><br/>
                    <h1 ><u > {localStorage.getItem('UserName')} </u></h1>
                </div>
            </div>
            <div className='ChangeBlock'>
                <span id='ChangePassword'>New Password : </span>
                &nbsp;&nbsp;<input id='InputChangePassword' type="password" value={Password} onChange={(e) => {
                    setPassword(e.target.value);}}/>
                <br/><br/>
                <span id='ChangePassword'>Confirm Password : </span>
                &nbsp;&nbsp;<input id='InputChangePassword' type="password" value={ConfirmPassword} onChange={(e) =>
                    {setConfirmPassword(e.target.value);}}/>
                <button id='SubmitPasswordButton' onClick={submit}>Submit</button>
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
export default ChangePassword;