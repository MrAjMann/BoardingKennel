import Image from "next/image";
import DashboardMobileNav from '../DasboardMobileNav/DashboardMobileNav'

import {
  InfoCard,
  ICPersonalInfo,
  ICAbout,
  ICEmergencyContact
} from "../InfoCard/InfoCard";
import profilePic from "../assets/dogOwner.jpg";
import styled from "./DashboardInterface.module.css";


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

      <div className={styled.profileUserWrapper}>
        <p className={styled.profileDate}>30 June 2022</p>
        <p className={styled.profileUserWelcome}>
          Hi <span className={styled.profileUserWelcomeName}>John</span>,
          Welcome back, nice to see you again.
        </p>
      </div>

      <InfoCard title="Personal Information">
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
