import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contact from "./Contact/Contact";
import Dispenser from "./Dispenser/Dispenser";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aparati" element={<Dispenser />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
