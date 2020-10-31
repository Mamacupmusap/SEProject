import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Navigation3 from '../../../../Navigation/Navigation3';
import './Chat.css';
import user1 from './img/user1.png';
import user2 from './img/user2.png';

const ENDPOINT = 'https://project-chat-application.herokuapp.com/';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //const { name, room } = queryString.parse(location.search);

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

  return (
    <div>
      <Navigation3/>
      <div className="outerContainer">
        <div className="left_chat">
          <div className="head_left_chat">
            <h5 id="head_message">message</h5>
          </div>
          <div className="allPeople">
            <div className="chatPeople_group">
              <img src={user1} id="userPic" style={{width:30,height:30}}/>
              <h5 id="chat_userName">John Bush</h5>
            </div>
            <div className="chatPeople_group">
              <img src={user2} id="userPic" style={{width:30,height:30}}/>
              <h5 id="chat_userName">Jodi Clark</h5>
            </div>
          </div>
        </div>
        <div className="container_chat">
            <InfoBar room={room} />
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
        <TextContainer users={users}/>
      </div>
    </div>
  );
}

export default Chat;
