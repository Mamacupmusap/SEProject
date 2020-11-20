import React from "react";

async function updateStatus(value: { petId: string; token:string}) {
    const urlencoded = new URLSearchParams();
    urlencoded.append("petid", value.petId);
    const res = await fetch('http://localhost:2000/petinfo/updateStatus', {
        method: 'PATCH',
        headers: {'Authorization': `Bearer ${value.token}`},
        body: urlencoded,
    })

    return await res.json()
}

export default {updateStatus};