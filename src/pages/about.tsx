import Head from "next/head";
import styledAbout from '../styles/About.module.css'
import React from "react";
import { trpc } from "../utils/trpc";

const about = () => {
const {data, isLoading} = trpc.useQuery(["user.get-user"])

console.log(data);



  return (
    <div className={styledAbout.aboutContainer} >
      <Head>
        <title>Boarding Kennels</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About</h1>
      {/* <li>{data[0]?.pets}</li> */}
     
    </div>
  );
};

export default about;


