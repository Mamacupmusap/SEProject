import React, { useEffect, useState } from 'react';
import { OTPinfo } from './Interface';
import profileservice from '../ProfileService';



const ProfileOTP=() =>{

    const[obj,setObj] = useState<OTPinfo>();

    const fetchProfileInfo=() =>{
      return(
        profileservice.fetchProfileInfo()
        .then(res => {
          setObj(res)
        })
      )
    }
  
    useEffect(()=>{
      fetchProfileInfo()
    },[])
    const ID = obj?.id;
    const newPhone = obj?.PhoneNo;
    const [otp,setOTP] = useState<string>('')
    
    const submit=() =>{
        const OTP = {
            id:ID,
            OTP:otp,
            phoneNO:newPhone,
        }
        profileservice.updatephone(OTP)
    }
    return(
        <div>
            OTP:
            <input id='InputProfileOTP'  value={otp} onChange={(e) => {setOTP(e.target.value);}}></input>
        </div>
    )
}

export default ProfileOTP;