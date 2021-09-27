import React from "react";
import logo from "../assets/treva.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Treva" />
      </div>
      <div className="footer-list1">
        <h3>Quick Links</h3>
        <p>About Us</p>
        <p>Blog</p>
        <p>Contact</p>
        <p>FAQ</p>
      </div>
      <div className="footer-list2">
      <h3>Legal Stuff
</h3>
        <p>Disclaimer</p>
        <p>Financing</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div className="footer-list3">
      <h3>Social</h3>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>
  );
}

export default Footer;
