import { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import RadioButtonContainer from "./RadioButtonContainer";
import { Locale } from "@/types/Locale";

export interface Props {
  onSendForm: (params: any) => void;
  locale: Locale;
}

function RsvpDetailsForm(props: Props) {
  const { t } = useTranslation("common");
  const [enteredSpeech, setEnteredSpeech] = useState("");
  const [enteredBusTo, setEnteredBusTo] = useState("");
  const [enteredBusFrom, setEnteredBusFrom] = useState("");
  const foodPreferencesRef = useRef<HTMLTextAreaElement>(null);

  const speechResponse = (enteredResponse: string) => {
    setEnteredSpeech(enteredResponse);
  };
  const busToResponse = (enteredResponse: string) => {
    setEnteredBusTo(enteredResponse);
  };
  const busFromResponse = (enteredResponse: string) => {
    setEnteredBusFrom(enteredResponse);
  };

  const sendForm = () => {
    const foodPreferences = foodPreferencesRef.current?.value;

    const enteredData = {
      foodPreferences: foodPreferences,
      speech: enteredSpeech,
      busTo: enteredBusTo,
      busFrom: enteredBusFrom,
    };
    props.onSendForm(enteredData);
  };

  return (
    <div className="attending">
      <div className="input-control">
        <label htmlFor="foodPreferences">{t("rsvp.foodPreferences")}</label>
        <textarea id="foodPreferences" rows={2} ref={foodPreferencesRef} />
      </div>
      <div className="radio-button-control">
        <label className="question" htmlFor="speech">
          {t("rsvp.speech")}
        </label>
        <RadioButtonContainer
          numberOfButtons={2}
          name="speech"
          labels={["rsvp.yes", "rsvp.no"]}
          radioIds={["speechYes", "speechNo"]}
          onSetValue={speechResponse}
          locale={props.locale}
        />
      </div>
      <div className="radio-button-control">
        <label className="question" htmlFor="busTo">
          {t("rsvp.busTo")}
        </label>
        <RadioButtonContainer
          numberOfButtons={2}
          name="busToChoice"
          labels={["rsvp.yesBus", "rsvp.noBus"]}
          radioIds={["busToYes", "busToNo"]}
          onSetValue={busToResponse}
          locale={props.locale}
        />
      </div>
      <div className="radio-button-control">
        <label className="question" htmlFor="busFrom">
          {t("rsvp.busFrom")}
        </label>
        <RadioButtonContainer
          numberOfButtons={2}
          name="busFromChoice"
          labels={["rsvp.yesBus", "rsvp.noBus"]}
          radioIds={["busFromYes", "busFromNo"]}
          onSetValue={busFromResponse}
          locale={props.locale}
        />
      </div>
      <div className="actions">
        <button type="submit" onClick={sendForm}>
          Send rsvp
        </button>
      </div>
    </div>
  );
}

export default RsvpDetailsForm;
