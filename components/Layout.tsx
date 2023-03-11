import { useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import Header from "./Header";
import HeaderDeluxe from "./HeaderDeluxe";
import Login from "./Login";
import Navigation from "./Navigation";
import NavigationDeluxe from "./NavigationDeluxe";
import Footer from "./Footer";

function Layout(props: any) {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <NavigationDeluxe locale={props.locale} />
        {/* <Navigation locale={props.locale} /> */}
        <main>{props.children}</main>
        <Footer locale={props.locale} />
      </div>
    );
  } else {
    return (
      <div>
        <Header locale={props.locale} />
        <Login locale={props.locale} />
      </div>
    );
  }
}

export default Layout;
