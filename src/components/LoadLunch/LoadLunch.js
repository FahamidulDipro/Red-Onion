import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { FoodLoad } from "../../App";
import Lunch from "../Lunch/Lunch";

const LoadLunch = () => {
  const Foods = useContext(FoodLoad);
  const [breakfasts, lunches, dinners] = Foods;
  return (
    <div>
      <Container
        fluid
        className="d-flex justify-content-center w-100  align-items-center"
      >
        <Row className="container">
          {lunches.map((lunch) => (
            <Lunch key={lunch.id} lunch={lunch}></Lunch>
          ))}
          {console.log(Foods)}
        </Row>
      </Container>
    </div>
  );
};

export default LoadLunch;
