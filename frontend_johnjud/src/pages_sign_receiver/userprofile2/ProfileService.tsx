import React from 'react';
import { Link } from 'react-router-dom';
import {Userinfo} from './Interface';
import {OTPinfo} from './EditProfile/Interface';
import {phoneinfo} from './EditProfile/interface3';
import {image} from './EditProfile/interface4';
import { cpuUsage } from 'process';


async function fetchProfileInfo(userId:string): Promise<Userinfo>{
    
    
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

async function fetchdonation(   ): Promise<any[]>{
    const res = await fetch('http://localhost:2000/userinfo/5f8174e7327a81094416d04f/petdonation');
    const name = await res.json();
    return name;
}

async function updateinfo(newInfoProfile:Userinfo,userId:string): Promise<any|null> {
    const res = await fetch(`http://localhost:2000/User/${userId}`,{
        method: 'PATCH',//PUT POST
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newInfoProfile),
    });
    const Updateinfo:Userinfo = await res.json();
    
    if (Updateinfo.FirstName !== undefined){
        return alert("Update information Sucess")
    }
    else{
        return alert("Please fill all information except facebook")
    }
}

async function updatedescription(newDescription:Userinfo,userId:string): Promise<any|null> {
    const res = await fetch(`http://localhost:2000/User/${userId}`,{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newDescription),
    });
}

async function updateemail(newEmail:string,token:string): Promise<any|null> {
    var urlencoded = new URLSearchParams();
    urlencoded.append("Email", newEmail);
    const res = await fetch('http://localhost:2000/user/edit-user/change-email',{
        method: 'PATCH',
        headers : {'Authorization': `Bearer ${token}`},
        body: urlencoded,
    });
    const updateemail = await res.json();
    return updateemail.success
}

async function updatephone(newPhone:string, token:string): Promise<any|null> {

    var urlencoded = new URLSearchParams();
    urlencoded.append("PhoneNo", newPhone);
    urlencoded.append("accessToken", token);

    const res = await fetch('http://localhost:2000/user/edit-user/change-phone/save-temp-phone',{
        method: 'PATCH',//PUT POST
        headers : {'Authorization': `Bearer ${token}`},
        body: urlencoded,
        //{PhoneNo: 0805161, accessToken:fkepwakfwkpfoa}
    });
    const updatephone = await res.json();
    
    return updatephone.success
}


async function updateOTP(OTPS:string,token:string): Promise<any|null> {
    var urlencoded = new URLSearchParams();
    urlencoded.append("FeedbackOTP", OTPS);
    const res = await fetch('http://localhost:2000/user/edit-user/change-phone/verify-phone',{
        method: 'PATCH',
        headers : {'Authorization': `Bearer ${token}`},
        body: urlencoded,
    });
    const ress= await res.json();
    
    return ress
}
async function updatePassword(password:string,confirmpassword:string,token:string): Promise<any|null> {
    
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("Password", password);
    urlencoded.append("ConfirmPassword", confirmpassword);
    const res = await fetch('http://localhost:2000/user/edit-user/change-password',{
        method: 'PATCH',
        headers : {'Authorization': `Bearer ${token}`},
        body: urlencoded,
    });
    const ress= await res.json();
    
    return  ress.success
}

async function updateProfile(image:image,token:string,userId:string): Promise<any|null> {
    const res = await fetch(`http://localhost:2000/User/${userId}/setting/uploadIMG`,{
        method: 'PATCH',
        headers : {'Authorization': `Bearer ${token}`},
        body: JSON.stringify(image),
    });
}

async function updateProfileimage(image:any): Promise<any|null> {
    const res = await fetch(`https://api.imgbb.com/1/upload?key=1949bda7eab7e16a8e613b0c302c4782`,{
        method: 'POST',
        body: image,
    });
    const ress= await res.json();
    return ress
    
    
    
}


async function updateurlimage(display:string,deletes:string,userId:string,token:string): Promise<any|null> {
    //
    var urlencoded = new URLSearchParams();
    urlencoded.append("display_url", display);
    urlencoded.append("delete_url", deletes);
    // 
    // 

    const res = await fetch(`http://localhost:2000/User/${userId}/setting/uploadIMG`,{
        method: 'PATCH',
        headers : {'Authorization': `Bearer ${token}`},
        body: urlencoded,
    });
    const ress= await res.json();
    
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
    updateOTP,
    updatePassword,
    updateProfile,
    updateProfileimage,
    updateurlimage,
}

