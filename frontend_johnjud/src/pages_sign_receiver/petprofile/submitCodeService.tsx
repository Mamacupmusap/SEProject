import React from "react";

async function submitCode(value: { codePet: string; petId: string; token:string}) {
    const urlencoded = new URLSearchParams();
    urlencoded.append("CodePet", value.codePet);
    urlencoded.append("petid", value.petId);
    const res = await fetch('http://localhost:2000/petinfo/checkCode', {
        method: 'PATCH',
        headers: {'Authorization': `Bearer ${value.token}`},
        body: urlencoded,
    });
    return await res.json()
}

export default {submitCode};