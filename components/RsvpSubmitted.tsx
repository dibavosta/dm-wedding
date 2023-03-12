import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import formStyles from "@/components/Form.module.css";
import styles from "@/components/RsvpForm.module.css";

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
    <div
      className={`${formStyles.formContainer} ${formStyles.form} ${styles.thankYouMargin}`}
    >
      <h3 className={styles.thankYouTitle}>{t("rsvp.thanks")}</h3>
      <p className={`${styles.text} ${styles.thankYou}`}>
        {t("rsvp.addAnother")}{" "}
        <button
          className={styles.addAnotherButton}
          onClick={addAnotherGuestHandler}
        >
          {t("rsvp.here")}
        </button>
      </p>
    </div>
  );
}
export default RsvpSubmitted;
