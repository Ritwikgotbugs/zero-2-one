import Layout from "@/components/layout";
import "@/styles/globals.css";
import { AuthProvider } from "@/utils/authProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}
