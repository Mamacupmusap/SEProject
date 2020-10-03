import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation/Navigation';

import home from './pages/home/home';
import article from './pages/article/article'
import aboutUS from './pages/aboutUS/aboutUS';
import faq from './pages/faq/faq';

import signin from './pages/signin/signin';
import signin2 from './pages/signin/signin2';
import signup from './pages/signup/signup';
import signup2 from './pages/signup/signup2';
import signup3 from './pages/signup/signup3';
import otp from './pages/signup/otp_page';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/home" component={home} exact/>
             <Route path="/article" component={article}/>
             <Route path="/faq" component={faq}/> 
             <Route path="/aboutUS" component={aboutUS}/> 
             
             <Route path="/signin" component={signin}/> 
             <Route path="/signin2" component={signin2}/> 
             <Route path="/signup" component={signup}/> 
             <Route path="/signup2" component={signup2}/> 
             <Route path="/signup3" component={signup3}/> 
             <Route exact path="/otp_page" component={otp} />

           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}  

export default App;
