import logo from "./logo.webp";
import waterOne from "./ponuda-voda.webp";
import waterTwo from "./ponuda-voda (2).webp";
import waterThree from "./ponuda-voda (3).webp";
import waterFour from "./ponuda-voda (4).webp";

const Logo = ({ clasName }) => {
  return <img src={logo} alt="aqua sara logo" className={clasName} />;
};

const WaterOne = ({ clasName }) => {
  return <img src={waterOne} alt="aqua sara" className={clasName} />;
};

const WaterTwo = ({ clasName }) => {
  return <img src={waterTwo} alt="kraljeva voda" className={clasName} />;
};

const WaterThree = ({ clasName }) => {
  return <img src={waterThree} alt="odmenjska voda" className={clasName} />;
};

const WaterFour = ({ clasName }) => {
  return <img src={waterFour} alt="golijska ledena" className={clasName} />;
};
export { Logo, WaterOne, WaterTwo, WaterThree, WaterFour };
