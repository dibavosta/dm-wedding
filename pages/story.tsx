import ImageWithDescription from "@/components/ImageWithDescription";
import Title from "@/components/Title";
import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";

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
      <div className="layout">
        <div className="layout__item layout__item--body">
          <h2 className="headline">First meeting</h2>
          <p className="text">{t("story.text1")}</p>
        </div>
        <div className="layout__item layout__item--figure">
          <ImageWithDescription
            imageSource={"bild.jpg"}
            imageDescription={t("image.description")}
          />
        </div>
      </div>

      <div className="layout">
        <div className="layout__item layout__item--body">
          <h2 className="headline">First date</h2>
          <p className="text">{t("story.text2")}</p>
        </div>
        <div className="layout__item layout__item--figure">
          <ImageWithDescription
            imageSource={"bild.jpg"}
            imageDescription={t("image.description")}
          />
        </div>
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
