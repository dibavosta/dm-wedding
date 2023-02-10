import "@/styles/globals.css";
import "@/styles/LanguageButton.css";
import "@/styles/Fundamentals.css";
import "@/styles/Navbar.css";
import "@/styles/Story.css";
import "@/styles/RsvpForm.css";
import "@/styles/ImageWithDescription.css";
import "@/styles/RadioButtonContainer.css";
import "@/styles/RadioButton.css";

// import "../i18n.ts";

import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { appWithTranslation } from "next-i18next";
import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface LocaleProps {
  locale: Locale;
}

const App = ({ Component, pageProps }: AppProps, { locale }: LocaleProps) => {
  return (
    <Layout locale={locale}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(App);
