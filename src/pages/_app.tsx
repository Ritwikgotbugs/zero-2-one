import Layout from "@/components/layout";
import "@/styles/globals.css";
import { AuthProvider } from "@/utils/authProvider";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const authRoutes = ["/login","/auth/login"];

  const isAuthRoute = authRoutes.includes(router.pathname);

  return (
    <AuthProvider>
      {isAuthRoute ? (
        <>
          <Component {...pageProps} />
          <Toaster />
        </>
      ) : (
        <Layout>
          <Component {...pageProps} />
          <Toaster />
        </Layout>
      )}
    </AuthProvider>
  );
}
