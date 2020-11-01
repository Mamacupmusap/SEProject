import {Petinfo} from './Interface';

async function fetchProfileInfo(petid:string): Promise<Petinfo>{
    console.log(petid)
    const res = await fetch(`http://localhost:2000/petinfo/${petid}`);
    const name = await res.json();
    return name;}


async function fetchadoption(): Promise<any[]>{
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049t/');
    const name = await res.json();
    return name;
}
async function fetchregister(): Promise<any[]>{
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049t/');
    const name = await res.json();
    return name;
}
async function fetchdonation(): Promise<any[]>{
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049t/');
    const name = await res.json();
    return name;
}

async function updateinfo(newInfoProfile:Petinfo): Promise<any|null> {
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049t/setting/infosetting',{
        method: 'PATCH',//PUT POST
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newInfoProfile),
    });
    const Updateinfo:Petinfo = await res.json();
    console.log(Updateinfo)
    if (Updateinfo.PetName !== undefined){
        return alert("Update information Sucess")
    }
    else{
        return alert("Please fill all information except facebook")
    }
}
async function updatedescription(newDescription:Petinfo): Promise<any|null> {
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049t/setting/description',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newDescription),
    });
}
async function updateemail(newEmail:Petinfo): Promise<any|null> {
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049t',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newEmail),
    });
}
async function updatephone(newPhone:Petinfo): Promise<any|null> {
    const res = await fetch('http://localhost:3000/petinfo/5f817068327a81094416d049t',{
        method: 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(newPhone),
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
}

