
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2><span>♧</span> Pages</h2>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">♥</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">◎</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about">Services</Link></li>
            <li><Link to="/contact">Appointments</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Utility Pages</h3>
          <ul>
            <li><a href="#">Start here</a></li>
            <li><a href="#">Style guide</a></li>
            <li><a href="#">404 not found</a></li>
            <li><a href="#">Password protected</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Keep in Touch</h3>

          <p>
            <strong>Address :</strong>
            <span>24A Kingston St, Los Vegas<br />NC 28202, USA.</span>
          </p>

          <p>
            <strong>Mail :</strong>
            <span>support@doctors.com</span>
          </p>

          <p>
            <strong>Phone :</strong>
            <span>(+22) 123 - 4567 - 900</span>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © Drafted by <strong>Victorflow</strong> - Powered by <strong>Webflow</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
