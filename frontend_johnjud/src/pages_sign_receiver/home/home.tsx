import React, {useEffect, useState,} from 'react';
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css'
import head_dog from './img/banner.png'
import { Container, Card, CardImg, CardBody,
  CardTitle} from 'reactstrap';
/*import { CheckboxFilter, TermQuery, BoolMust, RangeQuery } from "searchkit";*/
import Navigation from '../../Navigation/Navigation';
import homeService_receiver from "./homeService_receiver";


const Home = () => {
  
  const [checked, setChecked] = React.useState(true);
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
        <div className="filter2">
              <button onClick={petInfo} className="button2" >All</button>
              <button onClick={dog} className="button2">Dog</button>
              <button onClick={cat} className="button2">Cat</button>
              <button onClick={others} className="button2">Others</button>
              <div className="underfilter"></div>
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