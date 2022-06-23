import Link from 'next/link'
import Map from './assets/Map.png'
import Image from 'next/image';
// React Icons
import {
    FaPhone,
    FaEnvelope,
  } from "react-icons/fa";
import styledFooter from './Footer.module.css'


const Footer = () => {
  return (
    <section className={styledFooter.footerContainer}>
        <div className={styledFooter.innerWrapper}>
            {/* Contact Section */}
            <div className={styledFooter.footerSection}>
                <h1 className={styledFooter.sectionTitle}>Contact Details</h1>
                    <ul className={styledFooter.footerItems}>
                        <li className={styledFooter.footerLinks}><FaPhone /> <Link href='/'>0466666666</Link></li>
                        <li className={styledFooter.footerLinks}><FaEnvelope /> <Link href='/'>bordingkennel@gmail.com</Link></li>
                    </ul>
            </div>
            <div className={styledFooter.styledSplitter}></div>
            <div className={styledFooter.footerSection}>
                <h1 className={styledFooter.sectionTitle}>About Us</h1>
                                    <ul>
                        <li className={styledFooter.footerLinks}><Link href='/'>Services</Link></li>
                        <li className={styledFooter.footerLinks}><Link href='/'>Testimonials</Link></li>
                        <li className={styledFooter.footerLinks}><Link href='/'>Terms of Service</Link></li>
                    </ul>
            </div>
            <div className={styledFooter.styledSplitter}></div>
            <div className={styledFooter.footerSection}>
                <h1 className={styledFooter.sectionTitle}>Location</h1>
                    <ul>
                        <li className={styledFooter.footerLinks}><Link href='/'>123 Main St, Mango Hill, QLD, 4509</Link></li>
                        <li className={styledFooter.footerLinks}><Link href='/'><Image src={Map} alt='Map of location' layout='fixed' width='260px' /></Link></li>
                    </ul>
            </div>
            <div className={styledFooter.styledSplitter}></div>
            <div className={styledFooter.footerSection}>
                <h1 className={styledFooter.sectionTitle}>Social Media</h1>
                                    <ul>
                        <li className={styledFooter.footerLinks}><Link href='/'>Facebook</Link></li>
                        <li className={styledFooter.footerLinks}><Link href='/'>Instagram</Link></li>
                    </ul>
            </div>
        </div>
        <div className={styledFooter.sectionCreatedBy}>
            <h4 className={styledFooter.sectionCreatedTitle}>Website created by: Anthony Mann, 2022</h4>
        </div>
    </section>
  )
}

export default Footer