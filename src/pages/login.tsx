import { useState } from "react";
import { GetServerSidePropsContext } from 'next'
import styledLogin from "../styles/Login.module.css";
import AuthButton from "../components/AuthComponents/Buttons/authButton";
import { useSession } from "next-auth/react";
import { getProviders,getSession,signIn } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../pages/api/auth/[...nextauth]";


export async function getServerSideProps(context: GetServerSidePropsContext) {
	// const session = await getSession(context.req) // current way
	const session = await unstable_getServerSession(context.req, context.res, authOptions)
	
	// console.log("Providers: ", providers);
	
	// if (!session) {
	// 	return {
	// 	  redirect: {
	// 		// destination: '/login',
	// 		permanent: false,
	// 	  },
	// 	}
	//   }
	console.log('AUTH_OPTIONS', authOptions);
	
	return  {
	  props: {
		
		session
	  }
	}
  }

  
  const Login = (e) => {
	
	 signIn(e.target.credentials.value, {
	  email: e.target.email.value,
	  password: e.target.password.value,
	});
	// console.log(signIn);
	return signIn

};




export default  function LoginPage({providers}) {
	console.log(providers);
	

	const {data: session,  status } = useSession()
	// console.log('STATUS',status);
	// console.log("Providers: ", providers);
	// console.log(roviders?.credentials.value);

  if (status === "loading" && session != null ) {
    
    return (
	<div className={styledLogin.loginContainer}>
		<p>Loading or not authenticated...</p>
	</div> 
	)
  }

	if (status === "authenticated") { 
		return (
			<div className={styledLogin.loginContainer}>
			<p>Authenticated</p>
	</div> 
			)
	}
	if (status === "unauthenticated") { 
		// console.log("login.tsx - unauthenticated");
		
		return (
		<div className={styledLogin.loginContainer}>
		<h1 className={styledLogin.loginTitle}>Sign Up</h1>
		<form
			className={styledLogin.loginForm}
			method="POST"
			onSubmit={Login}
		>
		<input
          type="hidden"
          name="credentials"
          value={providers?.credentials.id}
        />
			<label className={styledLogin.loginLabel} htmlFor="email">
				Email Address
			</label>

			<input
				className={styledLogin.loginInput}
				type="email"
				id="email"
				name="email"
				placeholder="Email"
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
				aria-label="Password"
			/>

			{/* <button type="submit">Login</button> */}
			<AuthButton  />
		</form>
	</div>
			)
		}
		// {console.log(Login)}
    

}