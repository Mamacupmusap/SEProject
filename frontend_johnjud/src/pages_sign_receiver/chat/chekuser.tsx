import { abort } from 'process';
import React,{ useEffect, useState } from 'react';
import profileservice from './ProfileService';
import notipicture from './noti.png';

const Checkuser = (prop:any) =>{

    const [a2,setA2] = useState<string>('')
    const [noti,setNoti] = useState<any>()
    
    const checknoti=()=>{
        // console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
        // console.log(prop.roomid)
        // console.log(prop.prop.localuse)
        profileservice.getOnenoti(prop.roomid,prop.localuser)
        .then(a=>{
        //   console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa')
          console.log(a)
          setNoti(a)
        })
     }



     useEffect(()=>{
        console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
        console.log(prop.roomid)
        console.log(prop.localuser)
         if((prop.localuser!==undefined) && prop.roomid!==undefined){
             checknoti()
         }
        },[prop.localuser])


    return(
        
        <div>
            {console.log('noti')}

            {console.log(noti)}

            {noti &&
                <div>
                {console.log('noti.notidate , noti.readAt')}
                {console.log(noti.NotiDate , noti.readAt)}
                {noti.NotiDate !== undefined && noti.readAt==undefined ?
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img className='notipic' src={notipicture}></img></div>
                :<div> </div>
                    
                }</div>
            }
        </div>
    )
}

export default Checkuser


