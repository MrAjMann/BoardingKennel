// import {useState} from 'react'
import type { Session } from "next-auth"
import { getCsrfToken } from "next-auth/react"
import { useState } from "react";
import styledLogin from "../styles/Login.module.css";
import AuthButton from "../components/AuthComponents/Buttons/authButton";

import {useSession, signIn, signOut } from "next-auth/react"





export default function Login() {
  const { data: session,  status } = useSession({
    required: false,
    onUnauthenticated() {
     console.log('unauthenticated user' );
     
      <div><p>Incorrect credentials try again</p></div>
    },
  })
  
  const [userEmail, setUserEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
 

 console.log('user session firstname', session?.user.firstName);
 

// console.log('Email', userEmail);
// console.log('Status', status);




  if (status === "authenticated" && session )  {
    return (
      <div className={styledLogin.loginContainer}>
      <h1 className={styledLogin.loginTitle}>Sign Up</h1>
      <form className={styledLogin.loginForm} >
        
        <p  >Signed in as {` ${session?.user.email}`}</p> 
        <p  >Signed in as {session?.user.firstName || 'undefined'}</p> 
        <button  onClick={() => signOut()} >
        Logout
       </button>
      </form>
          
    </div>
  );
}else if (status === "loading")   {
  <div style={{display: 'flex', justifyContent:'center'}}>

  return <p style={{fontSize: '32px' , color:'000'}}>Loading....</p>
  </div>
}else {
  
  return (
    <div className={styledLogin.loginContainer}>
    <h1 className={styledLogin.loginTitle}>Sign Up</h1>
    <form className={styledLogin.loginForm} method="post" action="/api/auth/callback/credentials">
      <label className={styledLogin.loginLabel} htmlFor="email">
        Email Address
      </label >
      <p  >{userEmail}</p> 
      <p  >{password}</p> 
      <input
      
        className={styledLogin.loginInput}
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        onChange={(e) => setUserEmail(e.target.value)}
        value={userEmail}
        />

      <label className={styledLogin.loginLabel} htmlFor="password">
        Password
      </label>
      
      <input
        className={styledLogin.loginInput}
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        aria-label="Password"
        />

            <button  onClick={() => signIn("credentials", {redirect: true, email: `${userEmail}`, password: `${password}`}).then(console.log)} >
              
        Login
       </button>
       
    {/* <AuthButton  /> */}
    </form>
  </div>
);
}

}





