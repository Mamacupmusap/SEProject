import React from 'react'
import { Switch, Route } from 'react-router-dom'

import article from '../pages/article/article'
import home from '../pages/home/home';
import Navigation from '../Navigation/Navigation';
import signin from './../pages/signin/signin';
import faq from './../pages/faq/faq';
import signup from '../pages/signup/signup';
import signup2 from '../pages/signup/signup2';
import signup3 from '../pages/signup/signup3';


export default () => (
  <Switch>
    <Navigation />
    <Route exact path="/home" component={home}/>
    <Route exact path="/article" component={article} />
    <Route exact path="/faq" component={faq} />
    <Route exact path="/signin" component={signin} />
    <Route exact path="/signup" component={signup} />
    <Route exact path="/signup2" component={signup2} />
    <Route exact path="/signup3" component={signup3} />

  </Switch>
)