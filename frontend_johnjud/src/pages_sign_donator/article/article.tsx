import React from "react";
import './Article.css'
import 'bootstrap/dist/css/bootstrap.css'
import ArticleBG from "./back_article.png"
import { NavLink } from 'react-router-dom';
import Navigation3 from '../../Navigation/Navigation3';

const Article = () => {
    return (
      <div>
        <Navigation3/> 
        <div>
            <img src={ArticleBG} alt="ArticleBG" width="100%"/>
        </div><br/>
        <input type="text" name="search" placeholder="Search Article" className="search_article"/><br/><br/>
        <NavLink to='/donator/article1'>
          <div className="article-alert">
              <p className="article-link-text">How to take a good care of your kitten </p>
              <p className='time'>last modified 18SEP2020 </p>
          </div>
        </NavLink>
        <NavLink to='/donator/article2'>
          <div className="article-alert">
              <p className="article-link-text">How to take a good care of your puppy</p>
              <p className='time'>last modified 15SEP2020 </p>
          </div>
        </NavLink>
        <NavLink to='/donator/article3'>
          <div className="article-alert">
              <p className="article-link-text">Should my pet be tested for COVID-19?</p>
              <p className='time'>last modified 12SEP2020 </p>
          </div>
        </NavLink>
      </div>
    );
}

export default Article;