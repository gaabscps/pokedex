import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css'

function Cards() {
    const pokemon = [{
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        nome: 'Bulbassauro',
        id: '#1',
        type: 'Grass',
     }, {
        imagem:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        nome: 'Ivysaur',
        id: '#2',
        type: 'Grass',
     }, {
        imagem:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
        nome: 'Venosaur',
        id: '#3',
        type: 'Grass',
     }]
    return (
        <div className="cards__container">
                    {pokemon.map((poke, index) => (
                        <Card className="card__ind">
                        <Card.Img variant="top" src={poke.imagem} className="pokemon__card"/>
                        <Card.Body>
                            <Card.Title>{poke.nome}</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>{poke.id}</li>
                                    <li>{poke.type}</li>
                                </ul>
                            </Card.Text>

                            <Button variant="primary" style={{width: '100%'}}>Sobre {poke.nome}</Button>
                        </Card.Body>
                        </Card>
                    ))}
        </div>
    )
}

export default Cards;