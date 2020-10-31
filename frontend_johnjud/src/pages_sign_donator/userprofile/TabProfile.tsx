import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {
    BrowserRouter as Router,
    Link,
    Redirect
  } from "react-router-dom";

const TapProfile = (props:any) => {
  const userId = props.userId

  return (
    <div>
        <div>
            <Link to={`/donator/userprofile/${userId}/proadoption`}>
                <button id='ButtonPetAdop' >Pet Adoption<br/><br/> 1</button>
            </Link>
            <Link to={`/donator/userprofile/${userId}/proregister`} >
                <button id='ButtonPetAdop' >Pet Registeration<br/><br/> 1 </button>
            </Link>
            <Link to={`/donator/userprofile/${userId}/prodonation`} >
                <button id='ButtonPetAdop' >Pet Donation<br/><br/> 1</button>
            </Link>
        </div>
    </div>
  );
}

export default TapProfile;