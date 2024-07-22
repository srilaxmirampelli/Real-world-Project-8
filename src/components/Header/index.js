import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import "./index.css";

const Header = () => (
  <nav className="header-container">
    <li className="logo-container">
      <GiHamburgerMenu size={20} color="white" className="logo" />
      <p className="logo-name">IndigoLearn</p>
    </li>
    <div>
      <ul className="nav-list">
        <li className="nav-item">BUY COURSES</li>
        <li className="nav-item">BUY PRODUCTS</li>
        <li className="nav-item">PROGRAMS</li>
        <li className="nav-item">FREE RESOURCES</li>
      </ul>
    </div>
    <button className="login-button" type="button">
      <FaUserCircle className="user-icon" />
      Log In/Sign Up
    </button>
  </nav>
);

export default Header;
