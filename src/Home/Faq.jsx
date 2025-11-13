import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./home.style.css";
import { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);
  const openAnswer = (id) => {
    setIsOpen(isOpen === id ? null : id);
  };

  const questions = [
    {
      id: 1,
      qst: "Koliko često treba čistiti aparat za vodu?",
      answ: "Preporučuje se da aparat čistite najmanje jednom mesečno, dok se dubinsko čišćenje (uključujući unutrašnje komponente i rezervoare) preporučuje na svaka 3 do 6 meseci, u zavisnosti od upotrebe.",
    },
    {
      id: 2,
      qst: "Koji proizvodi su bezbedni za čišćenje dispenzera?",
      answ: "Koristite blage deterdžente ili specijalizovana sredstva za čišćenje aparata za vodu. Izbegavajte agresivne hemikalije (kao što su varikina i abrazivna sredstva), jer mogu oštetiti plastiku i ostaviti štetne ostatke.",
    },
    {
      id: 3,
      qst: "Da li mogu koristiti sirće za čišćenje aparata?",
      answ: "Da, rastvor sirćeta i vode (1:3) može se koristiti za uklanjanje kamenca i dezinfekciju. Nakon toga, isperite aparat čistom vodom najmanje 2-3 puta kako biste uklonili miris i ostatke sirćeta.",
    },
    {
      id: 4,
      qst: "Kako očistiti rezervoar za vodu?",
      answ: "Isključite aparat iz struje, ispraznite rezervoar, zatim ga očistite mekanom četkom i blagim sredstvom. Dobro isperite i osušite pre ponovnog punjenja.",
    },
    {
      id: 5,
      qst: "Da li je potrebno čistiti slavine i spoljašnje delove?",
      answ: "Da. Slavine, dugmići i spoljašnji delovi aparata treba da se brišu svakodnevno čistom, vlažnom krpom i blagim sredstvom, kako bi se sprečilo nakupljanje bakterija.",
    },
    {
      id: 6,
      qst: "Koliko često treba menjati flašu ili dopunjavati rezervoar?",
      answ: "Vodu iz flaše ili rezervoara treba potrošiti u roku od 5 do 7 dana nakon otvaranja, a aparat se ne preporučuje da ostane bez upotrebe sa vodom duže od toga.",
    },
    {
      id: 7,
      qst: "Šta ako se voda iz aparata oseća neprijatno ili ima čudan ukus?",
      answ: "To je najčešće znak da je vreme za čišćenje aparata. Takođe, proverite izvor vode. Uvek koristite provereno čistu i bezbednu vodu.",
    },
    {
      id: 8,
      qst: "Kako sprečiti razvoj bakterija i algi u aparatu?",
      answ: "Redovno čišćenje, korišćenje poklopaca i čuvanje aparata van direktne sunčeve svetlosti pomažu da se spreči razvoj mikroorganizama.",
    },
    {
      id: 9,
      qst: "Da li aparat treba isključivati kada se ne koristi duže vreme?",
      answ: "Da. Ako ne planirate da koristite aparat duže od nekoliko dana, ispraznite rezervoar i isključite ga iz struje. Pre ponovnog korišćenja, obavezno ga očistite.",
    },
    {
      id: 10,
      qst: "Da li je servisiranje aparata potrebno?",
      answ: "Preporučuje se godišnja provera od strane ovlašćenog servisera SARRA & SARRA d.o.o., naročito kod modela sa kompresorskim hlađenjem, kako bi aparat radio optimalno i bezbedno.",
    },
  ];
  return (
    <section className="faq">
      <div className="faq-section-holder sections-holder">
        <div className="faq-text-holder" data-aos="fade-up">
          <h2 className="faq-title h2-titles">
            Održavanje i higijena aparata za vodu
          </h2>
          <p className="faq-text">Pronađite odgovore na česta pitanja</p>
        </div>

        <div className="questions-holder">
          {questions.map((qusetion, index) => (
            <div
              className="faq-holder"
              key={qusetion.id}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="qst-holder">
                <h4>{qusetion.qst}</h4>

                {isOpen === qusetion.id ? (
                  <FaMinus
                    className="qst-icon"
                    onClick={() => openAnswer(qusetion.id)}
                  />
                ) : (
                  <FaPlus
                    className="qst-icon"
                    onClick={() => openAnswer(qusetion.id)}
                  />
                )}
              </div>
              <p className={`answ  ${isOpen === qusetion.id ? "open" : ""}`}>
                {qusetion.answ}
              </p>
            </div>
          ))}
        </div>

        <div className="faq-cta" data-aos="zoom-in" data-aos-delay="100">
          <h3>Trebate više informacija?</h3>
          <p>Slobodno nas kontaktirajte kako bi pronašli pravo rešenje</p>
          <Link to="/kontakt" className="faq-cta-link">
            <button className="faq-cta-btn">Kontakt</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Faq;
