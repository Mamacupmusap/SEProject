import React, {useState} from 'react';
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css'
import head_dog from './img/banner.png'
import pet7 from './img/pet7.png'
import pet8 from './img/pet8.png'
import {
    Container, Card, CardImg, CardBody,
    CardTitle, CardDeck
} from 'reactstrap';
/*import { CheckboxFilter, TermQuery, BoolMust, RangeQuery } from "searchkit";*/
import Navigation3 from './../../Navigation/Navigation3';

import homeService from "./homeService";
import {useEffect} from "react";
//import AuthenService from "../../pages/signin/AuthenService";

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
    /*
    //example<//
    const [username, setUsername] = useState<string|null>(null);
    //const [isSignIn, setIsSignIn] = useState<boolean>(false);

    useEffect(() => {
        setUsername(AuthenService.getUsername());
    },[]);

    const handleUserSignin = () => {
        setUsername(AuthenService.getUsername());
    };*/
    //example>//

    return(
        <div>
            <Navigation3/>
            <div id="bodyblahblah">
                <img src={head_dog} id='head_dog' alt=""/>
                <div className="urgh">
                    <div>
                        <h1 id="mypet">My pet</h1>
                        <button type='button' id='newpet'><NavLink to='/donator/petprofile1' style={{color: 'white'}}>Add new pet</NavLink></button>
                    </div>

                    <Container id="middle">
                        <CardDeck>
                            <Card className="card" style={{backgroundColor: '#8D7966', color: 'white'}}>
                                <CardImg src={pet7} alt=""/>
                                <CardBody className="cardBody">
                                    <CardTitle className="cardTitle">PetName</CardTitle>
                                </CardBody>
                            </Card>
                            <Card className="card" style={{backgroundColor: '#8D7966', color: 'white'}}>
                                <CardImg src={pet8} alt=""/>
                                <CardBody className="cardBody">
                                    <NavLink to='/donator/petprofile' style={{color: 'white'}}>
                                        <CardTitle className="cardTitle">PetName</CardTitle>
                                    </NavLink>
                                </CardBody>
                            </Card>
                        </CardDeck>
                        {pet.map((value) => {
                            return (
                                <Card className="card" style={{backgroundColor: '#8D7966', color: 'white'}} key={value}>
                                    <CardImg src={value.petPicUrl} alt="" height="130px"/>
                                    <CardBody className="cardBody">
                                        <NavLink to={'/donator/petprofile/' + value.petid} style={{color: 'white'}}>
                                            <CardTitle className="cardTitle">{value.PetName}</CardTitle>
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