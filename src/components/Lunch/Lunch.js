import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FoodLoad } from "../../App";

const Lunch = ({ lunch }) => {
  const { name, picture, price } = lunch;

  return (
    <Col lg={4} className="mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{lunch.name}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Go somewhere</Button>
          <p>
            <b>Price: </b>
            {price}
          </p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Lunch;
