import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });


  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registered:", formData);
  };

  const navigate = useNavigate()

  const handleclick = () =>{
    navigate('/login')
  }

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
        <p className="account">Already have an account? <span className="signup" onClick={handleclick}>Sign in</span></p>
      </form>
    </div>
  );
};

export default Register;
