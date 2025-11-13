import { Link } from "react-router-dom";
import { Logo } from "../assets/images";

import "./nav.style.css";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.querySelector(".main-content")?.classList.add("blur");
    } else {
      document.body.style.overflow = "auto";
      document.querySelector(".main-content")?.classList.remove("blur");
    }

    return () => {
      document.body.style.overflow = "auto";
      document.querySelector(".main-content")?.classList.remove("blur");
    };
  }, [isMenuOpen]);

  return (
    <header id="top">
      <div className="header-holder">
        <Link to="/">
          <Logo className="logo" />
        </Link>
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

        <div className={`off-screen-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Početna
              </Link>
            </li>
            <li>
              <Link to="/aparati" onClick={toggleMenu}>
                Aparati za vodu
              </Link>
            </li>
            <li>
              <Link to="/kontakt" onClick={toggleMenu}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div className="mobile-nav">
          <div
            className={`ham-menu ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
