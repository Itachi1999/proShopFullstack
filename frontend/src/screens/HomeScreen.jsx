import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import products from "../products";
import Product from "../components/product";
import { useEffect, useState } from "react";

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(function () {
        const fetchProducts = async () => {
            const res = await fetch("api/product");
            const data = await res.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
