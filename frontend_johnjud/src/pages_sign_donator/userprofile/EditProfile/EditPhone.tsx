import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Profile.css';
import ProfileService from '../ProfileService';
import profileservice from '../ProfileService';

const EditPassword=()=>{
    return(
        <div className='EditPhoneBlock'>
            <h4 className='h4'><span>&nbsp;&nbsp;phone</span>
            <Link to='/donator/userprofile/editprofile/changephone'>
                <button id ='EditPhoneButton'>
                    change phone
                </button>
            </Link>
            </h4>
        </div>
    )
}

export default EditPassword;