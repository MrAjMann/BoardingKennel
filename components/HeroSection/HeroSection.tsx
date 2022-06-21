import Image from 'next/image';
import dog from "./assets/doga.jpg";
import styledHero from "./Hero.module.css";
const HeroSection = () => {
  return (
    <section className={styledHero.container}>
      <div className={styledHero.innerWrapper}>

        <div className={styledHero.leftSection}>
          <h1 className={styledHero.title}>Accomodation for all your pets</h1>
          <div className={styledHero.btnWrapper}>
            <button>Book Now</button>
          </div>
        </div>
        <div className={styledHero.rightSection}>
        <div className={styledHero.imgSection}>
          <Image src={dog} layout="responsive" alt="Dog" width='2400px'height='3400px' />
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
