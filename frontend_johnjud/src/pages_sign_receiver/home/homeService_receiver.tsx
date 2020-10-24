async function fetchAllPet(): Promise<any[]>{
    // fetch all pet except your own pet
    //const res = await fetch('http://localhost:2000/bookmark');
    const res = await fetch('http://localhost:2000/petinfo');
    return await res.json();
//ต้องการ รูป, idหมา, ชื่อหมา
}

export default {fetchAllPet};