// domain.com/venue

import TextWithHeadline from "@/components/TextWithHeadline";
import Title from "@/components/Title";
import Container from "@/components/Container";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Locale } from "@/types/Locale";
import Head from "next/head";
import BigImage from "@/components/BigImage";

interface VenueProps {
  locale: Locale;
}

function VenuePage({ locale }: VenueProps) {
  const { t } = useTranslation("common");

  return (
    <section id="venue-section">
      <Container>
        <Head>
          <title>{t("location.path")}</title>
        </Head>
        <Title style={{}} titleText={t("location.title")} />
        <div>
          <p className="text venue-description">{t("location.text")}</p>
          <Title style={{}} titleText={t("location.directions")}></Title>
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
      </Container>
      <BigImage locale={locale} title="Vi ska gifta oss!" />
    </section>
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
