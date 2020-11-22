import { abort } from 'process';
import React,{ useEffect, useState } from 'react';
import profileservice from './ProfileService';


const Checkuser = (prop:any) =>{
    const a=()=>{
        if(prop.user1 == prop.localuser)
        {
          setA2(prop.user2)
        }
        else{
          setA2(prop.user1)
        }
    }
    const [a2,setA2] = useState<string>('')
    const [noti,setNoti] = useState<any>()
    
    const checknoti=()=>{
        // console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
        // console.log(a2)
        console.log(prop.roomid)
        profileservice.getOnenoti(prop.roomid,a2)
        .then(a=>{
          console.log(a)
          setNoti(a)
        })
     }
     const aa=()=>{
        profileservice.getOnenoti(prop.roomid,'554e96f1-c69f-446e-b36a-f6f4d8fc7179')
     }
     useEffect(()=>{
        a()
       },[])
     useEffect(()=>{
         if((a2==prop.user2 || a2 == prop.user1) && prop.roomid!==undefined){
             checknoti()
         }
        },[a2])

    // const shownoti=() =>{
    //     console.log('ssssssssssssssssssssss')
    //     console.log(noti)

        
    //     if(noti.roomid !== undefined && noti.readAt==undefined){
    //         return <div>test</div>
    //       }
    //     else{
    //         return 
    //       }
    // }
    // console.log('annnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
    // console.log(noti)
    return(
        
        <div>
            {noti &&
                <div>
                {console.log('noti.notidate , noti.readAt')}
                {console.log(noti.NotiDate , noti.readAt)}
                {noti.NotiDate !== undefined && noti.readAt==undefined ?
                <div> test </div>
                :<div> </div>
                    
                }</div>
            }
        </div>
    )
}

export default Checkuser


