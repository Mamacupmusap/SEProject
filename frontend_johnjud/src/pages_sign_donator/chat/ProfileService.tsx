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
async function sendnoti2(a:any,userId:string|undefined, roomid:string): Promise<any|null> {
    // console.log('userId')
    // console.log(userId)
    const res = await fetch(`http://localhost:2000/chat/${userId}/${roomid}/updatereaddate`,{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(a),
    });
    const ress = await res.json();
    return ress
}
async function getOnenoti(roomid:string, userId2:string): Promise<any>{

    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    console.log(roomid)
    console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
    console.log(userId2)
    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')

    const res = await fetch(`http://localhost:2000/chat/${userId2}/${roomid}/getmynoti`);
    const names = await res.json();
    console.log("nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    console.log(names)
    return names;
}
async function sendnoti(a:any,userId:string|undefined, roomid:string): Promise<any|null> {
    // console.log('userId')
    // console.log(userId)
    const res = await fetch(`http://localhost:2000/chat/${userId}/${roomid}/updatenullnoti`,{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(a),
    });
    const ress = await res.json();
    return ress
}
export default {
    fetchChatroom,
    fetchProfileInfo,
    sendnoti2,
    getOnenoti,
    sendnoti,
} 

//