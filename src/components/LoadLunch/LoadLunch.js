import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { FoodLoad } from "../../App";
import Lunch from "../Lunch/Lunch";

const LoadLunch = () => {
  const {lunches} = useContext(FoodLoad);
  // const { lunchs} = foods;
  return (
    <div>
      <Container
        fluid
        className="d-flex justify-content-center w-100  align-items-center"
      >
        <Row className="container">
          {lunches?.map((lunch) => (
            <Lunch key={lunch._id} lunch={lunch}></Lunch>
          ))}
           
        </Row>
      </Container>
    </div>
  );
};

export default LoadLunch;
