import {chat} from './Interface';
import {chatroom} from './Interface';
/*
async function fetchProfileInfo(petid:string): Promise<chat>{
    console.log(petid)
    const res = await fetch(`http://localhost:2000/chat/${petid}`);
    const name = await res.json();
    return name;}*/
async function fetchChat(): Promise<any[]>{
        const res = await fetch(`http://localhost:2000/chat/5f9c49d218ba923efcde60fd/getmessage`);
        const name = await res.json();
        return name;}

 async function fetchChatroom(): Promise<any[]>{
        const res = await fetch('http://localhost:2000/room/de675739-8579-4efe-8c05-9eaf9014551e/getAllRoom');
        const name = await res.json();
        return name;}
async function PostChat(chatinfo:chat): Promise<chat> {    
    const res = await fetch('http://localhost:2000/chat/fed11b16-b673-4640-a5ab-3a6a0dc5f857/5f9e7a9263ac965850d7bf15/addmessage',{
                method: 'POST',
                headers : {'Content-Type': 'application/json',
                //'Authorization' : `Bearer ${accesstoken}`
            },
                body: JSON.stringify(chatinfo),
            });
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
    PostChat
} 

