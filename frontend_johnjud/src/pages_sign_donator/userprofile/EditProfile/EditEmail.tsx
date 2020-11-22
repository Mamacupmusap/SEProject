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
    const Email = obj.Email;
    const userId = prop.userId

    return(
        <div className='EditEmailBlock'>
            <h4 className='h4'><span>&nbsp;&nbsp;Email</span>
                <Link to={`/donator/userprofile/${userId}/editprofile/changeemail`}>
                    <button id ='EditEmailButton'>
                        Change Email
                    </button>
                </Link>
                <p>Current Email : {Email}</p>
            </h4>
        </div>
    )
}

export default EditPassword;