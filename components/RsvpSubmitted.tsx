import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";

interface RsvpSubmittedProps {
  locale: Locale;
  addAnother: () => void;
}

function RsvpSubmitted(props: RsvpSubmittedProps) {
  const { t } = useTranslation("common");

  const addAnotherGuestHandler = () => {
    props.addAnother();
  };

  return (
    <div className="form-container form">
      <h3 className="thank-you-title">{t("rsvp.thanks")}</h3>
      <p className="text thank-you">
        {t("rsvp.addAnother")}{" "}
        <button className="add-another-button" onClick={addAnotherGuestHandler}>
          {t("rsvp.here")}
        </button>
      </p>
    </div>
  );
}
export default RsvpSubmitted;
