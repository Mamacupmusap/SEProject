import React, { useState } from "react";

const EditImageProfile =() =>{
  const [image, setImage] = useState<any>();

  const handleUpload=() =>{
    const file = image
    const profile_pic = new FormData()
    profile_pic.append('image',file)

    const data = {"key": "6a6fdcf54607966c3d037f0db246f7c1", 
    "image": profile_pic, 
    "name": "test", 
    "expiration": "15552000"};
    
    console.log(data)
    console.log(profile_pic)
    fetch('https://api.imgbb.com/1/upload?key=6a6fdcf54607966c3d037f0db246f7c1',{
      method:'POST',
      body:profile_pic,
      redirect: 'follow'
    })
  }


  return (
    <div>
      <input
        type="file"
        id="upload-button"
        onChange={(e) => {setImage(e.target.value);}}
      />
      
      <br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default EditImageProfile;