import Image from "next/image";
import DashboardMobileNav from '../DasboardMobileNav/DashboardMobileNav'
import Welcome from "../../utilityComponents/WelcomeInfo";


import {
  ICEndDate,
  ICExtraServices,
  ICPets,
  ICStartDate,
  InfoCard,

} from "../InfoCard/InfoCard";
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



    <InfoCard title="Add Booking">
      <ICPets />
    </InfoCard>
    <InfoCard title="Add Booking">
      <ICStartDate />
    </InfoCard>
    <InfoCard title="Add Booking">
      <ICEndDate />
    </InfoCard>
    <InfoCard title="Add Booking">
      <ICExtraServices />
    </InfoCard>

      {/* Create button props inc styling */}
      <div className={styled.ButtonContainer}>
        
        <button className={styled.ButtonCancel}>Cancel</button>
        <button className={styled.ButtonSave}>Save</button>

      </div>
 

      <div className={styled.DashboardSpacer}></div>
      < DashboardMobileNav />
    </section>
  );
};

export default DashboardCreateBookingInterface;
