
import {
  FaBook,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaShoppingCart
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="header-left">
          <div className="logo">
            <FaBook className="logo-icon" />
            <h2>Pages</h2>
          </div>

          <div className="socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/about">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="header-right">
          <div className="cart">
            <FaShoppingCart />
            <span>01</span>
          </div>

          <button className="order-btn">Order Today</button>
        </div>

      </div>
    </header>
  );
}

export default Header;
