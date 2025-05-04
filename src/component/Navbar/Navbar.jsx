import React, { useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import logo from "../../assets/Logo.png";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleclick = () =>{
    navigate('/register')
  }

  const handlesign = ()=>{
    navigate('/login')
  }
  return (
    <nav className="navbar">
      <div className="navbar-top">
        {/* Left side */}
        <div className="navbar-left">
          <FiMenu className="menu" onClick={toggleMenu} />
          <div className="navbar-logo">
            <img src={logo} alt="logo" className="logo-img" />
          </div>
        </div>

        {/* Center */}
        <div className="navbar-title">
          <h1>LOGO</h1>
        </div>

        {/* Right side */}
        <div className="navbar-icons">
          <FiSearch />
          <FiHeart />
          <FiShoppingBag />
          <FiUser className="fiuser" onClick={handleclick} />
          <div className="navbar-lang">
            ENG <FaChevronDown size={10} />
          </div>
        </div>
      </div>

      {/* Slide-down menu */}
      {menuOpen && (
        <div className="navbar-slide-menu">
          <FiX className="close-icon" onClick={toggleMenu} />
          <div className="slide-links">
            <a href="#">SHOP</a>
            <a href="#">SKILLS</a>
            <a href="#">STORIES</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT US</a>
            <button className="signin" onClick={handlesign}>Sign in</button>
            <p className="account">Don't have an account? <span className="signup" onClick={handleclick}>Sign up</span></p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
