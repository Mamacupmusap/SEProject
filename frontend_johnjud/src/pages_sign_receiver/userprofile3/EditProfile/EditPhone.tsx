import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Profile.css';
import ProfileService from '../ProfileService';
import profileservice from '../ProfileService';

const EditPassword=(prop:any)=>{
    const userId = prop.userId
    return(
        <div className='EditPhoneBlock'>
            <h4 className='h4'><span>&nbsp;&nbsp;Phone</span>
            <Link to={`/receiver/userprofile/${userId}/editprofile/changephone`}>
                <button id ='EditPhoneButton'>
                    Change Phone
                </button>
            </Link>
            </h4>
        </div>
    )
}

export default EditPassword;