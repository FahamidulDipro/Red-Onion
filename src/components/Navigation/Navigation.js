import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Navigation = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="fixed-top"
    >
      <Container>
        <Navbar.Brand>
          <NavLink
            className="text-danger fw-bold text-decoration-none"
            to={"/"}
          >
            Red Onion
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink
              to="/additems"
              className="text-secondary mx-3 text-decoration-none fw-bold mt-1"
            >
              Add Item
            </NavLink>
            <NavLink
              to="/cart"
              className="text-secondary mx-3 text-decoration-none fw-bold mt-1"
            >
              Cart
            </NavLink>
            {user ? (
              <span>
                <Button variant="danger rounded-pill" onClick={logOut}>
                  Logout
                </Button>

                <span>
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      alt="userImage"
                      style={{
                        width: "30px",
                        borderRadius: "50%",
                        marginLeft: "20px",
                      }}
                    />
                  ) : null}
                </span>
                <span style={{ color: "green" }} className="fw-bold ms-3">
                  {user?.displayName}
                </span>
              </span>
            ) : (
              <span>
                <NavLink
                  to="/login"
                  className="text-secondary mx-3 text-decoration-none fw-bold mt-1"
                >
                  Login
                </NavLink>

                <NavLink to={"/signup"}>
                  <Button variant="danger rounded-pill">Signup</Button>
                </NavLink>
              </span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
