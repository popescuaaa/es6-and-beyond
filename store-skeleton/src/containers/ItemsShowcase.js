import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Product from '../components/Product';

export default class ItemsShowcase extends Component {
    render() {
        return (
            <Container className="d-flex flex-wrap">
                {this.props.items.map(product => <Product title={product.title} imagePath={product.imagePath} content={product.content} price={product.price} />)}
            </Container>
        )
    }
}
