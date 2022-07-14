import Image from "next/image";
import DashboardMobileNav from '../DasboardMobileNav/DashboardMobileNav'
import Welcome from "../InfoCard/WelcomeInfo";
import Sandy from "../assets/Sandy.jpg";
import Socks from "../assets/Socks.jpg";
import Luci from "../assets/Luci.jpg";
import Tinkerbell from "../assets/Tinkerbell.jpg";

import { FiEdit } from "react-icons/fi";
import profilePic from "../assets/dogOwner.jpg";



import styled from "./DashboardCreateBookingInterface.module.css";



const DashboardCreateBookingInterface = () => {
  return (
    <section className={styled.dashboardContainer}>
      <div className={styled.dashboardInnerWrapper}></div>
      <div className={styled.profileImageWrapper}>
        <Image
          className={styled.profileImage}
          src={profilePic}
          alt="A dog and it's owner"
        />
      </div>

    <Welcome />


      <h2 className={styled.infoCardTitle}>Bookings</h2>


    <div className={styled.infoCardContainer}>
      <h4 className={styled.infoCardContentDate}>17 June 2023 <span></span> 25 June 2023</h4>
    </div>
      <div className={styled.infoCardInnerWrapper}>
        <div className={styled.infoCardEditIconWrapper}>
          <FiEdit size="1.3rem" className={styled.infoCardEditIcon} />
        </div>
        
    <h4 className={styled.infoCardContentTitle}>Pets:</h4>

      <div className={styled.infoCardContentWrapper}>
        <ul className={styled.infoCardContentListContainer}>
          <li className={styled.infoCardContentListItem}>
          <Image
            className={styled.PetImage}
            src={Sandy}
            alt="A dog and it's owner"
          />
            <p className={styled.infoCardContentText} >Sandy</p>
          </li>

          <li className={styled.infoCardContentListItem}>
          <Image
            className={styled.PetImage}
            src={Luci}
            alt="A dog and it's owner"
          />
            <p className={styled.infoCardContentText}>Luci</p>
          </li>
          <li className={styled.infoCardContentListItem}>
          <Image
            className={styled.PetImage}
            src={Tinkerbell}
            alt="A dog and it's owner"
          />
            <p className={styled.infoCardContentText}>Tinkerbell</p>
          </li>
          <li className={styled.infoCardContentListItem}>
          <Image
            className={styled.PetImage}
            src={Socks}
            alt="A dog and it's owner"
          />
            <p className={styled.infoCardContentText}>Socks</p>
          </li>
        </ul>
      </div>
        <h4 className={styled.infoCardContentTitle}>Extra Services:</h4>
      <div className={styled.infoCardContentWrapper}>
        <ul className={styled.infoCardContentListFlexContainer}>
          <li className={styled.infoCardContentFlexListItem}>
            <p className={styled.infoCardContentText}>Nail Clip</p>
          </li>
          <li className={styled.infoCardContentFlexListItem}>
            <p className={styled.infoCardContentText}>Wash</p>
          </li>
          <li className={styled.infoCardContentFlexListItem}>
            <p className={styled.infoCardContentText}>Flea Treatment</p>
          </li>
        </ul>
      </div>
      <div >
      </div>
    </div>
     







      {/* Create button props inc styling */}
      {/* <div className={styled.ButtonContainer}>
        
        <button className={styled.ButtonCancel}>Cancel</button>
        <button className={styled.ButtonSave}>Save</button>

      </div> */}
 

      <div className={styled.DashboardSpacer}></div>
      < DashboardMobileNav />
    </section>
  );
};

export default DashboardCreateBookingInterface;
