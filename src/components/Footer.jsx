import { Logo } from "../assets/images";
import { Link } from "react-router-dom";
import "./footer.style.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-holder">
        <div className="footer-nav" data-aos="fade-up" data-aos-duration="600">
          <Link to="#top">
            {" "}
            <Logo className="logo" />
          </Link>
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

        <div
          className="copy"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
        >
          <p>© 2025 SARRA & SARRA. Sva prava zadržava.</p>
          <span>
            Coded by{" "}
            <a href="https://www.instagram.com/djordjejovic_/" target="_blankt">
              Djordje
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
