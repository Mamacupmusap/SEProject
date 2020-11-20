import {chat} from './Interface';
import {chatroom} from './Interface';
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

export default {
    fetchChatroom,
} 

