import CustomizedTimeline from "@/components/CustomizedTimeline";
import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import * as React from "react";
import Title from "@/components/Title";

interface StoryTimeLineProps {
  locale: Locale;
}

function StoryTimeLinePage({ locale }: StoryTimeLineProps) {
  const { t } = useTranslation("common");

  return (
    <div className="content-container">
      <Head>
        <title>{t("program.path")}</title>
      </Head>
      <Title titleText={t("program.title")} />
      <CustomizedTimeline locales={locale} />
    </div>
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

export default StoryTimeLinePage;
