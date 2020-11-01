import React, { useState } from 'react';
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
import Navigation3 from '../../../Navigation/Navigation3'
import Editimage from './EditImageProfile'


const EditProfile=(props:any) =>{
    /*const [selectFile, setSelectedFiles] = useState(undefined);
    const uploadProfile=()=>{

    }*/
    const userId = props.match.params.userId

    return(
        <div>
            {localStorage.UserId==userId && 
            <div>
            <Navigation3/>
            <div className = 'Profile'>
            <img id='profilePic' src={ProfilePic} alt={''}/>
            <Editimage/>
            
            <img id='glasspic' src = {Glasspic} alt={''}/>
            <div className='block'>
               <LeftBlockEdit userId={userId}/>
                <div className='topblock'>
                    <TabProfile/>
                </div>
                <div>
                    <DescriptionEdit userId={userId}/>
                    <EditPassword userId={userId}/>
                    <EditEmail userId={userId}/>
                    <EditPhone userId={userId}/>
                    <Link to={`/donator/userprofile/${userId}`}>  
                        <button id='DoneButton'>Done</button>
                    </Link>
                </div>
            </div>
            </div>
            </div>}

            {localStorage.UserId!==userId && 
            <div>
                this is not for you!!!!!!!!!

            </div>
            }

        
        </div>
        
    )
}
export default EditProfile;