import {Petinfo} from './Interface';
import {Userinfo} from './interface2';

async function fetchProfileInfo(petid:string): Promise<Petinfo>{
    
    const res = await fetch(`http://localhost:2000/petinfo/${petid}`);
    const name = await res.json();
    return name;}

async function fetchProfileInfos(userId:string|undefined): Promise<Userinfo>{
        const res = await fetch(`http://localhost:2000/User/${userId}`);
        const name = await res.json();
        return name;
    }
async function fetchadoption(): Promise<Petinfo>{
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049');
    const name = await res.json();
    return name;
//ต้องการ รูป, idหมา, ชื่อหมา
}
async function fetchregister(): Promise<Petinfo>{
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049');
    const name = await res.json();
    return name;
//ต้องการ รูป, idหมา, ชื่อหมา
}
async function fetchadonation(): Promise<Petinfo>{
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049');
    const name = await res.json();
    return name;
//ต้องการ รูป, idหมา, ชื่อหมา
}

async function updateinfo(newInfoProfile:Petinfo): Promise<any|null> {
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049',{
        method: 'PATCH',//PUT POST
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newInfoProfile),
    });
}
async function updatedescription(newDescription:Petinfo): Promise<any|null> {
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newDescription),
    });
}
async function updateemail(newEmail:Petinfo): Promise<any|null> {
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newEmail),
    });
}
async function makeroomchat(a:any,userId1:string,userId2:string|undefined,token:any): Promise<any|null> {
    const res = await fetch(`http://localhost:2000/room/createroom/${userId1}/${userId2}`,{
        method: 'POST',
        headers : {'Authorization': `Bearer ${token}`},
        body: JSON.stringify(a),
    });
    const ress = await res.json();
    
    
    return ress
}

async function AddBookmark(b: any,useridx: string | null,petidx: string | null,token: string): Promise<any|null> {
    const res2 = await fetch(`http://localhost:2000/bookmark/${useridx}/${petidx}/addfav`,{
        method: 'POST',
        headers : {'Authorization': `Bearer ${token}`},
        body: JSON.stringify(b),
    });
    const ressbook = await res2.json();
    if(ressbook.message!=undefined){
        alert(ressbook.message)
    }else{
        alert('This Pet added to your Bookmarks')
    }
}
async function makenoti1(a:any,userId:string,roomid:string): Promise<any|null> {
    const res = await fetch(`http://localhost:2000/chat/${roomid}/${userId}/noti`,{
        method: 'POST',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(a),
    });
    const ress = await res.json();
    
    
    return ress
}
async function makenoti2(a:any,userId:string|undefined, roomid:string): Promise<any|null> {
    const res = await fetch(`http://localhost:2000/chat/${roomid}/${userId}/noti`,{
        method: 'POST',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(a),
    });
    const ress = await res.json();
    
    
    return ress
}

export default {
    fetchProfileInfo,
    fetchadoption,
    fetchregister,
    fetchadonation,
    updateinfo,
    updatedescription,
    updateemail,
    makeroomchat,
    AddBookmark,
    fetchProfileInfos,
    makenoti1,
    makenoti2,
} 

