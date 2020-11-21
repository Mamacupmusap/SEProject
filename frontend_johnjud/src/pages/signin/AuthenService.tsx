import React from "react";

async function sendRequestSignIn(value: { username: string; password: string; }) {
    const details = {
        UserName: value.username,
        Password: value.password,
    };

    const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent((details as any)[key])).join('&');

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': 'http://permitted.origin.com',
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type'
        },
        //body: JSON.stringify(values, null, 2)
        body: formBody
    };
    const result = await fetch('http://localhost:2000/signin', requestOptions)
        .then(response => response.json())
    console.log(result)
    if(result.accessToken) {
        localStorage.setItem("Token", result.accessToken)
        localStorage.setItem("UserName", result.UserName) // ทำไว้รอ backend ว่าจะส่งค่าให้มั้ย
        localStorage.setItem("UserId", result.id) // ทำไว้รอ backend ว่าจะส่งค่าให้มั้ย
        //console.log('get access token')
        //console.log(result.accessToken)
        return result
    }else {
        //console.log("can't login")
        return null
    }
}

function isUserSignIn(): boolean {
    console.log(localStorage.Token !== undefined);
    return localStorage.Token !== undefined;
}

function getUsername(): string|null {
    const message = "you have been signed in";
    if (isUserSignIn()){
        return message;
    }
    else {
        return null;
    }
}

function logoutUser(): void {
    if (isUserSignIn()) {
        localStorage.removeItem("Token");
        localStorage.removeItem("UserId");
        localStorage.removeItem("UserName");
        localStorage.removeItem("petID");
    }
}

export default {sendRequestSignIn, isUserSignIn, getUsername, logoutUser};