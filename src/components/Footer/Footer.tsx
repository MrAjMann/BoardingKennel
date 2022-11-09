import Link from "next/link";
import Map from "./assets/Map.png";
import Image from "next/future/image";
// React Icons
import { FaPhone, FaEnvelope } from "react-icons/fa";
import styledFooter from "./Footer.module.css";

export const Footer = () => {
  return (
    <section className={styledFooter.footerContainer}>
      <div className={styledFooter.innerWrapper}>
        {/* Contact Section */}
        <div className={styledFooter.footerSection}>
          <h1 className={styledFooter.sectionTitle}>Contact Details</h1>
          <ul className={styledFooter.footerItems}>
            
            <li className={styledFooter.footerLinks}>
             <FaPhone />  <Link href='/services'>0428634295</Link>
            </li>
            <li className={styledFooter.footerLinks}>
              <FaEnvelope /> <Link href='/services'>anthony@amwebsolutions.com.au</Link>
            </li>
          </ul>
        </div>
        <div className={styledFooter.styledSplitter}></div>
        <div className={styledFooter.footerSection}>
          <h1 className={styledFooter.sectionTitle}>About Us</h1>
          <ul>
            <li className={styledFooter.footerLinks}>
              <Link href="/">Services</Link>
            </li>
            <li className={styledFooter.footerLinks}>
              <Link href="/">Testimonials</Link>
            </li>
            <li className={styledFooter.footerLinks}>
              <Link href="/">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className={styledFooter.styledSplitter}></div>
        <div className={styledFooter.footerSection}>
          <h1 className={styledFooter.sectionTitle}>Location</h1>
          <ul>
            <li className={styledFooter.footerLinks}>
              <Link href="/">123 Main St, Mango Hill, QLD, 4509</Link>
            </li>
            <li className={styledFooter.footerLinks}>
              <div>
                <Image
                  src={Map}
                  alt="Map of location"
                  width="260px"
                  />
                  </div>
              
            </li>
          </ul>
        </div>
        <div className={styledFooter.styledSplitter}></div>
        <div className={styledFooter.footerSection}>
          <h1 className={styledFooter.sectionTitle}>Social Media</h1>
          <ul>
            <li className={styledFooter.footerLinks}>
              <Link href="/">Facebook</Link>
            </li>
            <li className={styledFooter.footerLinks}>
              <Link href="/">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styledFooter.sectionCreatedBy}>
        <h4 className={styledFooter.sectionCreatedTitle}>
          Website created by:  AM Web Solutions, 2022
        </h4>
      </div>
    </section>
  );
};


