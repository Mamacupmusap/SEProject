async function fetchAllPet(): Promise<any|null>{
    const res = await fetch('http://localhost:2000/petinfo/' + localStorage.UserId + '/homepage/receiver'); //แก้ตามออมแล้วรอ userid
    //const res = await fetch('http://localhost:2000/petinfo/homepage');
    return await res.json();
//ต้องการ รูป, idหมา, ชื่อหมา
}

export default {fetchAllPet};