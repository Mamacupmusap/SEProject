import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navigation from '../Navigation/Navigation';
import Navigation2 from '../Navigation/Navigation2';

import home from '../pages/home/home';
import article from '../pages/article/article'
import aboutUS from './../pages/aboutUS/aboutUS';
import faq from './../pages/faq/faq';

import signin from './../pages/signin/signin';
import signin2 from './../pages/signin/signin2';
import signup from '../pages/signup/signup';
import signup2 from '../pages/signup/signup2';
import signup3 from '../pages/signup/signup3';
import signup4 from '../pages/signup/signup4';
import signup5 from '../pages/signup/signup5';

import article1 from '../pages/article/article1'
import petprofile from '../pages/petprofile/Petprofile'

//sign_in_receiver
import home_receiver from '../pages_sign_receiver/home/home'
import article_receiver from '../pages_sign_receiver/article/article'
import aboutUS_receiver from '../pages_sign_receiver/aboutUS/aboutUS';
import faq_receiver from '../pages_sign_receiver/faq/faq';
import article1_receiver from '../pages_sign_receiver/article/article1'

import chat_receiver from '../pages_sign_receiver/chat/components/Chat/Chat';
import suggestion_receiver from '../pages_sign_receiver/chat/suggest';
import userpro_receiver from '../pages_sign_receiver/userprofile/userprofile1'
import bookmark_receiver from '../pages_sign_receiver/bookmark/bookmark';

import petprofile_receiver from '../pages_sign_receiver/petprofile/petprofile'

//sign_in_donator
import home_donator from '../pages_sign_donator/home/home'
import article_donator from '../pages_sign_donator/article/article'
import aboutUS_donator from '../pages_sign_donator/aboutUS/aboutUS';
import faq_donator from '../pages_sign_donator/faq/faq';
import article1_donator from '../pages_sign_donator/article/article1'

import chat_donator from '../pages_sign_donator/chat/components/Chat/Chat';
import suggestion_donator from '../pages_sign_donator/chat/suggest';
import userpro_donator from '../pages_sign_donator/userprofile/userprofile1'

import petprofile_donator from '../pages_sign_donator/petprofile/petprofile'
import petprofile1_donator from '../pages_sign_donator/petprofile/petprofile1'

export default () => (
  <Switch>
    <Navigation />
    <Navigation2/>
    <Route exact path="/" component={home}/>
    <Route exact path="/article" component={article} />
    <Route exact path="/aboutUS" component={aboutUS} />
    <Route exact path="/faq" component={faq} />

    <Route exact path="/signin" component={signin} />
    <Route exact path="/signin2" component={signin2} />
    <Route exact path="/signup" component={signup} />
    <Route exact path="/signup2" component={signup2} />
    <Route exact path="/signup3" component={signup3} />
    <Route exact path="/signup4" component={signup4} />
    <Route exact path="/signup5" component={signup5} />

    <Route path="/article1" component={article1}/>
    <Route path="/petprofile" component={petprofile}/>
    

    <Route path="/receiver/home" component={home_receiver}/>
    <Route path="/receiver/article" component={article_receiver}/>
    <Route path="/receiver/aboutUS" component={aboutUS_receiver}/>
    <Route path="/receiver/faq" component={faq_receiver}/>
    <Route path="/receiver/article1" component={article1_receiver}/>

    <Route path="/receiver/chat" component={chat_receiver}/>
    <Route path="/receiver/suggestion" component={suggestion_receiver}/>
    <Route path="/receiver/userprofile" component={userpro_receiver}/>
    <Route path="/receiver/bookmark" component={bookmark_receiver}/>
    <Route path="/receiver/petprofile" component={petprofile_receiver}/>



    <Route path="/donator/home" component={home_donator}/>
    <Route path="/donator/article" component={article_donator}/>
    <Route path="/donator/aboutUS" component={aboutUS_donator}/>
    <Route path="/donator/faq" component={faq_donator}/>
    <Route path="/donator/article1" component={article1_donator}/>

    <Route path="/donator/chat" component={chat_donator}/>
    <Route path="/donator/suggestion" component={suggestion_donator}/>
    <Route path="/donator/userprofile" component={userpro_donator}/>
    <Route path="/donator/petprofile" component={petprofile_donator}/>
    <Route path="/donator/petprofile1" component={petprofile1_donator}/>

  </Switch>
)