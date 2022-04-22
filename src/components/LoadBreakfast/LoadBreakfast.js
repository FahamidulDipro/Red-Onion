import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { FoodLoad } from "../../App";
import BreakFast from "../BreakFast/BreakFast";

const LoadBreakfast = () => {
  const { breakfasts } = useContext(FoodLoad);

  return (
    <div>
      <Container
        fluid
        className="d-flex justify-content-center w-100 align-items-center"
      >
        <Row className="container">
          {breakfasts?.map((breakfast) => (
            <BreakFast key={breakfast._id} breakfast={breakfast}></BreakFast>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LoadBreakfast;
