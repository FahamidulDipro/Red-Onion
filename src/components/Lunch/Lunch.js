import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FoodLoad } from "../../App";

const Lunch = (props) => {
  const { lunch } = props;

  return (
    <Col lg={4} className="mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{lunch.name}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Lunch;
