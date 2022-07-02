import styled from "./InfoCard.module.css";
import { FiEdit } from "react-icons/fi";

export const InfoCard = ({ children, title }) => {
  return (
    <div className={styled.infoCardContainer}>
      <h2 className={styled.infoCardTitle}>{title}</h2>
      <div className={styled.infoCardInnerWrapper}>
        <div className={styled.infoCardEditIconWrapper}>
          <FiEdit size="1.3rem" className={styled.infoCardEditIcon} />
        </div>
        {children}
      </div>
    </div>
  );
};

export const ICPersonalInfo = () => {
  return (
    <>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Phone: </h4>
        <input
          disabled
          value="04555615555"
          className={styled.infoCardContentInput}
        ></input>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Email:</h4>

        <input
          disabled
          value="johno@email.com"
          className={styled.infoCardContentInput}
        ></input>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Address: </h4>
        <textarea
          disabled
          value="123 Main St, StrangeTown, NSW, 3475"
          className={styled.infoCardContentTextArea}
        ></textarea>
      </div>
    </>
  );
};
export const ICAbout = () => {
  return (
    <>
      <div className={styled.infoCardContentAboutText}>
        <p contentEditable="true" className={styled.infoCardContentAboutText}>
          lorem Hi, my name is John and I love my puppy. My dog runs really fast
          and loves to play outside with the cats.
        </p>
      </div>
    </>
  );
};
export const ICEmergencyContact = () => {
  return (
    <>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Name:</h4>

        <input
          disabled
          value="Penelope Franks"
          className={styled.infoCardContentInput}
        ></input>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Phone: </h4>
        <input
          disabled
          value="04333615333"
          className={styled.infoCardContentInput}
        ></input>
      </div>


      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Address: </h4>
        <textarea
          disabled
          value="123 Main St, StrangeTown, NSW, 3475"
          className={styled.infoCardContentTextArea}
        ></textarea>
      </div>
    </>
  );
};
