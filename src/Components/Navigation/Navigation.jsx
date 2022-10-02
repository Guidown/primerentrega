import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";
const Navigation = () => {
  return (
    <div className="div__container">
      <nav className="container">
        <div className="item">
          <Link to="/" className="link">
            <h5>Guidown Store</h5>
          </Link>
        </div>
        <div className="item">
          <ul>
            <Link to="/store" className="link">
              <li>Store</li>
            </Link>
            <Link to="/contact" className="link">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="item">
          <FaShoppingCart className="icon__cart" />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
