import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import StorySection from "@/components/StorySection";
import BigImage from "@/components/BigImage";
import CountDown from "@/components/CountDown";
import Title from "@/components/Title";

interface StoryProps {
  locale: Locale;
}

function Story({ locale }: StoryProps) {
  const { t } = useTranslation(["common", "story"]);
  return (
    <section className="section-top" id="story-section">
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
      {/* <BigImage locale={locale} title="Vi ska gifta oss!" /> */}
      <div className="countdown-margin">
        <div className="header-margin">
          <Title
            titleText="Vi gifter oss (!) om:"
            style={{ color: "var(--text-primary) !important" }}
          ></Title>
        </div>
        <CountDown locale={locale} />
      </div>
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
