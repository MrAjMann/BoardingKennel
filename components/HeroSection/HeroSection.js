import Image from "next/image";
import dog from "./assets/dog.png";
import styledHero from "./Hero.module.css";
const HeroSection = () => {
  return (
    <div className={styledHero.container}>
      <div className={styledHero.innerWrapper}>
        <div className={styledHero.imgSection}>
          <Image src={dog} layout="fill" alt="Dog" />
        </div>
        <div>
          <h1 className={styledHero.title}>Accomodation for all your pets</h1>
          <div className={styledHero.btnWrapper}>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
