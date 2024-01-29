import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../../components/Navbar";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SessionProvider session={pageProps.session}>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </SessionProvider>
  );
}
