import React, { useState } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  let errorElement;

  const [passError, setPassError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const cpassword = event.target.cpassword.value;
    password === cpassword
      ? createUserWithEmailAndPassword(email, password)
      : setPassError(<p className="text-danger">Password didn't match</p>);
  };

  if (error) {
    errorElement = <p className="text-danger">{error?.message}</p>;
  }
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
      {user ? (
        <Toast className="container">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Congrats!</strong>
            <small>1 min ago</small>
          </Toast.Header>
          <Toast.Body> your account created</Toast.Body>
        </Toast>
      ) : null}
      <div className="d-flex justify-content-center  mt-5">
        <Form className="text-start  w-50" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              className="p-3"
              style={{ background: "lightGrey" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              className="p-3"
              style={{ background: "lightGrey" }}
            />
          </Form.Group>
          {errorElement}

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              className="p-3"
              style={{ background: "lightGrey" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="cpassword"
              className="p-3"
              style={{ background: "lightGrey" }}
            />
          </Form.Group>
          {passError}

          <Button
            variant="primary"
            type="submit"
            className="w-100 p-3 bg-danger text-light border-0 fw-bold"
          >
            Signup
          </Button>
          <div className="text-center mt-2">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-danger text-decoration-none fw-bold  "
            >
              Please Login
            </NavLink>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
