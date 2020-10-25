import React, { useState } from 'react';
import '../Profile.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
import profileservice from '../ProfileService'
import {Userinfo} from '../Interface';

const Leftblock=() =>{
  const[obj,setObj] = useState<Userinfo>();

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

    const username = obj?.UserName;
    const firstname = obj?.FirstName;
    const lastname = obj?.LastName;
    const birthday = obj?.Birthday;
    const gender = obj?.Gender;
    const address = obj?.Address;
    const phone = obj?.PhoneNO;
    const facebook = obj?.Facebook;
    const email = obj?.Email;
 
    return(
        <div className='leftblock'>
            <br/><br/><br/>
            <div className='profilename'>
            <h1><u>{username}</u></h1>
            </div>
            <br/>
            <p className='bold'>FirstName:<span className='notbold'> &nbsp;{firstname}</span></p>
            <p className='bold'>LastName:<span className='notbold'> &nbsp;{lastname}</span></p>
            <p className='bold'>Birthday:<span className='notbold'> &nbsp;{birthday}</span></p>
            <p className='bold'>Gender:<span className='notbold'> &nbsp;{gender}</span></p>
            <p className='bold'>Address:<span className='notbold'> &nbsp;{address}</span></p>
            <p className='bold'>Facrbook:<span className='notbold'> &nbsp;{facebook}</span></p>
            <p className='bold'>Phone:<span className='notbold'> &nbsp;{phone}</span></p>
            <p className='bold'>Email:<span className='notbold'> &nbsp;{email}</span></p>
        </div>
    )
}
export default Leftblock