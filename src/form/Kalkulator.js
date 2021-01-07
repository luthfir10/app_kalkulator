import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class Kalkulator extends Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      operator: ["+", "-", "*", "/"],
      total: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ num1: event.target.value });
    this.setState({ num2: event.target.num2 });
    this.setState({ num3: event.target.num3 });
  }

  OperatorClick = (operator) => {
    console.log(operator);
  };

  render() {
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
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Input Angka 1"
                  value={this.state.num1}
                  onChange={this.handleChange}
                />
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
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Input Angka 2"
                  value={this.state.num2}
                  onChange={this.handleChange}
                />
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
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Input Angka 3"
                  value={this.state.num3}
                  onChange={this.handleChange}
                />
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
              {this.state.operator.map((operator, index) => {
                return (
                  <Col xs={3}>
                    <Button
                      key={index}
                      onClick={() => this.OperatorClick(this.state)}
                      variant="outline-primary"
                      size="lg"
                    >
                      {operator}
                    </Button>
                  </Col>
                );
              })}
            </Form.Row>
            <br />
            <Form.Row>
              <Col xs={10}>
                <hr
                  style={{
                    color: "#000000",
                    backgroundColor: "#000000",
                    height: 0.5,
                    borderColor: "#000000",
                  }}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col xs={9}>
                <h3>Hasil:</h3>
              </Col>
              <Col xs={3}>
                <h3>{this.state.total}</h3>
              </Col>
            </Form.Row>
          </Card.Body>
        </Card>
      </Form>
    );
  }
}

export default Kalkulator;
