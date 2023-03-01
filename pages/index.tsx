import Title from "@/components/Title";
import Container from "@/components/Container";
import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import CountDown from "@/components/CountDown";
import Amsterdam from "@/assets/amsterdam.jpg";
import Image from "next/image";
import BigImage from "@/components/BigImage";

interface HomeProps {
  locale: Locale;
}

function HomePage({ locale }: HomeProps) {
  const { t } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>{t("index.path")}</title>
      </Head>
      <BigImage locale={locale} title="Vi ska gifta oss!" />
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

export default HomePage;
