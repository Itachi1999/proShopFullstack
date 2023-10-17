import { Link, useNavigate } from "react-router-dom";
import {
    Row,
    Col,
    Form,
    Card,
    Image,
    ListGroup,
    Button,
} from "react-bootstrap";
import Message from "../components/Message";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";

const CartScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const { cartItems, itemsPrice } = cart;
    const totalItems = cartItems.reduce((acc, itm) => acc + itm.qty, 0);

    async function addToCartHandler(item, qty) {
        dispatch(addToCart({ ...item, qty }));
    }

    async function removeFromCartHandler(id) {
        dispatch(removeFromCart(id));
    }

    function checkOutHandler() {
        navigate("/login?redirect=/shipping");
    }

    return (
        <Row>
            <Col md={8}>
                <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <Message>
                        Your Cart is Empty <Link to="/">Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant="flush">
                        {cartItems.map((item) => (
                            <ListGroup.Item>
                                <Row>
                                    <Col md={2}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fluid
                                            rounded
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`product/${item._id}`}>
                                            {item.name}
                                        </Link>
                                    </Col>
                                    <Col md={2}>${item.price}</Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as="select"
                                            value={item.qty}
                                            onChange={(e) =>
                                                addToCartHandler(
                                                    item,
                                                    Number(e.target.value)
                                                )
                                            }
                                        >
                                            {[
                                                ...Array(
                                                    item.countInStock
                                                ).keys(),
                                            ].map((x) => (
                                                <option
                                                    value={x + 1}
                                                    key={x + 1} //Index starts from 0, in keys()
                                                >
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={(e) =>
                                                removeFromCartHandler(item._id)
                                            }
                                        >
                                            <FaTrash />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Subtotal ({totalItems}) Items</h2>${itemsPrice}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                type="button"
                                className="btn btn-block btn-dark"
                                disabled={cartItems.length === 0}
                                onClick={checkOutHandler}
                            >
                                Proceed to Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default CartScreen;
