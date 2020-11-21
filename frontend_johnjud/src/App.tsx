import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import home from './pages/home/home';
import article from './pages/article/article';
import aboutUS from './pages/aboutUS/aboutUS';
import faq from './pages/faq/faq';

import signin from './pages/signin/signin';
import signin2 from './pages/signin/signin2';
import signup from './pages/signup/signup';
import signup2 from './pages/signup/signup2';
import signup3 from './pages/signup/signup3';


import article1 from './pages/article/article1'
import article2 from './pages/article/article2'
import article3 from './pages/article/article3'
import petprofile from './pages/petprofile/petprofile'

//sign_in_receiver
import home_receiver from './pages_sign_receiver/home/home'
import article_receiver from './pages_sign_receiver/article/article'
import aboutUS_receiver from './pages_sign_receiver/aboutUS/aboutUS';
import faq_receiver from './pages_sign_receiver/faq/faq';
import article1_receiver from './pages_sign_receiver/article/article1'
import article2_receiver from './pages_sign_receiver/article/article2'
import article3_receiver from './pages_sign_receiver/article/article3'

import chat_receiver from './pages_sign_receiver/chat/chatroom';
import suggestion_receiver from './pages_sign_receiver/chat/suggest';
//import userpro_receiver from './pages_sign_receiver/userprofile/userprofile1'
//import bookmark_receiver from './pages_sign_receiver/bookmark/bookmark';
import Bookmark from "./pages_sign_receiver/bookmark/bookmark2";
import petprofile_receiver from './pages_sign_receiver/petprofile/petprofile'


//sign_in_donator
import home_donator from './pages_sign_donator/home/home'
import article_donator from './pages_sign_donator/article/article'
import aboutUS_donator from './pages_sign_donator/aboutUS/aboutUS';
import faq_donator from './pages_sign_donator/faq/faq';
import article1_donator from './pages_sign_donator/article/article1'
import article2_donator from './pages_sign_donator/article/article2'
import article3_donator from './pages_sign_donator/article/article3'

//import chat_donator from './pages_sign_donator/chat/components/Chat/Chat';
import chat_donator from './pages_sign_donator/chat/chatroom';
import suggestion_donator from './pages_sign_donator/chat/suggest';
import petprofile_donator from './pages_sign_donator/petprofile/petprofile';
import petprofile1_donator from './pages_sign_donator/petprofile/petprofile1';
import editpetprofile_donator from './pages_sign_donator/petprofile/editpetprofile';

import ProDescrib from'./pages_sign_donator/userprofile/Allprofile/ProDescrib';
import ProAdop from './pages_sign_donator/userprofile/Allprofile/ProAdop';
import ProRegis from './pages_sign_donator/userprofile/Allprofile/ProRegis';
import ProDonate from './pages_sign_donator/userprofile/Allprofile/ProDonate';
import EditProfile from './pages_sign_donator/userprofile/EditProfile/EditProfile';
import ProChangePasword from './pages_sign_donator/userprofile/EditProfile/ChangePassword';
import ProChangeEmail from './pages_sign_donator/userprofile/EditProfile/ChangeEmail';
import ProChangePhone from './pages_sign_donator/userprofile/EditProfile/ChangePhone';
import ProfileOTP from './pages_sign_donator/userprofile/EditProfile/ProfileOTP'

import ProDescribs from'./pages_sign_receiver/userprofile3/Allprofile/ProDescrib';
import ProAdops from './pages_sign_receiver/userprofile3/Allprofile/ProAdop';
import ProRegiss from './pages_sign_receiver/userprofile3/Allprofile/ProRegis';
import ProDonates from './pages_sign_receiver/userprofile3/Allprofile/ProDonate';
import EditProfiles from './pages_sign_receiver/userprofile3/EditProfile/EditProfile';
import ProChangePaswords from './pages_sign_receiver/userprofile3/EditProfile/ChangePassword';
import ProChangeEmails from './pages_sign_receiver/userprofile3/EditProfile/ChangeEmail';
import ProChangePhones from './pages_sign_receiver/userprofile3/EditProfile/ChangePhone';
import ProfileOTPs from './pages_sign_receiver/userprofile3/EditProfile/ProfileOTP'

