import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export interface CardProps{ 
    name:string;
}

function Cards({name}:CardProps) {
    return (
        <Card className="card__ind" style={{ width: '15rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards;