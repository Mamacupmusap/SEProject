import React, { useState, useEffect } from "react";
//import io from "socket.io-cspanent";
import {chat} from './Interface';
import {chatroom} from './Interface';
//import TextContainer from './components/TextContainer/TextContainer';
import Message from './components/Messages/Message';
import InfoBar from './components/InfoBar/InfoBar';
import Input from './components/Input/Input';
import Navigation from '../../Navigation/Navigation3';
import './chat.css';
import user1 from './components/Chat/img/user1.png';
import user2 from './components/Chat/img/user2.png';
import profileservice from './ProfileService';
import { attachProps } from "@ionic/react/dist/types/components/utils";
import {Userinfo} from './Interface';
import Checkuser from './chekuser';
import { Link, useHistory } from 'react-router-dom';



const Chat= (props:any) =>{
    const accessToken = localStorage.getItem('Token');
    const[obj,setObj] = useState<any[]>([]);
    const[obj1,setObj1] = useState<chatroom>();
    const[obj2,setObj2] = useState<Userinfo>();
    const[obj3,setObj3] = useState<Userinfo>();

    const [newChat, setnewChat] = useState<string>();
    const roomId = props.match.params.roomId;
    const UserId2 = props.match.params.userId2;
    const UserId = props.match.params.userId;

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
            setObj2(res1)
          })
        )
      }
      useEffect(()=>{
        fetchuserinfo()
      },[])
     const fetchuserinfo2=() =>{
        return(
           profileservice.fetchProfileInfo(userid)
           .then(res2 => {
             setObj3(res2)
           })
         )
       }
       useEffect(()=>{
       fetchuserinfo2()
       },[])
       const user=obj3?.UserName
    async function PostChat(chatinfo:chat): Promise<chat> {
    const res = await fetch(`http://localhost:2000/chat/${userid}/${roomId}/addmessage`,{
                  method: 'POST',
                  headers : {'Content-Type': 'application/json',
                  'Authorization' : `Bearer ${accessToken}`
              },
                  body: JSON.stringify(chatinfo),
              });
              const name = await res.json();
              return name;
            }
    const newnoti=()=>{
      const a={
        User:UserId2,
        roomid:roomId
      }
      profileservice.sendnoti(a,UserId2,roomId)
    }        
      
    
    const update=() =>{
      const newchat = {
        message:newChat,
        }
      PostChat(newchat);
      newnoti()
  }
  
  const check=(user1:string, user2:string)=>{
    if(user1 == localStorage.UserId)
    {
      return user2
    }
    else if(user2 == localStorage.UserId){
      return user1
    }
  }
  const check2=(user1:string, user2:string)=>{
    if(user1 == user)
    {
      return user2
    }
    else if(user2 == user){
      return user1
    }
  }
 
  const [temp,setTemp] = useState<any>()

  
  const nullcheck=(value:string|undefined)=>{
    if (value != null){
        return update;
    }
  }
  const history = useHistory()

  const readmessage=()=>{
    const a={
      User:UserId,
      roomid:roomId
    }
    profileservice.sendnoti2(a,UserId,roomId)
    // history.push(`http://localhost:3000/receiver/chat/${localStorage.UserId}/${check(userid1,userid2)}/${id}/`)
    
  }
  
  const [finduser,setFinduser] = useState<string>()
  return (
    <div>
      {localStorage.UserId==UserId && 
      <div>
      <Navigation/>
      <div className="outerContainer">
        <div className="left_chat">
          <div className="head_left_chat">
            <h1 id="head_message">message</h1>
          </div>
          <div className="allPeople">
          {obj?.map(item=>(
            <span>
            <div className="chatPeople_group">

              
              <a onClick={readmessage} href={`http://localhost:3000/donator/chat/${localStorage.UserId}/${check(item.userid1,item.userid2)}/${item.id}/` } id="pplLeftDon">{check2(item.username1,item.username2)} </a>
    

              <Checkuser user1={item.userid1} uesr2={item.userid2} roomid ={item.id} localuser={localStorage.UserId}/>
            </div>
            </span>
            ))}
          </div>
        </div>
        <div className="container_chat">
            <InfoBar username2={obj2?.UserName}/>
            
              {UserId2 !== "user2" &&
              <div>
            <Message roomId={roomId}/>
                </div>}
            
            <form className="form">
              <textarea id='input' value={newChat} onChange={(e) => {setnewChat(e.target.value);}} style={{width:"100%"}}/>
              {UserId2 !== "user2" &&
              <div>
              <button className="sendButton" onClick={nullcheck(newChat)}>Send</button>
              </div>}
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
