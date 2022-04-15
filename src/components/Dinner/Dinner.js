import React from "react";
import { Button, Card } from "react-bootstrap";

const Dinner = ({ dinner }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{dinner.name}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dinner;
