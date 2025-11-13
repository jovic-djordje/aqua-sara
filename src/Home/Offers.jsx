import { WaterFour, WaterOne, WaterThree, WaterTwo } from "../assets/images";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import "./home.style.css";

const Offer = () => {
  const waterOffers = [
    {
      id: 1,
      title: "Aqua Sarra voda",
      text: "Aqua Sarra je voda za piće prečišćena metodom reverzne osmoze, koja uklanja sve neželjene materije, bakterije i viruse, propuštajući samo čiste molekule vode.",
      img: <WaterOne className="offer-sec-img" />,
      link: "https://aquasarra.rs/aqua-sarra-voda/",
    },
    {
      id: 2,
      title: "Kraljeva voda",
      text: "Kraljeva voda izvire na netaknutoj planini Zlatibor, na 1000 m nadmorske visine, daleko od urbanih sredina, i flašira se direktno na izvoru bez ikakve prerade.",
      img: <WaterTwo className="offer-sec-img" />,
      link: "https://aquasarra.rs/kraljeva-voda/",
    },
    {
      id: 3,
      title: "Odmenjska voda",
      text: "Odmenjska voda je prirodna mineralna voda sa niskim sadržajem natrijuma, pogodna i za osobe sa povišenim krvnim pritiskom ili ograničenim unosom soli.",
      img: <WaterThree className="offer-sec-img" />,
      link: "https://aquasarra.rs/odmenjska-voda/",
    },
    {
      id: 4,
      title: "Golijska ledena",
      text: "Golijska ledena je kristalno čista izvorska voda sa niskim sadržajem natrijuma i mineralnih soli, neutralno-alkalnog pH, koja se lako apsorbuje, deluje osvežavajuće.",
      img: <WaterFour className="offer-sec-img" />,
      link: "https://aquasarra.rs/golijska-ledena-voda/",
    },
  ];
  return (
    <section className="offer">
      <div className="offer-holder sections-holder">
        <div className="offer-text-holder" data-aos="fade-up">
          <h2 className="offer-title h2-titles">Ponuda voda</h2>
          <p className="offer-text">
            Pored aparata za vodu vrhunskog kvaliteta, Aqua Sarra se bavi
            proizvodnjom i distribucijom vode u balonima namenjenu za
            svakodnevnu upotrebu.
          </p>
        </div>
        <div className="offer-carts-holder">
          {waterOffers.map((water, index) => (
            <div
              className="offer-cart"
              key={water.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="offer-cart-text">
                <h3>{water.title}</h3>
                <p>{water.text}</p>
                <Link
                  to={water.link}
                  className="cart-offer-btn-link"
                  target="blankt_"
                >
                  <button className="cart-offer-btn">
                    Pročitaj više <FaAngleRight className="btn-icon" />
                  </button>
                </Link>
              </div>
              {water.img}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Offer;
