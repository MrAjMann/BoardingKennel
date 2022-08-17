import Layout from "../components/Layout";
import { loggerLink } from '@trpc/client/links/loggerLink'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import { wsLink, createWSClient } from '@trpc/client/links/wsLink'
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

  // console.log('session from _app', session);

  return (
    <SessionProvider session={session}>

      <Layout {...pageProps}>
        <Component />
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


// function getEndingLink() {
//   if (typeof window === "undefined") {
//     return httpBatchLink({
//       url,
//     });
//   }

//   const client = createWSClient({
//     url: process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:3011"
//   })


//   return wsLink({
//     client,
//   })
// }

const url = `${getBaseUrl()}/api/trpc`;
export default withTRPC<AppRouter>({
  config({ ctx }) {

    const links = [
      // getEndingLink(),
      loggerLink(),
      httpBatchLink,
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
          // console.log('app.tsx ctx.req',ctx.req);

          // console.log(ctx);
          return {
            
            ...ctx.req.headers,
            'x-ssr': '1',
          }
        }
        return {}
      },

      transformer: superjson,
      url,
      links,
    }
  },
  ssr: false,
})(MyApp)
