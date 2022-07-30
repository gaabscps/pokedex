import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css'

function Cards() {
    return (
        <div className="cards__container">
            <main>
                <div>
                    <Card className="card__ind">
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/70/4b/bd/704bbdf2f8328b62160eb1244ac9ece5.jpg" className="pokemon__card"/>
                    <Card.Body>
                        <Card.Title>Pokemon Name</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>Status 1</li>
                                <li>Status 2</li>
                                <li>Status 3</li>
                            </ul>
                        </Card.Text>
                        <Button variant="primary" style={{width: '100%'}}>Sobre</Button>
                    </Card.Body>
                    </Card>
                </div>
            </main>
        </div>
    )
}

export default Cards;