import React, { useEffect, useState } from 'react';
import '../Profile.css';
import ProfilePic from '../ProfilePic.png';
import TabProfile from '../TabProfile';
import Glasspic from '../Glasspic.jpg';
import { Link } from 'react-router-dom';
import LeftBlockEdit from './EditIformation';
import DescriptionEdit from './EditDescription';
import EditPassword from './EditPassword';
import EditEmail from './EditEmail';
import EditPhone from './EditPhone';

const EditProfile=() =>{
    return(
        <div className = 'Profile'>
            <Link to='/donator/userprofile/prodescribtion'>  
                <img id='profilePic' src={ProfilePic}></img>
            </Link>
            <img id='glasspic' src = {Glasspic}></img>
            <div className='block'>
               <LeftBlockEdit/>
                <div className='topblock'>
                    <TabProfile/>
                </div>
                <div>
                    <DescriptionEdit/>
                    <EditPassword/>
                    <EditEmail/>
                    <EditPhone/>
                    <Link to='/donator/userprofile/prodescribtion'>  
                        <button id='DoneButton'>Done</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default EditProfile;