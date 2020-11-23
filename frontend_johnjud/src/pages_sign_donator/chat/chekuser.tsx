import { abort } from 'process';
import React,{ useEffect, useState } from 'react';
import profileservice from './ProfileService';
import notipicture from './noti.png';
import './chat.css'
const Checkuser = (prop:any) =>{

    const [a2,setA2] = useState<string>('')
    const [noti,setNoti] = useState<any>()
    
    const checknoti=()=>{

        profileservice.getOnenoti(prop.roomid,prop.localuser)
        .then(a=>{
          setNoti(a)
        })
     }



     useEffect(()=>{

         if((prop.localuser!==undefined) && prop.roomid!==undefined){
             checknoti()
         }
        },[prop.localuser])


    return(
        
        <div>


            {noti &&
                <div>

                {noti.NotiDate !== undefined && noti.readAt==undefined ?
                <div><img className='notipic' src={notipicture}></img></div>
                :<div> </div>
                    
                }</div>
            }
        </div>
    )
}

export default Checkuser


