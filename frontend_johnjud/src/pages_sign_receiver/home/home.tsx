import React, {useEffect, useState} from 'react';
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css'
import head_dog from './img/banner.png'
import { Container, Card, CardImg, CardBody,
  CardTitle} from 'reactstrap';
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
        <div id="filterAll">
            <div className="filter">
              <p>Type</p>
              <input type="checkbox" value="dog"  onClick={dog}/>
              <label>Dog</label>
              <br/>
              <input type="checkbox" value="cat" onClick={cat}/>
              <label>Cat</label>
              <br/>
              <input type="checkbox" value="others" onClick={others}/>
              <label>Others</label>
              <br/>
              <input type="checkbox" value="all" onClick={petInfo}/>
              <label>All</label>
            </div>
          </div>
        <Container id="middle">
            {allPet.map((value) => {
              return (
                  <Card className="card">
                    <CardImg src={value.PetPicURL} alt="No picture" height="130px"/>
                    <CardBody className="cardBody">
                      <NavLink to={'/receiver/petprofile/' + value.petid}>
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