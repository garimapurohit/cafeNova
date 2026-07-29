import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doCreateUserWithEmailAndPassword
} from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const LoginPopup = ({ setShowLogin }) => {
  const { userLoggedIn } = useAuth();

  const [currentState, setCurrentState] = useState("Sign up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (isSigningIn) return;
    setIsSigningIn(true);

    try {
      if (currentState === "Login") {
        await doSignInWithEmailAndPassword(email, password);
      } else {
        const userCred = await doCreateUserWithEmailAndPassword(email, password);

        await updateProfile(userCred.user, {
          displayName: name
        });
      }
      setShowLogin(false);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsSigningIn(false);
    }
  };

  const onGoogleSignIn = async () => {
    if (isSigningIn) return;
    setIsSigningIn(true);
    try {
      await doSignInWithGoogle();
      setShowLogin(false);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsSigningIn(false);
    }
  };

  if (userLoggedIn) {
    setShowLogin(false);
  }

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={onSubmit}>
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt="close"
            onClick={() => setShowLogin(false)}
          />
        </div>

        <div className="login-popup-inputs">
          {currentState === "Sign up" && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {errorMessage && <p className="error-text">{errorMessage}</p>}

        <button type="submit" disabled={isSigningIn}>
          {isSigningIn
            ? currentState === "Sign up"
              ? "Creating Account..."
              : "Logging in..."
            : currentState === "Sign up"
            ? "Create Account"
            : "Login"}
        </button>

        {currentState === "Sign up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        )}

        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}

        <div className="divider">
          <span>OR</span>
        </div>

        <button
          type="button"
          className="google-btn"
          onClick={onGoogleSignIn}
          disabled={isSigningIn}
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default LoginPopup;
