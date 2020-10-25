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
    const [selectFile, setSelectedFiles] = useState(undefined);
    const uploadProfile=()=>{

    }
    return(
        <div className = 'Profile'>
            <img id='profilePic' src={ProfilePic}></img>

            <button onClick={uploadProfile}>Upload Profile</button>

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