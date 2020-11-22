import React, { useState } from 'react';
import '../Profile.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
import profileservice from '../ProfileService'
import {Userinfo} from '../Interface';
import { Row } from 'reactstrap';

const Leftblock=(prop:any) =>{
  const[obj,setObj] = useState<Userinfo>();
  // console.log("heeeeelllooooo")
  // console.log(prop.userId)
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

    const username = obj?.UserName;
    const firstname = obj?.FirstName;
    const lastname = obj?.LastName;
    const birthday = obj?.Birthday;
    const gender = obj?.Gender;
    const address = obj?.Address;
    const phone = obj?.PhoneNo;
    const email = obj?.Email;
 //ฟฟ
    return(
      <div className='leftblock'>
      <br/><br/><br/>
      <div className='profilename'>
      <h1 style={{fontSize:20,marginLeft:35}}><u>{username}</u></h1>
      <br/>
      <div className='Info'><h5>
      <p className='bold'>FirstName:<span className='notbold'> &nbsp;{firstname}</span></p>
      <p className='bold'>LastName:<span className='notbold'> &nbsp;{lastname}</span></p>
      <p className='bold'>Birthday:<span className='notbold'> &nbsp;{birthday}</span></p>
      <p className='bold'>Gender:<span className='notbold'> &nbsp;{gender}</span></p>
      <p className='bold'>Address:<span className='notbold'> &nbsp;{address}</span></p>
      <p className='bold'>Phone:<span className='notbold'> &nbsp;{phone}</span></p>
      <p className='bold'>Email:<span className='notbold'> &nbsp;{email}</span></p>
      </h5>
      </div>
      </div>
  </div>
    )
}
export default Leftblock