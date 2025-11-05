import { Logo } from "../assets/images";
import { Link } from "react-router-dom";
import "./footer.style.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-holder">
        <div className="footer-nav">
          <Logo className="logo" />
          <nav className="footer-nav-holder">
            <Link to="/" className="nav-item-link">
              <span className="nav-item">Početna</span>
            </Link>

            <Link to="/aparati" className="nav-item-link">
              <span className="nav-item">Aparati za vodu</span>
            </Link>
            <Link to="/kontakt" className="nav-item-link">
              <span className="nav-item">Kontakt</span>
            </Link>
          </nav>
        </div>

        <div className="copy">
          <p>© 2025 SARRA & SARRA. Sva prava zadržava.</p>
          <span>Coded by Djordje</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
