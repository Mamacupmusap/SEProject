import React, { useEffect, useState } from 'react';
import '../Profile.css';
import ProfileService from '../ProfileService';
import profileservice from '../ProfileService';
import { Link } from 'react-router-dom';
import ProfilePic from '../ProfilePic.png';
import Glasspic from '../Glasspic.jpg';
import Navigation3 from '../../../Navigation/Navigation3'


const ChangePassword=(props:any) => {
    const [Password, setPassword] = useState<string>('')
    const [ConfirmPassword, setConfirmPassword] = useState<string>('')

    const userId = props.match.params.userId;
    const submit=() =>{
        return(
            profileservice.updatePassword(Password,ConfirmPassword,localStorage.Token)
        )
    }
    return(
        <div>
            {localStorage.UserId == userId &&
            <div>
            <Navigation3/>
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
                <span id='ChangePassword'>New Password*: </span>
                &nbsp;&nbsp;<input id='InputChangePassword' value={Password} onChange={(e) => {setPassword(e.target.value);}}></input>
                <br/><br/>
                <span id='ChangePassword'>confirm Password*: </span>
                &nbsp;&nbsp;<input id='InputChangePassword' value={ConfirmPassword} onChange={(e) => {setConfirmPassword(e.target.value);}}></input>
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