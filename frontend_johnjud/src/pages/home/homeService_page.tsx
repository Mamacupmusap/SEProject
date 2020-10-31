async function fetchAllPet(): Promise<any[]>{
    //const res = await fetch('http://localhost:2000/bookmark');
    const res = await fetch('http://localhost:2000/petinfo/homepage'); //แก้ตามออมแล้ว
    return await res.json();
//ต้องการ รูป, idหมา, ชื่อหมา
}

export default {fetchAllPet};