import React, { useRef } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { NavLink } from "react-router-dom";

//Login with email and password hook
const Login = () => {
 
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  let errorElement;
  //Login handling function
  const handleLogin = event=>{ 
    event.preventDefault();
   const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(user);
    signInWithEmailAndPassword(email,password);
  }
  
  if(error){
    errorElement = <p className='text-danger'>{error?.message}</p>
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
            <strong className="me-auto">Success!</strong>
       
          </Toast.Header>
          <Toast.Body> Hi <span className='text-success 
          fw-bold'>{user._tokenResponse.email}</span></Toast.Body>
        </Toast>
      ) : null}
        <div className="d-flex justify-content-center  mt-5">
          <Form className="text-start  w-50" onSubmit={handleLogin}>
          
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
                name='password'
                placeholder="Password"
                className="p-3"
                style={{ background: "lightGrey" }}
                
              />
            </Form.Group>
            {errorElement}
  
         
  
            <Button
              variant="primary"
              type="submit"
              className="w-100 p-3 bg-danger text-light border-0 fw-bold"
            >
              Login
            </Button>
            <div className='text-center mt-2'>Don't have an account? <NavLink to='/signup' className='text-danger text-decoration-none fw-bold  '>Please Register</NavLink></div>
          </Form>
        </div>
      </>
    );
};

export default Login;