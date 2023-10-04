import React from "react";
// import { CardImg } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`} className="text-secondary">
                    <Card.Title as="div" className="prduct-title">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <Rating
                        rating={product.rating}
                        text={`${product.numReviews} Reviews`}
                    ></Rating>
                </Card.Text>
                <Card.Text as="h3">${product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
