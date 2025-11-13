import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contact from "./Contact/Contact";
import Dispenser from "./Dispenser/Dispenser";
import DispenserDetails from "./Dispenser/DispenserDetails";
import ScrollToTop from "./ScrollToTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // trajanje animacije
      once: true, // animacija se dešava samo jednom
      offset: 100, // kada počinje animacija (px od vrha ekrana)
    });
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aparati" element={<Dispenser />} />
          <Route path="/aparati/:id" element={<DispenserDetails />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
