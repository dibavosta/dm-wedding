// domain.com/venue

import TextWithHeadline from "@/components/TextWithHeadline";
import Title from "@/components/Title";
import Container from "@/components/Container";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Locale } from "@/types/Locale";
import Head from "next/head";
import VenueMap from "@/components/VenueMap";

interface VenueProps {
  locale: Locale;
}

function VenuePage({ locale }: VenueProps) {
  const { t } = useTranslation("common");

  return (
    <section className="section-top" id="venue-section">
      <Container style={{ alignItems: "center" }}>
        {/* <Head>
          <title>{t("location.path")}</title>
        </Head> */}
        <Title style={{}} titleText={t("location.title")} />
        <div>
          <p style={{ color: "var(--text-secondary)", marginBottom: "12px" }}>
            {t("location.text")}
          </p>
          <VenueMap />
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
            mainText="location.publicTransport.directions"
            locale={locale}
          />
          <Title
            style={{}}
            titleText={t("location.outdoor-indoor.title")}
          ></Title>
          <TextWithHeadline
            headlineText=""
            mainText="location.outdoor-indoor.ceremony"
            locale={locale}
          />
        </div>
      </Container>
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
