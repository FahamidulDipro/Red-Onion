import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Dinner = ({ dinner }) => {
  return (
    <Col lg={4} className="mt-5 ">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{dinner.name}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Dinner;
