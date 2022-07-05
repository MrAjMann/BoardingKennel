import styled from "./InfoCard.module.css";
import { FiEdit } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { type } from "os";
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

export const ICPetInformation = () => {
  return (
    <>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Name:</h4>

        <input
          disabled
          value="Sandy"
          className={styled.infoCardContentInput}
        ></input>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Age: </h4>
        <input
          disabled
          value="3"
          className={styled.infoCardContentInput}
        ></input>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Species: </h4>
        <input
          disabled
          value="Dog"
          className={styled.infoCardContentInput}
        ></input>
      </div>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Breed: </h4>
        <input
          disabled
          value="Golden Retrevier"
          className={styled.infoCardContentInput}
        ></input>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Gender: </h4>
        <input
          disabled
          value="Female"
          className={styled.infoCardContentInput}
        ></input>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Desexed: </h4>
        <input
          disabled
          value="Yes"
          className={styled.infoCardContentInput}
        ></input>
      </div>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Upto Date Vacinations: </h4>
        <input
          disabled
          value="Yes"
          className={styled.infoCardContentInput}
        ></input>
      </div>
    </>
  );
};

export const ICVetContactInfo = () => {
  return (
    <>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Name:</h4>

        <input
          disabled
          value="Border Vets"
          className={styled.infoCardContentInput}
        ></input>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Phone: </h4>
        <input
          disabled
          value="0822253177"
          className={styled.infoCardContentInput}
        ></input>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Address: </h4>
        <textarea
          disabled
          value="12 Something rd, borderPlace, NSW, 3476"
          className={styled.infoCardContentTextArea}
        ></textarea>
      </div>
    </>
  );
};

export const ICMedicationInformation = () => {
  return (
    <>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Medication:</h4>

        <input
          disabled
          value="Medication Name"
          className={styled.infoCardContentInput}
        ></input>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Dose: </h4>
        <input
          disabled
          value="1 Tablet"
          className={styled.infoCardContentInput}
        ></input>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Frequency: </h4>
        <input
          disabled
          value="Twice Daily"
          className={styled.infoCardContentInput}
        ></input>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Start Date: </h4>
        <input
          disabled
          value="17 June 2023"
          className={styled.infoCardContentInput}
        ></input>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>End Date: </h4>
        <input
          disabled
          value="25 June 2023"
          className={styled.infoCardContentInput}
        ></input>
      </div>

      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Other Info: </h4>
        <textarea
          disabled
          value="Sandy likes her medication to be mixed in with her food."
          className={styled.infoCardContentTextArea}
        ></textarea>
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

export const ICPets = () => {
  return (
    <>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>Who is Visiting:</h4>

        <ul className={styled.infoCardContentListContainer}>
          <li className={styled.infoCardContentListItem}>
            <input
              type="checkbox"
              className={styled.infoCardContentCheckbox}
              name="Pet1"
              value="Sandy"
            />
            <label className={styled.infoCardContentLabel} htmlFor="Pet1">
              Sandy
            </label>
            <br></br>
          </li>
          <li className={styled.infoCardContentListItem}>
            <input
              type="checkbox"
              className={styled.infoCardContentCheckbox}
              name="Pet1"
              value="Sandy"
            />
            <label className={styled.infoCardContentLabel} htmlFor="Pet1">
              Luci
            </label>
            <br></br>
          </li>
          <li className={styled.infoCardContentListItem}>
            <input
              type="checkbox"
              className={styled.infoCardContentCheckbox}
              name="Pet1"
              value="Sandy"
            />
            <label className={styled.infoCardContentLabel} htmlFor="Pet1">
              Tinkerbell
            </label>
            <br></br>
          </li>
        </ul>
      </div>
    </>
  );
};




export const ICStartDate = () => {
  return (
    <>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>StartDate:</h4>

        <input
          disabled
          value="17 June 2023"
          className={styled.infoCardContentInput}
        ></input>
      </div>

    </>
  );
};
export const ICEndDate = () => {
  return (
    <>
      <div className={styled.infoCardContentWrapper}>
        <h4 className={styled.infoCardContentTitle}>StartDate:</h4>

        <input
          disabled
          value="25 June 2023"
          className={styled.infoCardContentInput}
        ></input>
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
            <input
              type="checkbox"
              className={styled.infoCardContentCheckbox}
              name="Service1"
              value="Nail Clip"
            />
            <label className={styled.infoCardContentLabel} htmlFor="Service1">
              Nail Clip
            </label>
            <br></br>
          </li>
          <li className={styled.infoCardContentListItem}>
            <input
              type="checkbox"
              className={styled.infoCardContentCheckbox}
              name="Service2"
              value="Wash"
            />
            <label className={styled.infoCardContentLabel} htmlFor="Service2">
              Wash
            </label>
            <br></br>
          </li>
          <li className={styled.infoCardContentListItem}>
            <input
              type="checkbox"
              className={styled.infoCardContentCheckbox}
              name="Service3"
              value="Flea"
            />
            <label className={styled.infoCardContentLabel} htmlFor="Service3">
              Flea Treatment
            </label>
            <br></br>
          </li>
        </ul>
      </div>
    </>
  );
};
