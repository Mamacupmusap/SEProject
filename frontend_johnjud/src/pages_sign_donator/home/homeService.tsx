async function fetchPetRegister(): Promise<any[]>{
    const res = await fetch('http://localhost:2000/petinfo/' + localStorage.UserId + '/homepage/donator'); //แก้ตามออมแล้วรอ userid
    //const res = await fetch('http://localhost:2000/petinfo');
    return await res.json();
//ต้องการ รูป, idหมา, ชื่อหมา
}

export default {fetchPetRegister};