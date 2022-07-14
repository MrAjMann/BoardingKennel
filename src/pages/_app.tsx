import Layout from "../components/Layout";
import {loggerLink} from '@trpc/client/links/loggerLink'
import {httpBatchLink} from '@trpc/client/links/httpBatchLink'
import { AppRouter } from '../server/router/app.router'
import { SessionProvider } from "next-auth/react";


import { withTRPC } from '@trpc/next';
import type { AppType } from "next/dist/shared/lib/utils";
import superjson from 'superjson';
import "../styles/globals.css";



  
  const MyApp: AppType = ({
    Component,
    
    pageProps: { session, ...pageProps },
  }) => {
    return (
      <SessionProvider session={session}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};



const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.browser) return ""; // Browser should use current path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};



const url = `${getBaseUrl()}/api/trpc`;

export default withTRPC<AppRouter>({
  config({ctx}){


    const links = [
      loggerLink(),
      httpBatchLink({
        maxBatchSize: 10,
        url,
      })
    ]
    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            'x-ssr': '1',
          }
        }
        return {}
      },
      links,
      transformer: superjson
    }
  },
  ssr: false,
})(MyApp)
