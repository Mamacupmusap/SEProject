import React from 'react'
import { Switch, Route } from 'react-router-dom'

import article from '../pages/article/article'
import home from '../pages/home/home';
import Navigation from '../Navigation/Navigation';
import signin from './../pages/signin/signin';
import faq from './../pages/faq/faq';

export default () => (
  <Switch>
    <Navigation />
    <Route exact path="/" component={home}/>
    <Route exact path="/article" component={article} />
    <Route exact path="/faq" component={faq} />
    <Route exact path="/signin" component={signin} />
  </Switch>
)