async function fetchnotification(): Promise<any[]>{
    const res = await fetch('http://localhost:2000/notification');
    return await res.json();
}

async function fetchpetinfo(): Promise<any[]>{
    const res = await fetch('http://localhost:2000/peinfo');
    return await res.json();
}


export default {
    fetchnotification,
    fetchpetinfo,
};