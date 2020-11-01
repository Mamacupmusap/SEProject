import React, { useEffect, useState } from 'react';
import { OTPinfo } from './Interface';
import profileservice from '../ProfileService';
import { useHistory } from 'react-router-dom';




const ProfileOTP=(props:any) =>{

    const[obj,setObj] = useState<OTPinfo>();
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
    const ID = obj?.id;
    const newPhone = localStorage.newPhone
    const [otp,setOTP] = useState<string>('')
    const history = useHistory()
    
    const submit=() =>{
        profileservice.updateOTP(otp,localStorage.Token)
        .then(a => {
          if(a){
            alert("Change Phone Success!")
            history.push(`/donator/userprofile/${userId}/editprofile`)
          }
          else{
            alert("Error")
          }
        })
    }

    return(
      <div>
        {userId == localStorage.UserId &&
        <div>
            OTP:
            <input id='InputProfileOTP'  value={otp} onChange={(e) => {setOTP(e.target.value);}}></input>
            <button onClick = {submit}>Submit</button>
        </div>}
      </div>
    )
}

export default ProfileOTP;