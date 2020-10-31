import React from 'react';
import { Link } from 'react-router-dom';
import {Userinfo} from './Interface';
import {OTPinfo} from './EditProfile/Interface';
import {phoneinfo} from './EditProfile/interface3';



async function fetchProfileInfo(userId:string): Promise<Userinfo>{
    console.log('aaaaaaaaaaaaaaaaaa')
    console.log(userId)
    const res = await fetch(`http://localhost:2000/User/${userId}`);
    const name = await res.json();
    return name;
}

async function fetchadoption(): Promise<any[]>{
    const res = await fetch('http://localhost:2000/userinfo/5f8174e7327a81094416d04f/petadoption');
    const name = await res.json();
    return name;
}

async function fetchregister(): Promise<any[]>{
    const res = await fetch('http://localhost:2000/userinfo/5f8174e7327a81094416d04f/petregister');
    const name = await res.json();
    return name;
}

async function fetchdonation(): Promise<any[]>{
    const res = await fetch('http://localhost:2000/userinfo/5f8174e7327a81094416d04f/petdonation');
    const name = await res.json();
    return name;
}

async function updateinfo(newInfoProfile:Userinfo): Promise<any|null> {
    const res = await fetch('http://localhost:2000/userinfo/5f8174e7327a81094416d04f/setting/infosetting',{
        method: 'PATCH',//PUT POST
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newInfoProfile),
    });
    const Updateinfo:Userinfo = await res.json();
    console.log(Updateinfo)
    if (Updateinfo.FirstName !== undefined){
        return alert("Update information Sucess")
    }
    else{
        return alert("Please fill all information except facebook")
    }
}

async function updatedescription(newDescription:Userinfo): Promise<any|null> {
    const res = await fetch('http://localhost:2000/userinfo/5f8174e7327a81094416d04f/setting/description',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newDescription),
    });
}

async function updateemail(newEmail:Userinfo): Promise<any|null> {
    const res = await fetch('http://localhost:2000/userinfo/5f8174e7327a81094416d04f',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newEmail),
    });
}

async function updatephone(newPhone:phoneinfo): Promise<any|null> {
    const res = await fetch('http://localhost:2000/user/edit-user/change-phone/save-temp-phone',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newPhone),
    });
    const updatephone:OTPinfo = await res.json();
    console.log('Hello')
    console.log(updatephone)
    return false
    /*
    if (updatephone.success !== true){
        return true;
    }
    else{
        alert("Change Phone fail please try again!")
        return false;
    }
    */
}

async function resendOTP(OTPS:Userinfo): Promise<any|null> {
    const res = await fetch('http://localhost:2000/userinfo/5f8174e7327a81094416d04f',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(OTPS),
    });
}

async function updateOTP(OTPS:Userinfo): Promise<any|null> {
    const res = await fetch('http://localhost:2000/userinfo/5f8174e7327a81094416d04f',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(OTPS),
    });
}

export default {
    fetchProfileInfo,
    fetchadoption,
    fetchregister,
    fetchdonation,
    updateinfo,
    updatedescription,
    updateemail,
    updatephone,
    resendOTP,
    updateOTP,
}

