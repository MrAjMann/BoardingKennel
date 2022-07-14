import Image from "next/image";
import DashboardMobileNav from '../DasboardMobileNav/DashboardMobileNav'
import Welcome from "../InfoCard/WelcomeInfo";
import {
  InfoCard,
  ICPersonalInfo,
  ICAbout,
  ICEmergencyContact
} from "../InfoCard/InfoCard";
import profilePic from "../assets/dogOwner.jpg";
import styled from "./DashboardProfileInterface.module.css";


const dashboardInteface = () => {



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

    {/* <Welcome data/> */}

      <InfoCard title="Personal Information" >
        <ICPersonalInfo />
      </InfoCard>

      <InfoCard title="About">
        <ICAbout />
      </InfoCard>

      <InfoCard title="Emergency Contact">
        <ICEmergencyContact />
      </InfoCard>
      <div className={styled.DashboardSpacer}></div>
      < DashboardMobileNav />
    </section>
  );
};

export default dashboardInteface;
