import CustomizedTimeline from "@/components/CustomizedTimeline";
import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import * as React from "react";
import Title from "@/components/Title";
import Container from "@/components/Container";

interface StoryTimeLineProps {
  locale: Locale;
}

function StoryTimeLinePage({ locale }: StoryTimeLineProps) {
  const { t } = useTranslation("common");

  return (
    <section className="section-top" id="program-section">
      <Container style={{ alignItems: "center" }}>
        <Head>
          <title>{t("program.path")}</title>
        </Head>
        <Title style={{}} titleText={t("program.title")} />
        <CustomizedTimeline locales={locale} />
      </Container>
    </section>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common", "program"])),
    },
  };
};

export default StoryTimeLinePage;
