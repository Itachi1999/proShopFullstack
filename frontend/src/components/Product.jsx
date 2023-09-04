import React from "react";
// import { CardImg } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`} className="text-secondary">
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="h3">$x{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
