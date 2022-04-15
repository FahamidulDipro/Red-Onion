import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { FoodLoad } from "../../../App";
import Dinner from "../Dinner";

const LoadDinner = () => {
  const [breakfasts, lunches, dinners] = useContext(FoodLoad);

  return (
    <div>
      <Container fluid>
        <Row className="container">
          {dinners.map((dinner) => (
            <Dinner key={dinner.id} dinner={dinner}></Dinner>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LoadDinner;
