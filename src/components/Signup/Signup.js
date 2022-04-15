import React from "react";
import { Button, Form } from "react-bootstrap";

const Signup = () => {
  return (
    <>
      {" "}
      <div className="d-flex justify-content-center">
        <img
          src="./images/logo2.png"
          alt="logo"
          className="img-fluid w-25 mt-5"
        />
      </div>
      <div className="d-flex justify-content-center  mt-5">
        <Form className="text-start  w-50">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="text"
              placeholder="Enter Name"
              className="p-3"
              style={{ background: "lightGrey" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="p-3"
              style={{ background: "lightGrey" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              className="p-3"
              style={{ background: "lightGrey" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              className="p-3"
              style={{ background: "lightGrey" }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100 p-3 bg-danger text-light border-0 fw-bold"
          >
            Signup
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Signup;
