// domain.com/venue

import TextWithHeadline from "@/components/TextWithHeadline";
import Title from "@/components/Title";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Locale } from "@/types/Locale";

interface VenueProps {
  locale: Locale;
}

function VenuePage({ locale }: VenueProps) {
  const { t } = useTranslation("common");

  return (
    <div className="content-container">
      <Title titleText={t("location.title")} />
      <div className="main-text color">
        <p>{t("location.text")}</p>
        <h2 className="dark-color headline">{t("location.directions")}</h2>
        <TextWithHeadline
          headlineText="location.car.title"
          mainText="location.car.directions"
          locale={locale}
        />
        <TextWithHeadline
          headlineText="location.bus.title"
          mainText="location.bus.directions"
          locale={locale}
        />
        <TextWithHeadline
          headlineText="location.publicTransport.title"
          mainText="location.publicTransport.title"
          locale={locale}
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

export default VenuePage;
