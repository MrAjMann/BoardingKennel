import Head from "next/head";
import styledAbout from '../styles/About.module.css'
import React from "react";
import { trpc } from "../utils/trpc";

const about = (props: any) => {
  const {data, isLoading} = trpc.useQuery(["users.getUser"])
  // const {dataPet, isLoadingPets} = trpc.useQuery(["pets.getPet"])

  if (isLoading || !data) return <div>Loading...</div>
  // if (isLoadingPets || !dataPet) return <div>Loading...</div>
  // console.log(data)
  return (
    <div className={styledAbout.aboutContainer} >
      <Head>
        <title>Boarding Kennels</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About</h1>
      <li>{data[0]?.pets}</li>
    </div>
  );
};

export default about;


