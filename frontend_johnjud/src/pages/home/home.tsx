import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import {Jumbotron} from 'reactstrap';
import './home.css'
import head_dog from './img/head_dog.png'

const home = () =>{
  return(
    <div>
        <img src={head_dog} alt='head_dog' width="100%"/>
    </div>
  )
}

export default home;