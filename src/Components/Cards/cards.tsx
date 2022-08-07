import React, { useEffect, useState, Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pokemon from '../Pokemon/pokemon'
import api from '../../services/apiConfig';
import { getValue } from '@testing-library/user-event/dist/utils';
import { Link } from 'react-router-dom';

export interface CardProps {
    name: string;
}

function Cards({ name }: CardProps) {

    const [imagem, setImagem] = useState<any>();
    const [id, setId] = useState<any>();
    const [type, setType] = useState()

    useEffect(() => {
        api.get("pokemon/" + name)
            .then((response: { data: any; }) => {
                const { data } = response;
                setImagem(data.sprites.front_default);
                setId(data.id);
                setType(data.types.map((type: { type: any; }) =>
                    type.type.name).join(' & '))
            }
            )
            .catch((error: any) => console.log(error));
    }, []);

    function detalhesPokemon(botaoPokemon: string) {

    }
    return (
        <>
            <Card className="card__ind" style={{ width: '15rem' }}>
                <Card.Img variant="top" src={imagem} />
                <Card.Body>
                    <Card.Title
                        className={name}
                    >{name}</Card.Title>
                    <Card.Text>
                        <p className='card__id'>#{+id}</p>
                    </Card.Text>
                    <Card.Text>
                        <p className="card__type">{type}</p>
                    </Card.Text>
                    <Link className='about__button' to={name}> Sobre {name}</Link>
                </Card.Body>
            </Card>
        </>
    );
}

export default Cards;