import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './pages/home/home';
import article from './pages/article/article';
import Navigation from './Navigation/Navigation';
import faq from './pages/faq/faq';
import signin from './pages/signin/signin';

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
             <Route path="/signin" component={signin}/> 
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}  

export default App;
