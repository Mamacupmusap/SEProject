import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Profile.css';
import ProfileService from '../ProfileService';
import profileservice from '../ProfileService';

const EditPassword=(prop:any)=>{
    const userId = prop.userId
    return(
        <div className='EditEmailBlock'>
            <h4 className='h4'><span>&nbsp;&nbsp;email</span>
            <Link to={`/donator/userprofile/${userId}/editprofile/changeemail`}>
            <button id ='EditEmailButton'>
                change email
            </button>
            </Link>
            </h4>
        </div>
    )
}

export default EditPassword;