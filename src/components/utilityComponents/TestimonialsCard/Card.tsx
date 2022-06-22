import Image from "next/image";
import styledCard from "./Card.module.css";
import { FaStar } from "react-icons/fa";

import { cardData } from "./Data";

const Card = () => {
  return (
    <>
      {cardData.map((card, index) => {
        return (
          <div className={styledCard.cardWrapper} id={card.id} key={index}>
            <Image className={styledCard.cardIcon} src={card.imgSrc} alt={card.alt} layout="fixed" width={160} height={160} />
            <div className={styledCard.cardStars} >
              <FaStar style={{color:'var(--yellow)',width:'1.5rem',height:'1.5rem', margin:'0 0.2rem'}}/>  
              <FaStar style={{color:'var(--yellow)',width:'1.5rem',height:'1.5rem', margin:'0 0.2rem'}}/>  
              <FaStar style={{color:'var(--yellow)',width:'1.5rem',height:'1.5rem', margin:'0 0.2rem'}}/>  
              <FaStar style={{color:'var(--yellow)',width:'1.5rem',height:'1.5rem', margin:'0 0.2rem'}}/>  
              <FaStar style={{color:'var(--yellow)',width:'1.5rem',height:'1.5rem', margin:'0 0.2rem'}}/>  
  
              </div>
            <h2 className={styledCard.cardTitle}>{card.cardTitle}</h2>
            <p className={styledCard.cardDesc}>{card.cardDesc}</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
