import Image from "next/future/image";
import DashboardMobileNav from "../DasboardMobileNav/DashboardMobileNav";
import Welcome from "../../utilityComponents/WelcomeInfo";

import {IoAddCircleOutline} from 'react-icons/io5'
import Sandy from "../assets/Sandy.jpg";
import Socks from "../assets/Socks.jpg";
import Luci from "../assets/Luci.jpg";
import Tinkerbell from "../assets/Tinkerbell.jpg";
import styled from "./DashboardPetSelectionInterface.module.css";

const DashboardPetSelectionInterface = () => {
  return (
    <section className={styled.DashboardContainer}>
      <div className={styled.TitleWrapper}>
        <h1 className={styled.Title}>Pets</h1>
      </div>
      <Welcome />
      <div className={styled.DashboardInnerWrapper}>

        <a href="/pets" className={styled.PetImageWrapper} rel="noopener noreferrer">
          <Image
            className={styled.PetImage}
            src={Sandy}
            alt="A dog and it's owner"
          />

          <h2 className={styled.PetName}>Sandy</h2>
        </a>

        <a href="/pets" className={styled.PetImageWrapper} rel="noopener noreferrer">
          <Image
            className={styled.PetImage}
            src={Socks}
            alt="A dog and it's owner"
          />
          <h2 className={styled.PetName}>Socks</h2>
        </a>

        <a
          href="/pets"
          className={styled.PetImageWrapper}
          rel="noopener noreferrer"
        >
          <Image
            className={styled.PetImage}
            src={Luci}
            alt="A dog and it's owner"
          />
          <h2 className={styled.PetName}>Luci</h2>
        </a>

        <a href="/pets" className={styled.PetImageWrapper}>
          <Image
            className={styled.PetImage}
            src={Tinkerbell}
            alt="A dog and it's owner"
          />
          <h2 className={styled.PetName}>Tinkerbell</h2>
        </a>
      </div>
      <div>
        
      <div className={styled.ButtonWrapper}>
        <IoAddCircleOutline size="24px" className={styled.ButtonIcon}/>

      </div>
      </div>
      <div className={styled.DashboardSpacer}></div>
      <DashboardMobileNav />
    </section>
  );
};

export default DashboardPetSelectionInterface;
