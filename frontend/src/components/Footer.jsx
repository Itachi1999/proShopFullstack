import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">ProShop &copy; {currentYear}</Col>
        </Row>
      </Container>
    </footer>
  );
}
