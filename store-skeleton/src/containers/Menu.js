import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default class Menu extends Component {
    render() {
        return (
            <Container fluid>
                <Navbar className="justify-content-md-center">
                    <Button> Men </Button>

                    <Button> Women </Button> 
                    
                    <Button> Cart </Button>
                </Navbar>
            </Container>
        )
    }
}
