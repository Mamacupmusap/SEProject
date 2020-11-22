import {chat} from './Interface';
import {chatroom} from './Interface';
import {Userinfo} from './Interface';

/*
async function fetchProfileInfo(petid:string): Promise<chat>{
    console.log(petid)
    const res = await fetch(`http://localhost:2000/chat/${petid}`);
    const name = await res.json();
    return name;}*/

 async function fetchChatroom(): Promise<any[]>{
        const userid = localStorage.UserId;
        const res = await fetch(`http://localhost:2000/room/${userid}/getAllRoom`);
        const name = await res.json();
        return name;}
async function fetchProfileInfo(userId:string): Promise<Userinfo>{
    const res = await fetch(`http://localhost:2000/User/${userId}`);
    const name = await res.json();
    console.log(name)
    return name;
}
async function sendnoti(a:any,userId:string|undefined, roomid:string): Promise<any|null> {
    const res = await fetch(`http://localhost:2000/chat/${userId}/${roomid}/updatenullnoti`,{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(a),
    });
    const ress = await res.json();
    return ress
}
async function getnoti(userId:string): Promise<any[]>{
    const res = await fetch(`http://localhost:2000/chat/${userId}/getAllnoti`);
    const name = await res.json();
    console.log(name)
    return name;
}

async function getOnenoti(roomid:string,user2:string|undefined): Promise<Userinfo>{
    const res = await fetch(`http://localhost:2000/chat/${user2}/${roomid}/getmynoti`);
    const name = await res.json();
    return name;
}
export default {
    fetchChatroom,
    fetchProfileInfo,
    sendnoti,
    getnoti,
    getOnenoti,
} 

//