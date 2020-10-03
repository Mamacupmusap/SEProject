import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navigation from '../Navigation/Navigation';

import home from '../pages/home/home';
import article from '../pages/article/article'
import aboutUS from './../pages/aboutUS/aboutUS';
import faq from './../pages/faq/faq';

import signin from './../pages/signin/signin';
import signin2 from './../pages/signin/signin2';
import signup from '../pages/signup/signup';
import signup2 from '../pages/signup/signup2';
import signup3 from '../pages/signup/signup3';
import otp from '../pages/signup/otp_page';


export default () => (
  <Switch>
    <Navigation />
    <Route exact path="/home" component={home}/>
    <Route exact path="/article" component={article} />
    <Route exact path="/aboutUS" component={aboutUS} />
    <Route exact path="/faq" component={faq} />

    <Route exact path="/signin" component={signin} />
    <Route exact path="/signin2" component={signin2} />
    <Route exact path="/signup" component={signup} />
    <Route exact path="/signup2" component={signup2} />
    <Route exact path="/signup3" component={signup3} />
    <Route exact path="/otp_page" component={otp} />

  </Switch>
)