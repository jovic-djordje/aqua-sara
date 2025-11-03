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
};
