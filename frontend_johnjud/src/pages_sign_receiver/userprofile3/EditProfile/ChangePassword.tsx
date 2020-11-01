import React, { useState } from 'react';
import '../Profile.css';
//import ProfileService from '../ProfileService';
import profileservice from '../ProfileService';
import { Link, useHistory } from 'react-router-dom';
import ProfilePic from '../ProfilePic.png';
import Glasspic from '../Glasspic.jpg';
import Navigation3 from '../../../Navigation/Navigation'


const ChangePassword=(props:any) => {
    const [Password, setPassword] = useState<string>('')
    const [ConfirmPassword, setConfirmPassword] = useState<string>('')
    const history = useHistory()
    const userId = props.match.params.userId;
    const submit=() =>{
        profileservice.updatePassword(Password,ConfirmPassword,localStorage.Token)
        .then( res=>{
            console.log(res)
            if(res){
                alert("chagne password success!")
                history.push(`/receiver/userprofile/${userId}/editprofile`)
            }
            else{
                alert("error please try again")
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
            <img id='glasspic' src = {Glasspic} alt={''}/>
            <div className='BlockBehindProfilePic'>
                <div className='profilename'>
                <br/><br/>
                    <h1><u> username </u></h1>
                </div>
            </div>
            <div className='ChangeBlock'>
                <span id='ChangePassword'>New Password*: </span>
                &nbsp;&nbsp;<input id='InputChangePassword' value={Password} onChange={(e) => {
                    setPassword(e.target.value);}}/>
                <br/><br/>
                <span id='ChangePassword'>confirm Password*: </span>
                &nbsp;&nbsp;<input id='InputChangePassword' value={ConfirmPassword} onChange={(e) =>
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