import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { FoodLoad } from "../../../App";
import Dinner from "../Dinner";

const LoadDinner = () => {
  const {dinners} = useContext(FoodLoad);
 

  return (
    <div>
      <Container
        fluid
        className="d-flex justify-content-center w-100   align-items-center"
      >
        <Row className="container">
          {dinners?.map((dinner) => (
            <Dinner key={dinner._id} dinner={dinner}></Dinner>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LoadDinner;
