import { useState } from "react";
import {
  OfferImgFive,
  OfferImgFour,
  OfferImgOne,
  OfferImgSeven,
  OfferImgSix,
  OfferImgThree,
  OfferImgTwo,
} from "../assets/images";
import "./dispenser.style.css";
import { BsFilterLeft, BsFilterRight } from "react-icons/bs";

const DispenserOffer = () => {
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [open, setOpen] = useState(false);

  const toggleFilter = () => {
    setOpen((state) => !state);
  };

  const offer = [
    {
      id: 1,
      img: <OfferImgOne className="dis-offer-img" />,
      text: "Coolisha",
      cat: "Basic",
      price: "18,000.00 рсд",
      group: "basic",
    },
    {
      id: 2,
      img: <OfferImgTwo className="dis-offer-img" />,
      text: "DZV-1701",
      cat: "Basic",
      price: "16,800.00 рсд",
      group: "basic",
    },
    {
      id: 3,
      img: <OfferImgThree className="dis-offer-img" />,
      text: "DZV-2004 K",
      cat: "Standard",
      price: "17,500.00 рсд",
      group: "standard",
    },
    {
      id: 4,
      img: <OfferImgFour className="dis-offer-img" />,
      text: "DZV-2003",
      cat: "Premium",
      price: "19,700.00 рсд",
      group: "premium",
    },
    {
      id: 5,
      img: <OfferImgFive className="dis-offer-img" />,
      text: "DZV-2005",
      cat: "Premium",
      price: "19,900.00 рсд",
      group: "premium",
    },
    {
      id: 6,
      img: <OfferImgSix className="dis-offer-img" />,
      text: "DZV-2021",
      cat: "Lux",
      price: "20,500.00 рсд",
      group: "lux",
    },
    {
      id: 7,
      img: <OfferImgSeven className="dis-offer-img" />,
      text: "DZV-2024 BD A",
      cat: "Lux",
      price: "21,200.00 рсд",
      group: "lux",
    },
  ];

  const filteredOffer =
    selectedGroup === "all"
      ? offer
      : offer.filter((offers) => offers.group === selectedGroup);

  return (
    <section className="dispenser-offer">
      <div className="dispenser-offer-holder sections-holder">
        <div className="dispenser-offer-text-holder">
          <div className="dispenser-title-holder">
            <h2>Naša ponuda aparata</h2>
            <p>
              Pronađite modele različitih kapaciteta, dizajna i sistema hlađenja
            </p>
          </div>
          <div className={`filter-holder ${open ? "active" : ""}`}>
            <div className="filter-buttons">
              <button onClick={() => setSelectedGroup("all")}>
                Svi modeli
              </button>
              <button onClick={() => setSelectedGroup("basic")}>Basic</button>
              <button onClick={() => setSelectedGroup("standard")}>
                Standard
              </button>
              <button onClick={() => setSelectedGroup("premium")}>
                Premium
              </button>
              <button onClick={() => setSelectedGroup("lux")}>Lux</button>
            </div>
            <BsFilterRight
              className="filter-icon"
              onClick={() => toggleFilter()}
            />
            <BsFilterLeft className="display" onClick={() => toggleFilter()} />
          </div>
        </div>

        <div className="dispensers">
          {filteredOffer.map((dispenser) => (
            <div className="dis-cart" key={dispenser.id}>
              {dispenser.img}
              <div className="dis-cart-dtl">
                <p className="dis-cart-name">{dispenser.text}</p>
                <span className="dis-cart-price">{dispenser.price}</span>
              </div>
              <p className="dis-cart-cat">{dispenser.cat}</p>
              <button className="dis-cart-btn">Više detalja</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default DispenserOffer;
