
async function fetchAllPet(): Promise<any|null>{
    //const res = await fetch('http://localhost:2000/bookmark');
    const res = await fetch('http://localhost:2000/petinfo/'); 
    return await res.json();
//ต้องการ รูป, idหมา, ชื่อหมา
}

export default {

    fetchAllPet,
};