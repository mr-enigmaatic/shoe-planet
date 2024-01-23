import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useParams } from "react-router-dom";

function ProductDetails({ products }) {

    const { id } = useParams();

    

    const product = products.find((p) => p.id == id);
    if (!product) {
        console.log("no data");
        return <div>Loading...</div>;
      }
    const price = product ? product.price : null;
    
   
    
    

    // console.log(id);
    console.log(product);
    return (
        <Container>
            <h2>{product.brand}</h2>
            <Row>
                <Col md={6}>
                    <div className="additional-images">
                        {product.images.map((image, index) => (
                            <img key={index} src={image} alt={`Image ${index + 1}`} className="additional-image" />
                        ))}
                    </div>
                </Col>
                <Col md={6}>
                    <h4>Description</h4>
                    <p>{product.description}</p>
                    <h4>Rating: {product.rating}</h4>
                    <div>
                        <h4>Price: ₹{price} <span style={{ color: 'grey', textDecoration: 'line-through' }}>{price + Math.floor(price * product.discountPercentage) / 100}</span><br></br>
                        <small>{product.discountPercentage}% OFF</small></h4>
                        <Button variant="primary">Add to Cart</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails