import Title from "@/components/Title";
import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import ImageWithDescription from "../components/ImageWithDescription";

interface StoryProps {
  locale: Locale;
}

function Story({ locale }: StoryProps) {
  const { t } = useTranslation("common");

  return (
    <div className="content-container">
      <Head>
        <title>{t("story.path")}</title>
      </Head>
      <Title titleText={t("story.title")} />
      <div className="main-text color">
        <p>{t("story.text")}</p>
        <ImageWithDescription
          imageSource={"bild.jpg"}
          imageDescription={t("image.description")}
        />
      </div>
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
