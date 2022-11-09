import Image from 'next/future/image';
import dog from "./assets/dogRollover.jpg";
import styledHero from "./Hero.module.css";
const HeroSection = () => {
  return (
    <section className={styledHero.container}>
      <div className={styledHero.innerWrapper}>

        <div className={styledHero.leftSection}>
          <h1 className={styledHero.title}>Caring for animals is <br />hard enough, <br /> KMS makes it easier.</h1>
          <p className={styledHero.subText}>Securely handle your furry clients information, bookings and payments all in one convienent system</p>
          <div className={styledHero.btnWrapper}>
            <button className={styledHero.primaryButton}>Get Started</button>
            <button className={styledHero.secondaryButton}>Book a demo</button>
          </div>
        </div>
        <div className={styledHero.rightSection}>
        <div className={styledHero.imgSection}>
          <Image src={dog}  alt="Dog" className='styledHero.heroImage'/>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
