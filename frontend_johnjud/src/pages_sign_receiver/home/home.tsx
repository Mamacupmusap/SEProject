import React, {useEffect, useState} from 'react';
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css'
import head_dog from './img/banner.png'
import pet1 from './img/pet1.png'
import pet2 from './img/pet2.png'
import pet3 from './img/pet3.png'
import pet4 from './img/pet4.png'
import pet5 from './img/pet5.png'
import pet6 from './img/pet6.png'
import pet7 from './img/pet7.png'
import pet8 from './img/pet8.png'
import { Container, Card, CardImg, CardBody,
  CardTitle} from 'reactstrap';
/*import { CheckboxFilter, TermQuery, BoolMust, RangeQuery } from "searchkit";*/
import Navigation from '../../Navigation/Navigation';
import homeService_receiver from "./homeService_receiver";

const Home = () => {
  const[allPet,setAllPet] = useState<any[]>([]);
  const petInfo=() =>{
    return(
        homeService_receiver.fetchAllPet()
            .then(name => {
              setAllPet(name)
            })
    )
  }
  const dog=() =>{
    return(
      homeService_receiver.fetchFillterDog()
          .then(name => {
            setAllPet(name)
          })
    )
  }
  const cat=() =>{
    return(
      homeService_receiver.fetchFillterCat()
          .then(name => {
            setAllPet(name)
          })
    )
  }
  const others=() =>{
    return(
      homeService_receiver.fetchFillterOther()
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
    <Navigation/>
    <div id="bodyblahblah">
      <img src={head_dog} id='head_dog' alt=""/>
      <div className="urgh">
        <div id="filterAll">
            <div className="filter">
              <p>Type</p>
              <input type="checkbox" value="dog" onChange={dog}/>
              <label>Dog</label>
              <br/>
              <input type="checkbox" value="cat" onChange={cat}/>
              <label>Cat</label>
              <br/>
              <input type="checkbox" value="others" defaultChecked onChange={others}/>
              <label>Others</label>
            </div>
            
            <div className="filter">
              <p>Height</p>
              <input type="checkbox"/>
              <label>less than 20cm</label>
              <br/>
              <input type="checkbox"/>
              <label>20-50cm</label>
              <br/>
              <input type="checkbox"/>
              <label>more than 50cm</label>
            </div>
            
          </div>
        <Container id="middle">
            {allPet.map((value) => {
              return (
                  <Card className="card">
                    <CardImg src={value.petPicUrl} alt="" height="130px"/>
                    <CardBody className="cardBody">
                      <NavLink to={'/receiver/petprofile/' + value.petid}>
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