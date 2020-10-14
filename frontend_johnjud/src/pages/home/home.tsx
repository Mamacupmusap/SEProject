import React from 'react';
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
  CardTitle, CardDeck} from 'reactstrap';
/*import { CheckboxFilter, TermQuery, BoolMust, RangeQuery } from "searchkit";*/
import { NavLink } from 'react-router-dom';

const home = () =>{
  return(
    <div>
      <img src={head_dog} id='head_dog' alt=''/>
      <Container>
        <CardDeck>
          <Card className="card">
            <CardImg src={pet1} alt=''/>
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">PetName</CardTitle>
            </CardBody>
          </Card>
          <Card className="card">
            <CardImg src={pet2} alt=''/>
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">PetName</CardTitle>
            </CardBody>
          </Card>
          <Card className="card">
            <CardImg src={pet3} alt=''/>
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">PetName</CardTitle>
            </CardBody>
          </Card>
          <Card className="card">
            <CardImg src={pet4} alt=''/>
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">PetName</CardTitle>
            </CardBody>
          </Card>
        </CardDeck>
        <CardDeck>
          <Card className="card">
            <CardImg src={pet5} alt=''/>
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">PetName</CardTitle>
            </CardBody>
          </Card>
          <Card className="card">
            <CardImg src={pet6} alt=''/>
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">PetName</CardTitle>
            </CardBody>
          </Card>
          <Card className="card">
            <CardImg src={pet7} alt=''/>
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">PetName</CardTitle>
            </CardBody>
          </Card>

          <Card className="card">
            <CardImg src={pet8} alt=''/>
            <CardBody className="cardBody">
            <NavLink to='./petprofile1'><CardTitle className="cardTitle">PetName</CardTitle></NavLink>
            </CardBody>
          </Card>
          
        </CardDeck>

        <div id='bottom_box'></div>
      </Container>
      
    </div>
  )
}

export default home;