import Image from "next/image";
import styledCard from "./Card.module.css";

import { cardData } from "./Data";

const Card = () => {
  return (
    <>
      {cardData.map((card, index) => {
        return (
          <div className={styledCard.cardWrapper} id={card.id} key={index}>
            <Image className={styledCard.cardIcon} src={card.imgSrc} alt="Dog" layout="fixed" width={200} />
            <h2 className={styledCard.cardTitle}>{card.cardTitle}</h2>
            <p className={styledCard.cardDesc}>{card.cardDesc}</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
