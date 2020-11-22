import React, { useEffect, useState } from 'react';
import '../Profile.css';
import ProfileService from '../ProfileService';
import profileservice from '../ProfileService';
import {Userinfo} from '../Interface';

const DescriptionEdit=(prop:any) =>{
    const[obj,setObj] = useState<Userinfo>();

    const fetchProfileInfo=() =>{
      return(
        profileservice.fetchProfileInfo(prop.userId)
        .then(res => {
          setObj(res)
        })
      )
    }

    useEffect(()=>{
      fetchProfileInfo()
    },[])

    const description = obj?.Description;
    const [newDescription, setNewDescription] = useState<string|undefined>();

    const update=() =>{
        const newdescription = {
            Description:newDescription,
        }
        ProfileService.updatedescription(newdescription,prop.userId);
        alert("Update Description Success!");
    }
    const initNewdescription = () =>{
      setNewDescription(description)
    }
    useEffect(() => {
      if(description != null){
        setNewDescription(description)
      }
    },[description])

    return(
        <div className='DescriptionEditBlock'>
            <br/>
            <h4 className='h4'> Description</h4>
            <textarea id='DescriptionInput' value={newDescription} onChange={(e) => {setNewDescription(e.target.value);}}>
            </textarea>
            <button id='DescriptionButton' onClick={update}>
                Update
            </button>
        </div>
    )
}

export default DescriptionEdit;