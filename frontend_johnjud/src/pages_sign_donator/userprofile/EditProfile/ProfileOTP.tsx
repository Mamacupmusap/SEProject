import React, { useEffect, useState } from 'react';
import { OTPinfo } from './Interface';
import profileservice from '../ProfileService';




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
    
    const submit=() =>{
        profileservice.updateOTP(otp,localStorage.Token)
        .then(a => {
          if(a){
            alert("Change Phone Success!")
            // history.push(`/donator/userprofile/${userId}/editprofile/changephone/OTP`)
          }
          else{
            alert("Error")
          }
        })
    }
    const resend=() =>{
      const resends = {
        id:ID,
        phoneNO:newPhone,
      }
      profileservice.resendOTP(resends)
    }
    return(
      <div>
        {userId == localStorage.UserId &&
        <div>
            OTP:
            <input id='InputProfileOTP'  value={otp} onChange={(e) => {setOTP(e.target.value);}}></input>
            <button onClick = {submit}>Submit</button>
            <button onClick = {resend}>Resend OTP</button>
        </div>}
      </div>

    )
}

export default ProfileOTP;