import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../store/app/store";
import Header from "../components/Header";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Toaster />
        <div className="flex h-screen">
          <div className="hidden lg:flex w-1/4 h-screen ">
            <LeftSide />
          </div>
          <div className="w-full p-4 lg:w-1/2 ">
            <Component {...pageProps} />
          </div>
          <div className="hidden lg:flex w-1/4 ">
            <RightSide />
          </div>
        </div>
        <Header />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
