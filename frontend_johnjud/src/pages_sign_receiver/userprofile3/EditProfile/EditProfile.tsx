import React, { useEffect, useState } from 'react';
import '../Profile.css';
import TabProfile from '../TabProfile';
import Glasspic from '../Glasspic.jpg';
import { Link } from 'react-router-dom';
import LeftBlockEdit from './EditIformation';
import DescriptionEdit from './EditDescription';
import EditPassword from './EditPassword';
import EditEmail from './EditEmail';
import EditPhone from './EditPhone';
import Navigation3 from '../../../Navigation/Navigation'
import Editimage from './EditImageProfile'
import profileservice from '../ProfileService';
import { Userinfo } from '../Interface';

const EditProfile=(props:any) =>{

    const userId = props.match.params.userId
    const [Obj,setObj] = useState<Userinfo>();

    const fetchProfileInfo=() =>{
        return(
          profileservice.fetchProfileInfo(userId)
          .then(res => {
            setObj(res)
          })
        )
      }
      const ProfilePic = Obj?.ImgURL;
      console.log(ProfilePic)
      useEffect(()=>{
        fetchProfileInfo()
      },[])

    return(
        <div>
            {localStorage.UserId==userId && 
            <div>
            <Navigation3/>
            <div className = 'Profile'>
            <img id='profilePic' src={ProfilePic}/>
            <div className = "editimageProfile" style={{height:20}}>
             <Editimage/>
            </div>
            
            
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
                    <Link to={`/receiver/userprofile/${userId}`}>  
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