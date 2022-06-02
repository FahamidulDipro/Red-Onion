import React from "react";
import { Card, Figure, ListGroup, ListGroupItem } from "react-bootstrap";
import CartItem from "./CartItem";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useQuery } from "react-query";
const Cart = () => {
  const [user] = useAuthState(auth);

  // const { data: cartData } = useQuery("cartData", () =>
  //   fetch(`http://localhost:5000/cart/${user?.email}`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(cartData),
  //   }).then((res) => res.json())
  // );

  return (
    <div className="d-flex justify-content-end container align-items-center mt-5">
      <Card style={{ width: "18rem" }} className="mt-5 text-start">
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <CartItem></CartItem>
          </ListGroupItem>
          <ListGroupItem>Subtotal: </ListGroupItem>
          <ListGroupItem>Tax: </ListGroupItem>
          <ListGroupItem>Delivery Fee: </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <h2>Total: </h2>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;
