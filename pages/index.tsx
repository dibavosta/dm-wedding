import Title from "@/components/Title";
import Container from "@/components/Container";
import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
// import DateCountdown from "react-date-countdown-timer";
import { useState } from "react";
import CountDown from "@/components/CountDown";

interface HomeProps {
  locale: Locale;
}

function HomePage({ locale }: HomeProps) {
  const { t } = useTranslation("common");

  return (
    <Container>
      <Head>
        <title>{t("index.path")}</title>
      </Head>
      <Title titleText={t("index.title")} />
      <CountDown locale={locale} />
    </Container>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default HomePage;
