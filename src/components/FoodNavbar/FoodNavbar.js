import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const FoodNavbar = () => {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <NavLink
          to={"/breakfast"}
          className="mx-3 text-decoration-none text-dark"
        >
          Breakfast
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to={"/lunch"} className="mx-3 text-decoration-none text-dark">
          Lunch
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to={"/dinner"} className="mx-3 text-decoration-none text-dark">
          Diner
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default FoodNavbar;
