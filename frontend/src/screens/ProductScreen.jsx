// import React from 'react'
import { useParams, Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
// import products from "../products";

const ProductScreen = () => {
    const params = useParams();
    console.log(params);
    const productId = params.id;
    console.log(productId);
    // const product = products.find((p) => p._id === productId);

    const [product, setProduct] = useState({});

    useEffect(
        function () {
            const fetchProduct = async () => {
                const res = await fetch(`/api/product/${productId}`);
                const data = await res.json();

                setProduct(data);
            };

            fetchProduct();
        },
        [productId]
    );

    return (
        <>
            <Link to="/" className="btn btn-secondary my-3">
                Go Back
            </Link>
            <Row>
                <Col md={5}>
                    <Image
                        src={product.image}
                        fluid
                        rounded
                        alt={product.name}
                    />
                </Col>
                <Col md={4}>
                    <ListGroup></ListGroup>
                </Col>
                <Col md={3}></Col>
            </Row>
        </>
    );
};

export default ProductScreen;
