import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const handleSocialLogin = (event) => {
    event.preventDefault();
    signInWithGoogle();
    navigate("/");
  };
  return (
    <div>
      <h3>Or</h3>
      <hr />
      <Button
        variant="primary"
        type="submit"
        className="w-100 p-3 bg-info text-light border-0 fw-bold"
        onClick={handleSocialLogin}
      >
        Sign in with Google
      </Button>
    </div>
  );
};

export default SocialLogin;
