import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { FoodLoad } from "../../App";

const Lunch = (props) => {
  const { lunch } = props;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{lunch.name}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Lunch;
