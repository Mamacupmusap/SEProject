async function fetchbookmark(): Promise<any[]>{
    const res = await fetch(`http://localhost:2000/bookmark/${localStorage.getItem('UserId')}`);
    //const res = await fetch(`http://localhost:2000/bookmark/ujn`);
    //const res = await fetch(`http://localhost:2000/bookmark`);
    return await res.json();
//ต้องการ รูป, idหมา, ชื่อหมา
}

export default {fetchbookmark};