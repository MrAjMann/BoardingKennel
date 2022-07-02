import { useSession, signIn, signOut } from "next-auth/react";
import styledAuthButton from "./Button.module.css";

export default function AuthButton() {

  const { data: session } = useSession()

  if (session ) {
   
    return (
      <div className={styledAuthButton.authWrapper}>
        
        <p className={styledAuthButton.authInfo} >Signed in as {session.user?.name}</p> 
        <button
          className={styledAuthButton.authButton}
          onClick={() => signOut()}
          >
          Logout
        </button>
      </div>
    );
  }
  return (
    <div className={styledAuthButton.authWrapper}>
      <p className={styledAuthButton.authInfo}>Not signed in</p>
      <button className={styledAuthButton.authButton} onClick={() => signIn()}>Login</button>

    </div>
  );
}
