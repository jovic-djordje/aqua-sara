import { Link } from "react-router-dom";
import { Logo } from "../assets/images";
import "./nav.style.css";

const Navigation = () => {
  return (
    <header>
      <div className="header-holder">
        <Logo clasName="logo" />
        <nav>
          <Link to="/" className="nav-item-link">
            <span className="nav-item">Početna</span>
          </Link>

          <Link to="/aparati" className="nav-item-link">
            <span className="nav-item">Aparati za vodu</span>
          </Link>
          <Link to="/kontakt" className="nav-btn-link">
            <button className="nav-btn">Kontakt</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
