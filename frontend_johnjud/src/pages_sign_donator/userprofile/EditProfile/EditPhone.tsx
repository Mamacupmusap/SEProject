import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Profile.css';
import profileservice from '../ProfileService';
import {Userinfo} from '../Interface';

const EditPassword=(prop:any)=>{
    const[obj,setObj] = useState<Userinfo>({UserName: '',
      Email: '',
    });

    const fetchProfileInfo=() =>{
      return(
        profileservice.fetchProfileInfo(prop.userId)
        .then(res => {
          console.log(res);
          setObj(res)
          console.log(obj)
        })
      )
    }
    useEffect(()=>{
      fetchProfileInfo()
    },[])
    const Phone = obj.PhoneNo;
    const userId = prop.userId
    return(
        <div className='EditPhoneBlock'>
            <h4 className='h4'><span>&nbsp;&nbsp;Phone</span>
                <Link to={`/donator/userprofile/${userId}/editprofile/changephone`}>
                    <button id ='EditPhoneButton'>
                        Change Phone
                    </button>
                </Link>
                <p>Current Phone : {Phone}</p>
            </h4>
        </div>
    )
}

export default EditPassword;