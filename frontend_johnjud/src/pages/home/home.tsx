import React, {useEffect, useState, Component } from 'react';
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css'
import head_dog from './img/banner.png'
import { Container, Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import Navigation2 from '../../Navigation/Navigation2';
import homeService_page from "./homeService_page";



const fillter1 = document.getElementById('fillter0');

const Home = (): JSX.Element => {
  const[allPet,setAllPet] = useState<any[]>([]);
  const petInfo=() =>{
    return(
        homeService_page.fetchAllPet()
            .then(name => {
              setAllPet(name)
            })
    )
  }
  const dog=() =>{
    return(
      homeService_page.fetchFillterDog()
          .then(name => {
            setAllPet(name)
          })
    )
  }
  const cat=() =>{
    return(
      homeService_page.fetchFillterCat()
          .then(name => {
            setAllPet(name)
          })
    )
  }
  const others=() =>{
    return(
      homeService_page.fetchFillterOther()
          .then(name => {
            setAllPet(name)
          })
    )
  }
  useEffect(()=>{
    petInfo().then()
  },[])
  
  return(
  <div>
    <Navigation2/>
    <div id="bodyblahblah">
      <img src={head_dog} id='head_dog' alt=""/>
      <div className="urgh">
            
            <div className="filterDon">
              <button onClick={petInfo} className="button2">All</button>
              <button onClick={dog} className="button2">Dog</button>
              <button onClick={cat} className="button2">Cat</button>
              <button onClick={others} className="button2">Others</button>
              <div className="underfilter"></div>
            </div>       

        <Container id="middle">
          {allPet.map((value) => {
            return (
                <Card className="card">
                  <CardImg src={value.PetPicURL} alt="No picture" height="130px"/>
                  <CardBody className="cardBody">
                    <NavLink to={'/petprofile/' + value.petid}>
                      <CardTitle className="cardTitle" style={{fontSize:14}}>{value.PetName}</CardTitle>
                    </NavLink>
                  </CardBody>
                </Card>
              
              )
          })}
        </Container>
      </div>
    </div>
  </div>
  )
};

export default Home;