import React, { useEffect, useState } from 'react';
import { OTPinfo } from './Interface';
import profileservice from '../ProfileService';



const ProfileOTP=(prop:any) =>{

    const[obj,setObj] = useState<OTPinfo>();

    const fetchProfileInfo=() =>{
      return(
        profileservice.fetchProfileInfo(prop.userId)
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
        const OTP = {
            id:ID,
            OTP:otp,
            phoneNO:newPhone,
        }
        profileservice.updateOTP(OTP)
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
            OTP:
            <input id='InputProfileOTP'  value={otp} onChange={(e) => {setOTP(e.target.value);}}></input>
            <button onClick = {submit}>Submit</button>
            <button onClick = {resend}>Resend OTP</button>
        </div>
    )
}

export default ProfileOTP;