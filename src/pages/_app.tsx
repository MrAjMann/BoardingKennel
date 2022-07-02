import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app"

import { withTRPC } from '@trpc/next';
import { appRouter } from '../backend/router';

import superjson from 'superjson';
import "../styles/globals.css";


const MyApp = ({ Component, pageProps }) =>  {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}


export default withTRPC<typeof appRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';


    return {
      url,
      transformer: superjson
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);

