import Image from "next/image";
import DashboardMobileNav from '../DasboardMobileNav/DashboardMobileNav'
import Welcome from "../../utilityComponents/WelcomeInfo";


import {
  InfoCard,
  ICPetInformation,
  ICVetContactInfo,
  ICMedicationInformation,
} from "../InfoCard/InfoCard";
import profilePic from "../assets/dogOwner.jpg";



import styled from "./DashboardPetInterface.module.css";
import { PetGallery } from "../PetGallery/Gallery";


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

    <Welcome />

    <PetGallery />

      <InfoCard title="Pet Information">
        <ICPetInformation />
      </InfoCard>

      <InfoCard title="Vet Contact Info">
        <ICVetContactInfo />
      </InfoCard>


      <InfoCard title="Vet Contact Info">
        <ICMedicationInformation />


      </InfoCard>


      


      <div className={styled.DashboardSpacer}></div>
      < DashboardMobileNav />
    </section>
  );
};

export default dashboardInteface;