//import AuthenService from "./pages/signin/AuthenService";

class App extends Component{
  componentDidMount(){
    document.title = "๋JohnJud"
  }

  render(){
    return(
      <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={home} exact/>
             <Route path="/article" component={article}/>
             <Route path="/faq" component={faq}/> 
             <Route path="/aboutUS" component={aboutUS}/> 
             
             <Route path="/signin" component={signin}/> 
             <Route path="/signin2" component={signin2}/> 
             <Route path="/signup" component={signup}/> 
             <Route path="/signup2" component={signup2}/> 
             <Route path="/signup3" component={signup3}/> 


            
             <Route path="/article1" component={article1}/>
             <Route path="/article2" component={article2}/>
             <Route path="/article3" component={article3}/>
             <Route path="/petprofile/:petid" component={petprofile}/>


             <Route path="/receiver/home" component={home_receiver}/>
             <Route path="/receiver/article" component={article_receiver}/>
             <Route path="/receiver/aboutUS" component={aboutUS_receiver}/>
             <Route path="/receiver/faq" component={faq_receiver}/>
             <Route path="/receiver/article1" component={article1_receiver}/>
             <Route path="/receiver/article2" component={article2_receiver}/>
             <Route path="/receiver/article3" component={article3_receiver}/>

            <Route path="/receiver/chat/:userId/:userId2/:roomId" component={chat_receiver}/>
            <Route path="/receiver/suggestion" component={suggestion_receiver}/>
            <Route path="/receiver/bookmark" component={Bookmark}/>
            <Route path="/receiver/petprofile/:petid" component={petprofile_receiver}/>

            <Route path="/donator/userprofile/:userId/editprofile/changephone/OTP" component={ProfileOTPs}/>
            <Route path="/receiver/userprofile/:userId/editprofile/changepassword" component={ProChangePaswords}/>
            <Route path="/receiver/userprofile/:userId/editprofile/changeemail" component={ProChangeEmails}/>
            <Route path="/receiver/userprofile/:userId/editprofile/changephone" component={ProChangePhones}/>
            <Route path="/receiver/userprofile/:userId/proadoption" component={ProAdops}/>
            <Route path="/receiver/userprofile/:userId/proregister" component={ProRegiss}/>
            <Route path="/receiver/userprofile/:userId/prodonation" component={ProDonates}/>
            <Route path="/receiver/userprofile/:userId/editprofile" component={EditProfiles}/>
            <Route path="/receiver/userprofile/:userId" component={ProDescribs}/>

            <Route path="/donator/home" component={home_donator}/>
            <Route path="/donator/article" component={article_donator}/>
            <Route path="/donator/aboutUS" component={aboutUS_donator}/>
            <Route path="/donator/faq" component={faq_donator}/>
            <Route path="/donator/article1" component={article1_donator}/>
            <Route path="/donator/article2" component={article2_donator}/>
            <Route path="/donator/article3" component={article3_donator}/>
            
            <Route path="/donator/chat/:userId/:roomId" component={chat_donator}/>
            <Route path="/donator/suggestion" component={suggestion_donator}/>
            <Route path="/donator/petprofile/:petid" component={petprofile_donator}/>
            <Route path="/donator/petprofile1" component={petprofile1_donator}/>
            <Route path="/donator/editpetprofile/:petid" component={editpetprofile_donator}/>

            <Route path="/donator/userprofile/:userId/editprofile/changephone/OTP" component={ProfileOTP}/>
            <Route path="/donator/userprofile/:userId/editprofile/changepassword" component={ProChangePasword}/>
            <Route path="/donator/userprofile/:userId/editprofile/changeemail" component={ProChangeEmail}/>
            <Route path="/donator/userprofile/:userId/editprofile/changephone" component={ProChangePhone}/>
            <Route path="/donator/userprofile/:userId/proadoption" component={ProAdop}/>
            <Route path="/donator/userprofile/:userId/proregister" component={ProRegis}/>
            <Route path="/donator/userprofile/:userId/prodonation" component={ProDonate}/>
            <Route path="/donator/userprofile/:userId/editprofile" component={EditProfile}/>
            <Route path="/donator/userprofile/:userId" component={ProDescrib}/>


           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}  

export default App;
