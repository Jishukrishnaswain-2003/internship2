import React, { useState, useEffect } from "react";
import "./footer.css";
import star from '../../assets/Star 1.svg';
import us from '../../assets/United States of America (US).svg';
import img1 from '../../assets/Group 136188.svg';
import img2 from '../../assets/Group 136190.svg';
import img3 from '../../assets/Group 136192.svg';
import img4 from '../../assets/Group 136193.svg';
import img5 from '../../assets/Group 136194.svg';
import img6 from '../../assets/Group 136195.svg';
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const renderDropdown = (title, items, sectionName) => (
    <div className="footer-section">
      <div
        className="footer-heading dropdown-toggle"
        onClick={() => isMobile && toggleSection(sectionName)}
      >
        <span>{title}</span>
        {isMobile && (
          activeSection === sectionName ? <FaChevronUp /> : <FaChevronDown />
        )}
      </div>
      {(activeSection === sectionName || !isMobile) && (
        <div className="footer-dropdown">
          {items.map((item, index) => (
            <div key={index} className="footer-heading-content">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="Footer-block">
      <div className="footer-top">
        <div className="to-know-content">
          <h1 className="footer-heading">BE THE FIRST TO KNOW</h1>
          <p className="footer-top-content">Sign up for updates from mettā muse.</p>
          <div className="subscriber-content">
            <input className="input" placeholder="Enter your e-mail..." />
            <p className="subscribe">SUBSCRIBE</p>
          </div>
        </div>

        <div className="contact-section">
          <h1 className="footer-heading">CONTACT US</h1>
          <p className="footer-top-content">+44 221 133 5360</p>
          <p className="footer-top-content">customercare@mettamuse.com</p>

          <h1 className="footer-heading">CURRENCY</h1>
          <div className="usd-content">
            <img src={us} alt="usd" />
            <img src={star} alt="star" />
            <p>USD</p>
          </div>
          <p className="footer-top-content desktop-note">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        {renderDropdown("mettā muse", ["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs"], "metta")}
        {renderDropdown("Quick Links", ["Orders & Shipping", "Join/Login as a Seller", "Payment & Pricing", "Return & Refunds", "FAQs", "Privacy Policy", "Terms & Conditions"], "quick")}
        {renderDropdown("Follow Us", [
          <div className="social-icons-row" key="socials">
            <IoLogoInstagram className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>
        ], "follow")}

        <div className="footer-section">
          <h1 className="footer-heading">mettā muse ACCEPTS</h1>
          <div className="payments-content">
            <img className="payment-img" src={img1} alt="GPay" />
            <img className="payment-img" src={img2} alt="Mastercard" />
            <img className="payment-img" src={img3} alt="PayPal" />
            <img className="payment-img" src={img4} alt="Amex" />
            <img className="payment-img" src={img5} alt="Apple Pay" />
            <img className="payment-img" src={img6} alt="Shop Pay" />
          </div>
        </div>
      </div>

      <p className="copy-right">Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>
  );
}

export default Footer;
