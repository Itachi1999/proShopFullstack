import { Badge, Nav, Navbar, Container } from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart); //state.cart, name taken from reducer name in store.js store

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <FaShoppingCart />
                                    Cart
                                    {cartItems.length > 0 && (
                                        <Badge
                                            pill
                                            bg="info"
                                            style={{ maginLeft: "5px" }}
                                        >
                                            {cartItems.reduce(
                                                (a, c) => a + c.qty,
                                                0
                                            )}
                                        </Badge>
                                    )}
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>
                                    <FaUser />
                                    Sign In
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export { Header };
