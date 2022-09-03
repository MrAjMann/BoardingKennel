import { FormEventHandler, useState } from "react";
import { GetServerSidePropsContext } from 'next'
import styledLogin from "../../styles/Login.module.css";
import AuthButton from "../../components/AuthComponents/Buttons/authButton";

import { useSession, getProviders,getSession,signIn } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";
import { userInfo } from "os";
import {NextPage} from 'next'


export async function getServerSideProps(context: GetServerSidePropsContext) {
// 	// const session = await getSession(context.req) // current way
	const session = await unstable_getServerSession(context.req, context.res, authOptions)
	
// 	// console.log("Providers: ", providers);
	
	if (session) {
		return {
		  redirect: {
			destination: '/',
			permanent: false,
		  },
		}
	  }
	// console.log('AUTH_OPTIONS', session);
	
	return  {
	  props: {
		
		session
	  }
	}
  }

  





interface Props {}

 const Login: NextPage = (props): JSX.Element => {
	// console.log(providers);
	const [userInfo, setUserInfo] = useState({email: "", password: ""});
	
	const handlesubmit:FormEventHandler<HTMLFormElement> = async (e) => {

		e.preventDefault()



		const res = await signIn("credentials", {
			email: userInfo.email,
			password: userInfo.password,
			// redirect: false,
		  });
	
		console.log(res);
		
	};
	return (
		<div className={styledLogin.loginContainer}>
		<h1 className={styledLogin.loginTitle}>Sign Up</h1>
		<form
			className={styledLogin.loginForm}
			onSubmit={handlesubmit}
		>

			<label className={styledLogin.loginLabel} htmlFor="email">
				Email Address
			</label>

			<input
				className={styledLogin.loginInput}
				type="email"
				id="email"
				name="email"
				value={userInfo.email}
				onChange={({target}) => setUserInfo({...userInfo, email: target.value})}
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
				placeholder="********"
				value={userInfo.password}
				onChange={({ target }) =>
				  setUserInfo({ ...userInfo, password: target.value })
				}
				aria-label="Password"
			/>

			{/* <button onClick={() => {
				signIn()
			}}>Login</button> */}
			{/* <input type="submit" value="Login" /> */}
			<AuthButton  />
		</form>
	</div>
			)
		}
		// {console.log(Login)}
    export default Login

