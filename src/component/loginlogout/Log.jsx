import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleclick = () =>{
    navigate('/register')
  }


  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" >Login</button>
        <p className="account">Don't have an account? <span className="signup" onClick={handleclick}>Sign up</span></p>
      </form>
    </div>
  );
};

export default Log;
