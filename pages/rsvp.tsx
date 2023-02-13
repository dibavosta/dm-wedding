import Title from "@/components/Title";
import RsvpForm from "../components/RsvpForm";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Locale } from "@/types/Locale";
import Head from "next/head";

interface RsvpProps {
  locale: Locale;
}

function RSVP({ locale }: RsvpProps) {
  const { t } = useTranslation("common");

  const rsvpResponseHandler = (enteredData: any) => {
    console.log(enteredData);
    enteredData.firstName,
      enteredData.lastName,
      enteredData.attending,
      enteredData.speech,
      enteredData.busTo,
      enteredData.busFrom,
      enteredData.foodPreferences;
  };

  return (
    <div className="content-container">
      <Head>
        <title>RSVP</title>
      </Head>
      <section>
        <Title titleText={t("rsvp.title")} />
        <RsvpForm onSubmitForm={rsvpResponseHandler} locale={locale} />
      </section>
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

export default RSVP;
