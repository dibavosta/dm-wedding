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

  async function rsvpResponseHandler(enteredData: any) {
    console.log("Submitting to db: ", enteredData);
    // const response = await fetch("/api/send-rsvp", {
    //   method: "POST",
    //   body: JSON.stringify(enteredData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const data = await response.json();
    // console.log(data);
  }

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
