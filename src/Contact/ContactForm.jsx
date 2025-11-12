import { LuMail } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { TbId } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import "./contact.style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import supabase from "../library/supabase";

const ContactForm = () => {
  const [input, setInput] = useState({
    name: "",
    secondName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Tvoja postojeća handleInput funkcija
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Ukloni error kad korisnik počne da kuca
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validacija
  const validateForm = () => {
    const newErrors = {};

    if (!input.name.trim()) newErrors.name = "Ovo polje je obavezno";
    if (!input.phone.trim()) newErrors.phone = "Ovo polje je obavezno";
    if (!input.email.trim()) newErrors.email = "Ovo polje je obavezno";
    if (!input.secondName.trim())
      newErrors.secondName = "Ovo polje je obavezno";
    if (!input.message.trim()) newErrors.message = "Ovo polje je obavezno";

    // Email validacija (ako je unet)
    if (input.email && !/\S+@\S+\.\S+/.test(input.email)) {
      newErrors.email = "Unesite važeću email adresu";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccess(false);

    try {
      const { data, error } = await supabase.from("contact_messages").insert([
        {
          name: input.name,
          secondName: input.secondName,
          email: input.email,
          phone: input.phone,
          message: input.message,
        },
      ]);

      if (error) throw error;

      //console.log("Contact message saved:", data);
      setSuccess(true);

      setInput({
        name: "",
        secondName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      setErrors({ general: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="form-section">
      <div className="form-section-holder sections-holder">
        <div className="form-text-holder">
          <div className="title-holder">
            <h2 className="form-title">Javite nam se</h2>
            <p className="form-text">
              Jasna rešenja počinju iskrenom komunikacijom.
            </p>
          </div>

          <div className="buss-info">
            {/* EMAIL */}
            <div className="info-details">
              <LuMail className="info-detail-icon" />
              <a href="mailto:info@aquasarra.rs">
                <span>info@aquasarra.rs</span>
              </a>
            </div>

            {/* FAX */}
            <div className="info-details">
              <LuPhone className="info-detail-icon" />
              <a href="tel:+381114127377">
                <span>011/412 73 77</span>
              </a>
            </div>

            {/* MOBILE */}
            <div className="info-details">
              <HiOutlineDevicePhoneMobile className="info-detail-icon" />
              <div className="mobiles">
                <a href="tel:+38163320085">
                  <span>063/32-00-85</span>
                </a>{" "}
                | <a href="tel:+381638094839">063/8094-839</a>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="info-details">
              <GrLocation className="info-detail-icon" />
              <span>Požeška 69/II-22, 11030 Beograd</span>
            </div>

            {/* PIB */}
            <div className="info-details">
              <TbId className="info-detail-icon" />
              <span>104069032</span>
            </div>
          </div>
        </div>

        {success ? (
          <div className="success-message">
            <h3 className="success-mess-title">
              <FaCheck className="success-mess-icon" />
              Poruka je uspešno poslata!
            </h3>
            <p className="success-mess-text">
              Hvala što ste nas kontaktirali. Uskoro ćemo vam odgovoriti!
            </p>
            <button onClick={() => setSuccess(false)} className="form-btn">
              Nazad na formu
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* FIRST AND LAST NAME */}

            {errors.general && (
              <div
                className="error-message"
                style={{ color: "red", marginBottom: "1rem" }}
              >
                {errors.general}
              </div>
            )}
            <div className="name">
              <div className="first-name">
                <div className="label-holder">
                  {" "}
                  <label htmlFor="name">Ime</label>
                  {errors.name && <p>{errors.name}</p>}
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleInput}
                  value={input.name}
                  style={{
                    outline: errors.name ? "2px solid #eb2f06" : "none",
                  }}
                />
              </div>

              <div className="first-name second-name">
                <div className="label-holder">
                  {" "}
                  <label htmlFor="secondName">Prezime</label>
                  {errors.secondName && <p>{errors.secondName}</p>}
                </div>
                <input
                  type="text"
                  name="secondName"
                  id="secondName"
                  onChange={handleInput}
                  value={input.secondName}
                  style={{
                    outline: errors.secondName ? "2px solid #eb2f06" : "none",
                  }}
                />
              </div>
            </div>

            {/* CONTACT AND EMAIL */}
            <div className="contact">
              <div className="email">
                <div className="label-holder">
                  {" "}
                  <label htmlFor="email">Email</label>
                  {errors.email && <p>{errors.email}</p>}
                </div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleInput}
                  value={input.email}
                  style={{
                    outline: errors.email ? "2px solid #eb2f06" : "none",
                  }}
                />
              </div>

              <div className="email phone">
                <div className="label-holder">
                  {" "}
                  <label htmlFor="phone">Telefon</label>
                  {errors.phone && <p>{errors.phone}</p>}
                </div>

                <input
                  type="number"
                  name="phone"
                  id="phone"
                  min="0"
                  onChange={handleInput}
                  value={input.phone}
                  style={{
                    outline: errors.phone ? "2px solid #eb2f06" : "none",
                  }}
                />
              </div>
            </div>

            <div className="message">
              <div className="label-holder">
                <label htmlFor="message">Poruka</label>
                {errors.message && <p>{errors.message}</p>}
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Kako vam možemo pomoći?"
                value={input.message}
                onChange={handleInput}
                style={{
                  outline: errors.message ? "2px solid #eb2f06" : "none",
                }}
              ></textarea>
            </div>
            <button type="submit" className="form-btn" disabled={loading}>
              {loading ? "Šalje se..." : "Pošalji"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
export default ContactForm;
