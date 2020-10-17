import React from "react";
import './bookmark.css';
import text1 from './text1.png'
import text2 from './text2.png'
import jame from './jame.png'
import yoda from './yoda.png'
import { Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck, CardFooter} from 'reactstrap';

const Bookmark = () => {
    return (
        <div>
            <head>
                <title>Bookmark</title>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');
                </style>
            </head>
            <div className="bookmark-container">
                <div className="bookmark">
                    Bookmark
                </div>
                <Container id="middle">
                    <CardDeck>
                        <Card className="card">
                            <CardImg src={text1} />
                            <CardBody className="cardBody">
                                <CardTitle className="cardTitle">PetName</CardTitle>
                            </CardBody>
                        </Card>
                        <Card className="card">
                            <CardImg src={jame} />
                            <CardBody className="cardBody">
                                <CardTitle className="cardTitle">PetName</CardTitle>
                            </CardBody>
                        </Card>
                        <Card className="card">
                            <CardImg src={yoda} />
                            <CardBody className="cardBody">
                                <CardTitle className="cardTitle">PetName</CardTitle>
                            </CardBody>
                        </Card>
                        <Card className="card">
                            <CardImg src={text2} />
                            <CardBody className="cardBody">
                                <CardTitle className="cardTitle">PetName</CardTitle>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Container>
            </div>
        </div>
    )
}

export default Bookmark;