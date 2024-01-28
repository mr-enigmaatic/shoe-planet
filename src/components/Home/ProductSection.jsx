
import React from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function ProductSection() {

  const products = useSelector((state)=> state.products.products)
  
  console.log(products);
  return (
    <Container className="bg-dark text-center justify-content-center pb-3" fluid>
      <Row>
        {products && products.map((product, index) => (
          <Col md={3} sm={6} className='mt-3 d-flex justify-content-center' key={index} >
            <Card style={{ width: '18rem', height: '29rem'}} className='shadow mb-3'>
              <Card.Img variant="top" src={product.images[0]} style={{ height: '18rem' }} />
              <Card.Body>
                <Card.Title className='fs-4'>{product.brand}</Card.Title>
                <Card.Text style={{ height: '2.8rem', overflow: 'hidden', textAlign:'left', fontSize:'14px' }}>{product.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="price fw-bold fs-3">₹ {product.price * 88}</span>
                  <Button as = {Link} to ={`/details/${product.id}`} variant="primary">view details</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

        ))}
      </Row>
    </Container>
  )
}

export default ProductSection