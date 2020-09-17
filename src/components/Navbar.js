import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/shoelogo.png";
export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} id="logo" alt="Beach Resort" width="150px" height="60px" />
          </Link>
          <button type="button" className="nav-btn" onClick={this.handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>

        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/collection">Collections</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/join">Join</Link></li>
        </ul>
      </div>
    </nav>
  
    );
  }
}