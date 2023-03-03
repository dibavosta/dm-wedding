import Title from "@/components/Title";
import Container from "@/components/Container";
import RsvpSubmitted from "@/components/RsvpSubmitted";
import RsvpForm from "../components/RsvpForm";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Locale } from "@/types/Locale";
import Head from "next/head";
import { useState } from "react";

interface RsvpProps {
  locale: Locale;
}

function RSVP({ locale }: RsvpProps) {
  const { t } = useTranslation("common");
  const [sentRsvp, setSentRsvp] = useState(false);

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
    setSentRsvp(true);
  }

  const addAnotherGuestHandler = () => {
    setSentRsvp(false);
  };

  return (
    <section id="rsvp-section">
      <Container>
        <Head>
          <title>RSVP</title>
        </Head>
        {sentRsvp ? (
          <RsvpSubmitted locale={locale} addAnother={addAnotherGuestHandler} />
        ) : (
          <div>
            <Title style={{}} titleText={t("rsvp.title")} />
            <RsvpForm onSubmitForm={rsvpResponseHandler} locale={locale} />
          </div>
        )}
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

export default RSVP;
