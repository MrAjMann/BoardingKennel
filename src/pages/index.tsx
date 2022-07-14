import Head from "next/head";

import HeroSection from "../components/LandingPageComponents/HeroSection/HeroSection";
import Services from "../components/LandingPageComponents/Services/Services";
import Testimonials from "../components/LandingPageComponents/Testimonials/Testimonials";





import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import { trpc } from "../utils/trpc";


const Home: NextPage = () =>{
  const {data, isLoading} = trpc.useQuery(['auth.getSession'])

  console.log(data);
  
    return (
      <div>
        <Head>
          <title>Boarding Kennels</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <main className="">
        <HeroSection />
      
        <Services />
        <Testimonials />
        {/* <h1>Accomodation for all your pets</h1> */}
      </main>
    </div>
  );

}

export default Home;


