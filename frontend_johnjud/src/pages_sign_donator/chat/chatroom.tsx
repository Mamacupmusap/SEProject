import React, { useState, useEffect } from "react";
//import io from "socket.io-cspanent";
import {chat} from './Interface';
import {chatroom} from './Interface';
import TextContainer from './components/TextContainer/TextContainer';
import Messages from './components/Messages/Messages';
import InfoBar from './components/InfoBar/InfoBar';
import Input from './components/Input/Input';
import Navigation3 from '../../Navigation/Navigation3';
import './chat.css';
import user1 from './components/Chat/img/user1.png';
import user2 from './components/Chat/img/user2.png';
import profileservice from './ProfileService';
/*
const socket<any>;
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }
*/
const Chat= () =>{
    //const[obj,setObj] = useState<chat>();
    
    const[obj,setObj] = useState<any[]>([]);
    /*const fetchChat=() =>{
      return(
        profileservice.fetchChat(props.id)
        .then(res => {
          setObj(res)
        })
      )
    }*/
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
    //const chatinfo2 = obj.map(item=>(<span><PetBlock message = {item.PetName} img={item.petPicUrl} spannk={item._id}/></span>))

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
              <h2 id="chat_userName">
                        {item.username1},{item.username2}
              </h2>
            </div>
            </span>
            ))}
          </div>
        </div>
        
      </div>
    </div>
    
  );
  }

export default Chat;
