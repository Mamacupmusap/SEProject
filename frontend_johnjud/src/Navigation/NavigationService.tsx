import {Petinfo} from './Interface';
async function fetchnotification(): Promise<any[]>{
    const res = await fetch('http://localhost:2000/notification');
    return await res.json();
}

async function fetchpetinfo(): Promise<any>{
    const res = await fetch('http://localhost:2000/petinfo/');
    return await res.json();
}
async function fetchNoti(): Promise<Petinfo>{
    const res = await fetch('http://localhost:2000/petinfo/');
    const name = await res.json();
    return name;
//ต้องการ รูป, idหมา, ชื่อหมา
}
async function fetchAllPet(): Promise<any[]>{
    //const res = await fetch('http://localhost:2000/bookmark');
    const res = await fetch('http://localhost:2000/petinfo/'); 
    return await res.json();
//ต้องการ รูป, idหมา, ชื่อหมา
}

export default {
    fetchnotification,
    fetchpetinfo,
    fetchNoti,
    fetchAllPet,
};