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
import {Userinfo} from './Interface';


const Chat= (props:any) =>{
    const accessToken = localStorage.getItem('Token');
    const[obj,setObj] = useState<any[]>([]);
    const[obj1,setObj1] = useState<chatroom>();
    const[obj2,setObj2] = useState<Userinfo>();

    const [newChat, setnewChat] = useState<string>();
    const roomId = props.match.params.roomId;
    const UserId2 = props.match.params.userId2;
    const UserId = props.match.params.userId;
    
    console.log(UserId)
    console.log(UserId2)

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
    
    // async function fetchChat(roomId:string): Promise<chatroom>{
    //   const res1 = await fetch(`http://localhost:2000/room/${roomId}/getRoom`);
    //   const name1 = await res1.json();
    //   return name1;}
    //   const fetchchat=(roomId:any) =>{
    //     return(
    //       fetchChat(roomId)
    //       .then(res1 => {
    //         setObj1(res1)
    //       })
    //     )
    //   }

      const fetchuserinfo=() =>{
        return(
          profileservice.fetchProfileInfo(UserId2)
          .then(res1 => {
            console.log(res1)
            setObj2(res1)
          })
        )
      }
      useEffect(()=>{
        fetchuserinfo()
      },[])
      const user1=  obj1?.username1;
      const user2 = obj1?.username2;


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
  const check=(user1:string, user2:string)=>{
    if(user1 == localStorage.UserId)
    {
      return user2
    }
    else{
      return user1
    }
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
    console.log(obj2?.UserName)
  return (
    
    <div>
      {localStorage.UserId==UserId && 
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
              <a href={`http://localhost:3000/receiver/chat/${localStorage.UserId}/${check(item.userid1,item.userid2)}/${item.id}/`}>{item.username1},{item.username2}</a>
            </div>
            </span>
            ))}
          </div>
        </div>
        <div className="container_chat">
            <InfoBar username2={obj2?.UserName}/>
            <Message roomId={roomId}/>
            <form className="form">
              <textarea id='input' value={newChat} onChange={(e) => {setnewChat(e.target.value);}}/>
              <button className="sendButton" onClick={update}>Send</button>
            </form>
          </div>
        {/* <TextContainer users='hi'/> */}
      </div> 
    </div>
}
    </div>
    
    
  );
  }

export default Chat;
