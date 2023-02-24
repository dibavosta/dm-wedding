import ImageWithDescription from "@/components/ImageWithDescription";
import Container from "@/components/Container";
import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import StorySection from "@/components/StorySection";

interface StoryProps {
  locale: Locale;
}

function Story({ locale }: StoryProps) {
  const { t } = useTranslation("common");

  return (
    <div className="outer">
      <Head>
        <title>{t("story.path")}</title>
      </Head>
      <StorySection locale={locale} section="first" />
      <StorySection locale={locale} section="second" />
      <StorySection locale={locale} section="third" />
      <StorySection locale={locale} section="fourth" />
      <StorySection locale={locale} section="fifth" />
      <StorySection locale={locale} section="sixth" />
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

export default Story;
