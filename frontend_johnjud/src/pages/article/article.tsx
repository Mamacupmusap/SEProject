import React from "react";
import './Article.css'
import 'bootstrap/dist/css/bootstrap.css'
import ArticleBG from "./back_article.png"
import { NavLink } from 'react-router-dom';
import Navigation2 from '../../Navigation/Navigation2';

const Article = () => {
    return (
      <div>
        <Navigation2/> 
        <div>
            <img src={ArticleBG} alt="ArticleBG" width="100%"/>
        </div><br/>
        <div className='article_body'>
        <NavLink to='/article1'>
          <div className="article-alert">
              <p className="article-link-text">How to take a good care of your kitten </p>
          </div>
        </NavLink>
        <NavLink to='/article2'>
          <div className="article-alert">
              <p className="article-link-text">How to take a good care of your puppy</p>
          </div>
        </NavLink>
        <NavLink to='/article3'>
          <div className="article-alert">
              <p className="article-link-text">Should my pet be tested for COVID-19?</p>
          </div>
        </NavLink>
        </div>
      </div>
    );
}

export default Article;