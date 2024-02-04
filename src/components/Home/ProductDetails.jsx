
import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

function ProductDetails() {

    const { id } = useParams();
    const products = useSelector((state)=> state.products.products)

    const product = products.find((p) => p.id == id);
    if (!product) {
        console.log("no data");
        return <ProgressBar animated now={100} label="Loading..." className='fw-bold'/>;
      }
    const price = product.price * 88;
    
    // console.log(id);
    console.log(product);
    return (
        <Container>
            <h2>{product.brand}</h2>
            <Row>
                <Col md={6}>
                    <div className="additional-images">
                        {product.images.map((image, index) => (
                            <img key={index} src={image} alt={`Pic ${index + 1}`} className="additional-image" />
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