import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import ProDescrib from'./Allprofile/ProDescrib';
import ProAdop from './Allprofile/ProAdop';
import ProRegis from './Allprofile/ProRegis';
import ProDonate1 from './Allprofile/ProDonate';
import EditProfile from './EditProfile/EditProfile';
import ChangePasword from './EditProfile/ChangePassword';
import ChangeEmail from './EditProfile/ChangeEmail';
import ChangePhone from './EditProfile/ChangePhone';

const TapProfile = () => {

  return (
    <Router>
        <div>
            <Switch>
                <Route path="/home/profile/proadoption">
                  <ProAdop/>
                </Route>

                <Route path="/home/profile/proregister">
                  <ProRegis/>
                </Route>
                

                <Route path="/home/profile/prodonation">
                  <ProDonate1/>  
                </Route>

                <Route path="/home/profile/prodescribtion">
                  <ProDescrib/>
                </Route>

                <Route path="/home/profile/editprofile/changepassword">
                  <ChangePasword/>
                </Route>
                <Route path="/home/profile/editprofile/changeemail">
                  <ChangeEmail/>
                </Route>
                <Route path="/home/profile/editprofile/changephone">
                  <ChangePhone/>
                </Route>
                
                <Route path="/home/profile/editprofile">
                  <EditProfile/>
                </Route>


            </Switch>
        </div>
    </Router>
  );
}

export default TapProfile;