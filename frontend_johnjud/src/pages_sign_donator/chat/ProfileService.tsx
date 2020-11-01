import {chat} from './Interface';
import {chatroom} from './Interface';
/*
async function fetchProfileInfo(petid:string): Promise<chat>{
    console.log(petid)
    const res = await fetch(`http://localhost:2000/chat/${petid}`);
    const name = await res.json();
    return name;}*/
async function fetchChat(roomid:string): Promise<chat>{
        const res = await fetch(`http://localhost:2000/${roomid}/getmessage`);
        const name = await res.json();
        return name;}
async function fetchChatroom(): Promise<any[]>{
        const res = await fetch('http://localhost:2000/room/de675739-8579-4efe-8c05-9eaf9014551e/getAllRoom');
        const name = await res.json();
        return name;}

async function updateinfo(newInfoProfile:chat): Promise<any|null> {
    const res = await fetch('http://localhost:3000/chat/5f817068327a81094416d049',{
        method: 'PATCH',//PUT POST
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newInfoProfile),
    });
}
async function updatedescription(newDescription:chat): Promise<any|null> {
    const res = await fetch('http://localhost:3000/chat/5f817068327a81094416d049',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newDescription),
    });
}
async function updateemail(newEmail:chat): Promise<any|null> {
    const res = await fetch('http://localhost:3000/chat/5f817068327a81094416d049',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newEmail),
    });
}

export default {
    fetchChat,
    fetchChatroom,
    updateinfo,
    updatedescription,
    updateemail,
} 

