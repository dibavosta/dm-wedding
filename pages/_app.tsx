import "@/styles/globals.css";
import "@/styles/LanguageButton.css";
import "@/styles/Fundamentals.css";
import "@/styles/Navbar.css";
import "@/styles/Story.css";
import "@/styles/RsvpForm.css";
import "@/styles/ImageWithDescription.css";
import "@/styles/RadioButtonContainer.css";
import "@/styles/FullRsvpForm.css";
import "@/styles/CountDown.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { appWithTranslation } from "next-i18next";
import { Locale } from "@/types/Locale";
import { SessionProvider } from "next-auth/react";

interface LocaleProps {
  locale: Locale;
}

const App = (
  { Component, pageProps: { session, ...pageProps } }: AppProps,
  { locale }: LocaleProps
) => {
  return (
    // <SessionProvider session={session}>
    <Layout locale={locale}>
      <Component {...pageProps} />
    </Layout>
    // </SessionProvider>
  );
};

export default appWithTranslation(App);
