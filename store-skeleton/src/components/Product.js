import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Product(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imagePath} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.content}</Card.Text>
                <Button variant="primary">Buy: {props.price} $</Button>
            </Card.Body>
        </Card>
    )
}
