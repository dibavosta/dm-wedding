import "@/styles/globals.css";
import "@/styles/LanguageButton.css";
import "@/styles/Fundamentals.css";
import "@/styles/Navbar.css";
import "@/styles/Story.css";
import "@/styles/RsvpForm.css";
import "@/styles/ImageWithDescription.css";
import "@/styles/RadioButtonContainer.css";
import "@/styles/newStory.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { appWithTranslation } from "next-i18next";
import { Locale } from "@/types/Locale";

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
