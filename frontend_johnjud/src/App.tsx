import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Navigation2 from './Navigation/Navigation2';

import home from './pages/home/home';
import article from './pages/article/article'
import aboutUS from './pages/aboutUS/aboutUS';
import faq from './pages/faq/faq';

import signin from './pages/signin/signin';
import signin2 from './pages/signin/signin2';
import signup from './pages/signup/signup';
import signup2 from './pages/signup/signup2';
import signup3 from './pages/signup/signup3';
import signup4 from './pages/signup/signup4';
import signup5 from './pages/signup/signup5';
import signup6 from './pages/signup/signup6';

import bookmark from './pages/bookmark/bookmark';
import chat from './pages/chat/chat';
import suggestion from './pages/chat/suggest';

import article1 from './pages/article/article1'
import userprofile from './pages/userprofile/userprofile1'
import petprofile from './pages/petprofile/petprofile1'


class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Navigation />
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
             <Route path="/signup4" component={signup4} />
             <Route path="/signup5" component={signup5} />
             <Route path="/signup6" component={signup6}/>

             <Route path="/bookmark" component={bookmark}/>
             <Route path="/chat" component={chat}/>
             <Route path="/suggestion" component={suggestion}/>

             <Route path="/article1" component={article1}/>
             <Route path="/userprofile1" component={userprofile}/>

             <Route path="/petprofile1" component={petprofile}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}  

export default App;
