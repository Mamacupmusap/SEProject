import {Petinfo} from './Interface';
import React, {useState}  from 'react';

/*async function Addpet(newInfoProfile:Petinfo): Promise<any|null> {
        fetch("http://localhost:3000/petinfo/",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPetinfo)
        })
        .then(res => res.json())
        .then(Petinfo => {
            newPetinfo(Petinfo);
        })
        const response = await fetch('http://localhost:3000/petinfo/5f817194327a81094416d04b', requestOptions);
        const data = await response.json();
        return data;*/


/*useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
}
fetch(‘https://jsonplaceholder.typicode.com/todos, {
method: ‘POST’,
body: JSON.stringify({
userId: 1,
title: “clean room”,
completed: false
}),
headers: {
“Content-type”: “application/json; charset=UTF-8”
})}
.then(response => response.json())
.then(json => console.log(json))
 will return
{
“userId”: 1,
“title”: “clean room”,
“completed”: false,
“id”: 201
}
*/
async function fetchProfileInfo(petid:string): Promise<Petinfo>{
    
    const res = await fetch(`http://localhost:2000/petinfo/${petid}`);
    const name = await res.json();
    return name;
}
async function fetchProfileInfo2(): Promise<any[]>{
    const res = await fetch('http://localhost:2000/petinfo/three/findpet/petadoption');
    const name = await res.json();
    return name;
}
async function fetchregister(): Promise<any[]>{
    const res = await fetch('http://localhost:2000/petinfo/three/findpet/petregister');
    const name = await res.json();
    return name;
}
async function fetchdonation(): Promise<any[]>{
    const res = await fetch('http://localhost:2000/petinfo/three/findpet/petdonation');
    const name = await res.json();
    return name;
}


async function updateinfo(newInfoProfile:Petinfo): Promise<any|null> {
    const res = await fetch('http://localhost:3000/petinfo/',{
        method: 'PATCH',//PUT POST
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newInfoProfile),
    });
    const Updateinfo:Petinfo = await res.json();
    
    if (Updateinfo.PetName !== undefined){
        return alert("Update Information Success")
    }
    else{
        return alert("Please fill all information except facebook")
    }
}
async function updatedescription(newDescription:Petinfo): Promise<any|null> {
    const res = await fetch('http://localhost:2000/petinfo/three/findpet/setting/description',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newDescription),
    });
}
async function updateemail(newEmail:Petinfo): Promise<any|null> {
    const res = await fetch('http://localhost:2000/petinfo/three/findpet',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newEmail),
    });
}
async function updatephone(newPhone:Petinfo): Promise<any|null> {
    const res = await fetch('http://localhost:2000/petinfo/three/findpet',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newPhone),
    });
}

async function DeleteInfo(a: any,useridz: string | null,petidz: string | null,token: string): Promise<any|null> {
    const res = await fetch(`http://localhost:2000/petinfo/${useridz}/${petidz}/delete`,{
        method: 'PATCH',
        headers : {'Authorization': `Bearer ${token}`},
        body: JSON.stringify(a),
    });
    const ress = await res.json();
    
}


export default {
    fetchProfileInfo,
    fetchProfileInfo2,
    fetchregister,
    fetchdonation,
    updateinfo,
    updatedescription,
    updateemail,
    updatephone,
    DeleteInfo,
}

