import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import BigImage from "@/components/BigImage";
import Story from "./story";
import Program from "./program";
import VenuePage from "./venue";
import RSVP from "./rsvp";

interface HomeProps {
  locale: Locale;
}

function HomePage({ locale }: HomeProps) {
  const { t } = useTranslation("common");

  return (
    <section>
      <Head>
        <title>{t("index.path")}</title>
      </Head>
      <BigImage locale={locale} title="Vi ska gifta oss!" />
      <Story locale={locale} />
      <Program locale={locale} />
      <VenuePage locale={locale} />
      <RSVP locale={locale} />
    </section>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common", "program", "story"])),
    },
  };
};

export default HomePage;
