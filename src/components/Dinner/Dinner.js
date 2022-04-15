import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Dinner = ({ dinner }) => {
  const { name, picture, price } = dinner;
  return (
    <Col lg={4} className="mt-5 ">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{dinner.name}</Card.Title>
          <Card.Text></Card.Text>
          <p>
            <b>Price: </b>
            {price}
          </p>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Dinner;
