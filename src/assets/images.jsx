import logo from "./logo.webp";
import waterOne from "./ponuda-voda.webp";
import waterTwo from "./ponuda-voda (2).webp";
import waterThree from "./ponuda-voda (3).webp";
import waterFour from "./ponuda-voda (4).webp";
import galleryImgOne from "./galerija.webp";
import galleryImgTwo from "./galerija (2).webp";
import galleryImgThree from "./galerija (3).webp";
import galleryImgFour from "./galerija (4).webp";
import galleryImgFive from "./galerija (5).webp";
import galleryImgSix from "./galerija (6).webp";
import offerImgOne from "./Colisha.webp";
import offerImgTwo from "./DZV-1701.webp";
import offerImgThree from "./DZV-2004 K.webp";
import offerImgFour from "./DZV-2003.webp";
import offerImgFive from "./DZV-2005.webp";
import offerImgSix from "./DZV-2021.webp";
import offerImgSeven from "./DZV-2024 BD A.webp";

const Logo = ({ className }) => {
  return <img src={logo} alt="aqua sara logo" className={className} />;
};

const WaterOne = ({ className }) => {
  return <img src={waterOne} alt="aqua sara" className={className} />;
};

const WaterTwo = ({ className }) => {
  return <img src={waterTwo} alt="kraljeva voda" className={className} />;
};

const WaterThree = ({ className }) => {
  return <img src={waterThree} alt="odmenjska voda" className={className} />;
};

const WaterFour = ({ className }) => {
  return <img src={waterFour} alt="golijska ledena" className={className} />;
};

const GalleryImgOne = ({ className }) => {
  return (
    <img
      src={galleryImgOne}
      alt="slika aparata za vodu"
      className={className}
    />
  );
};
const GalleryImgTwo = ({ className }) => {
  return (
    <img
      src={galleryImgTwo}
      alt="slika aparata za vodu"
      className={className}
    />
  );
};

const GalleryImgThree = ({ className }) => {
  return (
    <img
      src={galleryImgThree}
      alt="slika aparata za vodu"
      className={className}
    />
  );
};

const GalleryImgFour = ({ className }) => {
  return (
    <img
      src={galleryImgFour}
      alt="slika aparata za vodu"
      className={className}
    />
  );
};

const GalleryImgFive = ({ className }) => {
  return (
    <img
      src={galleryImgFive}
      alt="slika aparata za vodu"
      className={className}
    />
  );
};

const GalleryImgSix = ({ className }) => {
  return (
    <img
      src={galleryImgSix}
      alt="slika aparata za vodu"
      className={className}
    />
  );
};

const OfferImgOne = ({ className }) => {
  return (
    <img src={offerImgOne} alt="Colisha aparat za vodu" className={className} />
  );
};

const OfferImgTwo = ({ className }) => {
  return (
    <img src={offerImgTwo} alt="Colisha aparat za vodu" className={className} />
  );
};

const OfferImgThree = ({ className }) => {
  return (
    <img
      src={offerImgThree}
      alt="Colisha aparat za vodu"
      className={className}
    />
  );
};

const OfferImgFour = ({ className }) => {
  return (
    <img
      src={offerImgFour}
      alt="Colisha aparat za vodu"
      className={className}
    />
  );
};

const OfferImgFive = ({ className }) => {
  return (
    <img
      src={offerImgFive}
      alt="Colisha aparat za vodu"
      className={className}
    />
  );
};

const OfferImgSix = ({ className }) => {
  return (
    <img src={offerImgSix} alt="Colisha aparat za vodu" className={className} />
  );
};

const OfferImgSeven = ({ className }) => {
  return (
    <img
      src={offerImgSeven}
      alt="Colisha aparat za vodu"
      className={className}
    />
  );
};

export {
  Logo,
  WaterOne,
  WaterTwo,
  WaterThree,
  WaterFour,
  GalleryImgOne,
  GalleryImgTwo,
  GalleryImgThree,
  GalleryImgFour,
  GalleryImgFive,
  GalleryImgSix,
  OfferImgOne,
  OfferImgTwo,
  OfferImgThree,
  OfferImgFour,
  OfferImgFive,
  OfferImgSix,
  OfferImgSeven,
};
