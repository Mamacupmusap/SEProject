import React, {useState} from 'react';
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css'
import head_dog from './img/banner.png'
import {
    Container, Card, CardImg, CardBody,
    CardTitle, CardDeck
} from 'reactstrap';
import Navigation3 from './../../Navigation/Navigation3';

import homeService from "./homeService";
import {useEffect} from "react";

const Home = () => {
    const[pet,setPet] = useState<any[]>([]);
    const petInfo = () => {
        return(
            homeService.fetchPetRegister()
                .then(name => {
                    setPet(name)
                })
        )
    }
    useEffect(()=>{
        petInfo().then()
    },[])

    localStorage.removeItem('AddpetInfo')
    return(
        <div>
            <Navigation3/>
            <div id="bodyblahblah">
                <img src={head_dog} id='head_dog' alt=""/>
                <div className="urgh">
                    <div>
                        <h1 id="mypet">My Pets</h1>
                        <button type='button' id='newpet'><NavLink to='/donator/petprofile1' style={{color: 'white'}}>Add new pet</NavLink></button>
                    </div>

                    <Container id="middle">
                    
                        {pet.map((value) => {
                            return (
                                <Card className="card" style={{backgroundColor: '#8D7966', color: 'white'}} key={value}>
                                    <CardImg src={value.PetPicURL} alt="No picture" height="130px"/>
                                    <CardBody className="cardBody">
                                        <NavLink to={'/donator/petprofile/' + value.petid} style={{color: 'white'}}>
                                            <CardTitle className="cardTitle" style={{fontSize:14}}>{value.PetName}</CardTitle>
                                        </NavLink>
                                    </CardBody>
                                </Card>)
                        })}
                    </Container>
                </div>
            </div>
        </div>
    )
};
export default Home;