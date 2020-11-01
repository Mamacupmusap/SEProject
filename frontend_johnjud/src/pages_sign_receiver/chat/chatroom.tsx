import React, { useState, useEffect } from "react";
//import io from "socket.io-cspanent";
import {chat} from './Interface';
import {chatroom} from './Interface';
//import TextContainer from './components/TextContainer/TextContainer';
import Message from './components/Messages/Message';
import InfoBar from './components/InfoBar/InfoBar';
import Input from './components/Input/Input';
import Navigation3 from '../../Navigation/Navigation3';
import './chat.css';
import user1 from './components/Chat/img/user1.png';
import user2 from './components/Chat/img/user2.png';
import profileservice from './ProfileService';
import { attachProps } from "@ionic/react/dist/types/components/utils";

const Chat= (props:any) =>{
    const accessToken = localStorage.getItem('Token');
    const[obj,setObj] = useState<any[]>([]);
    const [newChat, setnewChat] = useState<string>();
    const roomId = props.match.params.roomId;
    
    const fetchChatroom=() =>{
      return(
        profileservice.fetchChatroom()
        .then(res => {
          setObj(res)
        }
        )
      )
    }
  useEffect(()=>{
    fetchChatroom()
  },[])
    const userid = localStorage.UserId;
    async function PostChat(chatinfo:chat): Promise<chat> {
    const res = await fetch(`http://localhost:2000/chat/${userid}/${roomId}/addmessage`,{
                  method: 'POST',
                  headers : {'Content-Type': 'application/json',
                  'Authorization' : `Bearer ${accessToken}`
              },
                  body: JSON.stringify(chatinfo),
              });
              const name = await res.json();
              return name;}
              const update=() =>{
                 const newchat = {
                 message:newChat,
            }
      PostChat(newchat);
  }
    
    /*const message=obj?.message;
    const picUser=obj?.picUser;
    const ownerName=obj?.ownerName;
    const createAt=obj?.createAt;
    const ownerId=obj?.ownerId;
    const roomId=obj?.roomId;
    const userid1=obj?.userid1;
    const userid2=obj?.userid2;
    const username1=obj?.username1;
    const username2=obj?.username2;*/
    console.log(roomId)
  return (
    <div>
      <Navigation3/>
      <div className="outerContainer">
        <div className="left_chat">
          <div className="head_left_chat">
            <h1 id="head_message">message</h1>
          </div>
          <div className="allPeople">
          {obj?.map(item=>(
            <span>
            <div className="chatPeople_group">
              <img src={user1} id="userPic" style={{width:30,height:30}}/>
              <a href={`http://localhost:3000/donator/chat/${item.id}/`}>{item.username1},{item.username2}</a>
            </div>
            </span>
            ))}
          </div>
        </div>
        <div className="container_chat">
            <InfoBar room="" />
            <Message roomId={roomId}/>
            <form className="form">
              <textarea id='input' value={newChat} onChange={(e) => {setnewChat(e.target.value);}}/>
              <button className="sendButton" onClick={update}>Send</button>
            </form>
          </div>
        {/* <TextContainer users='hi'/> */}
      </div> 
    </div>
    
  );
  }

export default Chat;
