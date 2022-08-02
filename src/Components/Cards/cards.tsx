import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import api from '../../services/apiConfig';


export interface CardProps {
    name: string;
}

function Cards({ name }: CardProps) {

    const [imagem, setImagem] = useState<any>();
    const [id, setId] = useState<any>();

    useEffect(() => {
        api.get("pokemon/" + name)
            .then((response) => {
                const { data } = response;
                setImagem(data.sprites.front_default);
                setId(data.id);
            }
            )
            .catch((error) => console.log(error))
    }, [])

    return (
        <Card className="card__ind" style={{ width: '15rem' }}>
            <Card.Img variant="top" src={imagem} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    #{+ id}
                </Card.Text>
                <Card.Text>
                    dasda
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards;