import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import products from "../products";
import Product from "../components/product";
import { useGetProductsQuery } from "../slices/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">
                    {error?.data?.message || error.error}
                </Message>
            ) : (
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
            )}
        </>
    );
};

export default HomeScreen;
