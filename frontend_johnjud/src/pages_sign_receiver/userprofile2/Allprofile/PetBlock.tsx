import React, { useState } from 'react';
import '../Profile.css';
import profileservice from '../ProfileService'
import {Userinfo} from '../Interface';
import { useEffect } from 'react';
import { Container, Card, CardImg, CardBody, CardTitle, CardDeck, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

type petblock = {
    message:string;
    img:string;
    link:string;
}

const PetBlock=(prop: petblock) =>{
    return (
        <Link to = {"/petpet"+prop.link}>
            <div className='CardPetBlock'>
                <img className='ImgCardPetBlock' src={prop.img}/>
                <div className='NamePetCard'><h4>{prop.message}</h4></div>
            </div>
        </Link>
    )
}
export default PetBlock;