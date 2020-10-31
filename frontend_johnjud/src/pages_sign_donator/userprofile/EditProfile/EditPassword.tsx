import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Profile.css';
import ProfileService from '../ProfileService';
import profileservice from '../ProfileService';

const EditPassword=(prop:any)=>{
    const userId = prop.userId
    return(
        <div className='EditPasswordBlock'>
            <h4 className='h4'><span>&nbsp;&nbsp;password</span>
            <Link to={`/donator/userprofile/${userId}/editprofile/changepassword`}>
                <button id ='EditPasswordButton'>
                    change password
                </button>
            </Link>

            </h4>
        </div>
    )
}

export default EditPassword;