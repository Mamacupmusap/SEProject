import React from 'react';
import Message from './Message/Message';
import user1 from '../Chat/img/user1.png';
import userDon from '../Chat/img/userDon.png';
import './Messages.css';

const Messages = ({ messages, name }) => (
  <div className="allMss">
    <div className="chatGroup">
      <img src={user1} id="userImg" style={{width:30,height:30}}/>
      <div className="chatBubble">
        <h3 id="messageText">โยดาน่ารัก{messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}</h3>
      </div>
    </div>
    <div className="chatGroup">
      <img src={userDon} id="userImg" style={{width:30,height:30}}/>
      <div className="chatBubble">
        <h3 id="messageText">จิงแก{messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}</h3>
      </div>
    </div>
  </div>
);

export default Messages;