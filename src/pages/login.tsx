// import {useState} from 'react'
import type { Session } from "next-auth"


import styledLogin from "../styles/Login.module.css";
import AuthButton from "../components/AuthComponents/Buttons/authButton";

import {useSession, signIn, signOut } from "next-auth/react"



export default function Login() {
  const { data: session } = useSession()
  if (session )  {
    return (
      <div className={styledLogin.loginContainer}>
      <h1 className={styledLogin.loginTitle}>Sign Up</h1>
      <form className={styledLogin.loginForm} >
        
        <p  >Signed in as {` ${session.user.username}`}</p> 
        <button  onClick={() => signOut()} >
        Logout
       </button>
      </form>
          
    </div>
  );
}else {
  return (
    <div className={styledLogin.loginContainer}>
    <h1 className={styledLogin.loginTitle}>Sign Up</h1>
    <form className={styledLogin.loginForm} method="post" action="/api/auth/callback/credentials">
      
      <label className={styledLogin.loginLabel} htmlFor="username">
        Email Address
      </label >
      <input
        className={styledLogin.loginInput}
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        // onChange={(e) => setUsername(e.target.value)}
        // value={username}
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
        // onChange={(e) => setPassword(e.target.value)}
        // value={password}
        aria-label="Password"
        />
      {/* <p  >Not signed in</p>  */}
       {/* <button  onClick={() => signIn()} >
        Login
       </button> */}
        
    </form>
    <AuthButton />
  </div>
);
}

}





