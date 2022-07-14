import styled from "./InfoCard.module.css";
import { FiEdit } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { trpc } from "../../../utils/trpc";




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
  const {data, isLoading} = trpc.useQuery(["user.get-user"])
  // console.log(data?.address);

  
  return (
    <>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Phone: </h4>
        <p className={styled.infoCardContentText}>{data?.phone}</p>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Email:</h4>

        <p className={styled.infoCardContentText}>{data?.email}</p>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Address: </h4>
        <p className={styled.infoCardContentText}>
          {`${data?.address?.streetNumber}, ${data?.address?.streetName}, ${data?.address?.suburb}, ${data?.address?.state}, ${data?.address?.postcode} `}
        </p>
      </div>
    </>
  );
};
export const ICAbout = () => {
  const {data, isLoading} = trpc.useQuery(["user.get-user"])
  return (
    <>
      <div className={styled.infoCardContentAboutText}>
        <p className={styled.infoCardContentAboutText}>
          {data?.about}
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

        <p className={styled.infoCardContentText}>Penelope Franks</p>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Phone: </h4>
        <p className={styled.infoCardContentText}>04333615333</p>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Address: </h4>
        <p className={styled.infoCardContentText}>
          123 Main St, StrangeTown, NSW, 3475
        </p>
      </div>
    </>
  );
};

export const ICPetInformation = () => {
  return (
    <>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Name:</h4>

        <p className={styled.infoCardContentText}>Sandy</p>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Age: </h4>
        <p className={styled.infoCardContentText}>3</p>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Species: </h4>
        <p className={styled.infoCardContentText}>Dog</p>
      </div>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Breed: </h4>
        <p className={styled.infoCardContentText}>Golden Retrevier</p>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Gender: </h4>
        <p className={styled.infoCardContentText}>Female</p>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Desexed: </h4>
        <p className={styled.infoCardContentText}>Yes</p>
      </div>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Upto Date Vacinations: </h4>
        <p className={styled.infoCardContentText}>Yes</p>
      </div>
    </>
  );
};

export const ICVetContactInfo = () => {
  return (
    <>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Name:</h4>

        <p className={styled.infoCardContentText}>Border Vets</p>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Phone: </h4>
        <p className={styled.infoCardContentText}>0822253177</p>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Address: </h4>
        <p className={styled.infoCardContentText}>
          12 Something rd, borderPlace, NSW, 3476
        </p>
      </div>
    </>
  );
};

export const ICMedicationInformation = () => {
  return (
    <>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Medication:</h4>

        <p className={styled.infoCardContentText}>Medication Name</p>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Dose: </h4>
        <p className={styled.infoCardContentText}>1 Tablet</p>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Frequency: </h4>
        <p className={styled.infoCardContentText}>Twice Daily</p>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Start Date: </h4>
        <p className={styled.infoCardContentText}>17 June 2023</p>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>End Date: </h4>
        <p className={styled.infoCardContentText}>25 June 2023</p>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Other Info: </h4>
        <p className={styled.infoCardContentText}>
          Sandy likes her medication to be mixed in with her food.
        </p>
      </div>

      <div className={styled.Seperator}></div>

      <div className={styled.ButtonContainer}>
        <div className={styled.ButtonWrapper}>
          <IoAddCircleOutline size="24px" className={styled.ButtonIcon} />
        </div>
      </div>
    </>
  );
};





export const ICStartDate = () => {
  return (
    <>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>StartDate:</h4>

        <p className={styled.infoCardContentText}>17 June 2023</p>
      </div>
    </>
  );
};
export const ICEndDate = () => {
  return (
    <>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>StartDate:</h4>

        <p className={styled.infoCardContentText}>25 June 2023</p>
      </div>
    </>
  );
};

export const ICExtraServices = () => {
  return (
    <>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Extra Services:</h4>

        <ul className={styled.infoCardContentListContainer}>
          <li className={styled.infoCardContentListItem}>
            <p className={styled.infoCardContentText}>Nail Clip</p>
          </li>
          <li className={styled.infoCardContentListItem}>
            <p className={styled.infoCardContentText}>Wash</p>
          </li>
          <li className={styled.infoCardContentListItem}>
            <p className={styled.infoCardContentText}>Flea Treatment</p>
          </li>
        </ul>
      </div>
    </>
  );
};
