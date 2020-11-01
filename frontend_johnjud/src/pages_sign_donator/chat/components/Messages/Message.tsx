import React,{ useState, useEffect } from 'react';
import profileservice from '../../ProfileService';
import {chat} from '../../Interface';
import {chatroom} from '../../Interface';
import Message from './Message/Message';
import user1 from '../Chat/img/user1.png';
import userDon from '../Chat/img/userDon.png';
import './Messages.css';

const Messages = (props:any) => {
  const[obj,setObj] = useState<any[]>([]);
  const roomId = props.roomId;
  async function fetchChat(roomId:string): Promise<any[]>{
    const res = await fetch(`http://localhost:2000/chat/${roomId}/getmessage`);
    const name = await res.json();
    console.log(roomId);
    return name;}
  const fetchchat=() =>{
    return(
      fetchChat(roomId)
      .then(res => {
        setObj(res)
      }
      )
    )
  }
  
  useEffect(()=>{
    fetchchat()
  },[])

//   const[obj,setObj] = useState<any[]>([]);
//   const fetchChat=() =>{
//     return(
//       profileservice.fetchChat()
//       .then(res => {
//       setObj(res)
//       } 
//       )
//     )
//     }
// )

// useEffect(()=>{
//   fetchChat()
// },[])

return(
  <div className="allMss">
   {obj?.map(item=>(
    <div className="chatGroup">
      <img src={item.picUser} id="userImg" style={{width:30,height:30}}/>
       <div className="chatBubble"> 
            <div className="chatPeople_group">
              <h2 id="messageText">
                      {item.message}
              </h2>
            </div>
        </div>
        </div>
  ))}
  </div>
);
      }
export default Messages;

{/* <h3 id="messageText">โยดาน่ารัก{messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}</h3> */}
