import "./App.css";

import Kalkulator from "./form/Kalkulator";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Kalkulator />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
