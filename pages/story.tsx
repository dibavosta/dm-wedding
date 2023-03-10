import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import StorySection from "@/components/StorySection";
import CountDown from "@/components/CountDown";
import styles from "@/components/Story.module.css";

interface StoryProps {
  locale: Locale;
}

function Story({ locale }: StoryProps) {
  const { t } = useTranslation(["common", "story"]);
  return (
    <section className="section-top" id="story-section">
      <div className={styles.outer}>
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
      <CountDown locale={locale} />
    </section>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common", "story"])),
    },
  };
};

export default Story;
