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
import { Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck, CardFooter, Label, Nav} from 'reactstrap';
/*import { CheckboxFilter, TermQuery, BoolMust, RangeQuery } from "searchkit";*/

export default function home(){

  return(
    <div id="bodyblahblah">
      <img src={head_dog} id='head_dog'/>
      <div className="urgh">
        <div id="filterAll">
            <div className="filter">
              <input type="checkbox"></input>
              <label>Near by you</label>
            </div>
            <div className="filter">
              <p>Type</p>
              <input type="checkbox"></input>
              <label>Dog</label>
              <br></br>
              <input type="checkbox"></input>
              <label>Cat</label>
              <br></br>
              <input type="checkbox"></input>
              <label>Others</label>
            </div>
            <div className="filter">
              <p>Weight</p>
              <input type="checkbox"></input>
              <label>less than 5kg</label>
              <br></br>
              <input type="checkbox"></input>
              <label>5-10kg</label>
              <br></br>
              <input type="checkbox"></input>
              <label>more than 10kg</label>
            </div>
            <div className="filter">
              <p>Height</p>
              <input type="checkbox"></input>
              <label>less than 20cm</label>
              <br></br>
              <input type="checkbox"></input>
              <label>20-50cm</label>
              <br></br>
              <input type="checkbox"></input>
              <label>more than 50cm</label>
            </div>
            <div className="filter">
              <p>Age</p>
              <input type="checkbox"></input>
              <label>less than a year</label>
              <br></br>
              <input type="checkbox"></input>
              <label>1-5years</label>
              <br></br>
              <input type="checkbox"></input>
              <label>more than 5 years</label>
            </div>
          </div>
        <Container id="middle">
          <CardDeck>
            <Card className="card">
              <CardImg src={pet1} />
              <CardBody className="cardBody">
                <CardTitle className="cardTitle">PetName</CardTitle>
              </CardBody>
            </Card>
            <Card className="card">
              <CardImg src={pet2} />
              <CardBody className="cardBody">
                <CardTitle className="cardTitle">PetName</CardTitle>
              </CardBody>
            </Card>
            <Card className="card">
              <CardImg src={pet3} />
              <CardBody className="cardBody">
                <CardTitle className="cardTitle">PetName</CardTitle>
              </CardBody>
            </Card>
            <Card className="card">
              <CardImg src={pet4} />
              <CardBody className="cardBody">
                <CardTitle className="cardTitle">PetName</CardTitle>
              </CardBody>
            </Card>
          </CardDeck>
          <CardDeck>
            <Card className="card">
              <CardImg src={pet5} />
              <CardBody className="cardBody">
                <CardTitle className="cardTitle">PetName</CardTitle>
              </CardBody>
            </Card>
            <Card className="card">
              <CardImg src={pet6} />
              <CardBody className="cardBody">
                <CardTitle className="cardTitle">PetName</CardTitle>
              </CardBody>
            </Card>
            <Card className="card">
              <CardImg src={pet7} />
              <CardBody className="cardBody">
                <CardTitle className="cardTitle">PetName</CardTitle>
              </CardBody>
            </Card>
            <Card className="card">
              <CardImg src={pet8} />
              <CardBody className="cardBody">
                <CardTitle className="cardTitle">PetName</CardTitle>
              </CardBody>
            </Card>
          </CardDeck>
        </Container>
      </div>
      </div>
  )
};