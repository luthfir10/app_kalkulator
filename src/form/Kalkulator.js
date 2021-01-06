import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Kalkulator = () => {
  return (
    <Form>
      <br />
      <Card border="primary">
        <Card.Header>
          <center>
            <h3>Kalkulator</h3>
          </center>
        </Card.Header>
        <Card.Body>
          <Form.Row className="align-items-center">
            <Col xs={10}>
              <Form.Control size="lg" type="text" placeholder="Input Angka" />
            </Col>
            <Col xs={2}>
              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row className="align-items-center">
            <Col xs={10}>
              <Form.Control size="lg" type="text" placeholder="Input Angka" />
            </Col>
            <Col xs={2}>
              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row className="align-items-center">
            <Col xs={10}>
              <Form.Control size="lg" type="text" placeholder="Input Angka" />
            </Col>
            <Col xs={2}>
              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row className="align-items-center">
            <Col xs={3}>
              <Button variant="outline-primary" size="lg">
                +
              </Button>
            </Col>
            <Col xs={3}>
              <Button variant="outline-primary" size="lg">
                -
              </Button>
            </Col>
            <Col xs={3}>
              <Button variant="outline-primary" size="lg">
                X
              </Button>
            </Col>
            <Col xs={3}>
              <Button variant="outline-primary" size="lg">
                /
              </Button>
            </Col>
          </Form.Row>
        </Card.Body>
      </Card>
    </Form>
  );
};

export default Kalkulator;
