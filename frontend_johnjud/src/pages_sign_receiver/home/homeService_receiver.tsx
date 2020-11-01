async function fetchAllPet(): Promise<any|null>{
    const res = await fetch('http://localhost:2000/petinfo/' + localStorage.UserId + '/homepage/receiver'); //แก้ตามออมแล้วรอ userid
    //const res = await fetch('http://localhost:2000/petinfo/homepage');
    return await res.json();
//ต้องการ รูป, idหมา, ชื่อหมา
}

async function fetchFillterCat(): Promise<any[]>{
    //const res = await fetch('http://localhost:2000/bookmark');
    const res = await fetch('http://localhost:2000/filter/typecat/'); //แก้ตามออมแล้ว
    return await res.json();
//ต้องการ รูป, idหมา, ชื่อหมา
}
async function fetchFillterDog(): Promise<any[]>{
    //const res = await fetch('http://localhost:2000/bookmark');
    const res = await fetch('http://localhost:2000/filter/typedog/'); //แก้ตามออมแล้ว
    return await res.json();
//ต้องการ รูป, idหมา, ชื่อหมา
}
async function fetchFillterOther(): Promise<any[]>{
    //const res = await fetch('http://localhost:2000/bookmark');
    const res = await fetch('http://localhost:2000/filter/other/'); //แก้ตามออมแล้ว
    return await res.json();
//ต้องการ รูป, idหมา, ชื่อหมา
}

export default {
    fetchAllPet,
    fetchFillterCat,
    fetchFillterDog,
    fetchFillterOther,
};