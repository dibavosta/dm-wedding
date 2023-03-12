import { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import RadioButtonContainer from "./RadioButtonContainer";
import { Locale } from "@/types/Locale";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import formStyles from "@/components/Form.module.css";
import styles from "@/components/RsvpForm.module.css";

export interface Props {
  onSendForm: (params: any) => void;
  onRemoveAdditionalForm: () => void;
  locale: Locale;
}

function ChildRsvpForm(props: Props) {
  const { t } = useTranslation("common");

  const nameChildrenRef = useRef<HTMLInputElement>(null);
  const ageChildrenRef = useRef<HTMLInputElement>(null);
  const foodPreferencesChildrenRef = useRef<HTMLTextAreaElement>(null);
  const [enteredBusTo, setEnteredBusTo] = useState("");
  const [enteredBusFrom, setEnteredBusFrom] = useState("");

  const busToResponse = (enteredResponse: string) => {
    setEnteredBusTo(enteredResponse);
  };
  const busFromResponse = (enteredResponse: string) => {
    setEnteredBusFrom(enteredResponse);
  };
  const removeAdditionalForm = () => {
    props.onRemoveAdditionalForm();
  };

  function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    const name = nameChildrenRef.current?.value;
    const age = ageChildrenRef.current?.value;
    const foodPreferences = foodPreferencesChildrenRef.current?.value;

    const enteredData = {
      name: name,
      age: age,
      foodPreferences: foodPreferences,
      busTo: enteredBusTo,
      busFrom: enteredBusFrom,
    };
    props.onSendForm(enteredData);
  }

  return (
    <div className={styles.additionalForm}>
      <div className={formStyles.formContainer}>
        <form
          id="childform"
          className={formStyles.form}
          onSubmit={submitHandler}
        >
          <div className={styles.additionalFormHeader}>
            <h3 className={styles.addNew}>{t("rsvp.child.title")}</h3>
            <IconButton
              onClick={removeAdditionalForm}
              sx={{
                paddingBottom: "12px",
              }}
            >
              <DeleteIcon
                sx={{
                  color: "#b97b52",
                  "&:hover": {
                    color: "#8f683d",
                  },
                }}
              />
            </IconButton>
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="name">{t("rsvp.child.name")}</label>
            <input
              required
              type="text"
              id="nameChildren"
              ref={nameChildrenRef}
            />
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="age">{t("rsvp.child.age")}</label>
            <input required type="text" id="ageChildren" ref={ageChildrenRef} />
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="foodPreferences">
              {t("rsvp.child.foodPreferences")}
            </label>
            <textarea
              id="foodPreferencesChildren"
              rows={2}
              ref={foodPreferencesChildrenRef}
            />
          </div>
          <div className={styles.radioButtonControl}>
            <label className={styles.question} htmlFor="busTo">
              {t("rsvp.busTo")}
            </label>
            <RadioButtonContainer
              numberOfButtons={2}
              name="busToChoice"
              labels={["rsvp.yesBus", "rsvp.noBus"]}
              radioIds={["childBusToYes", "childBusToNo"]}
              onSetValue={busToResponse}
              locale={props.locale}
            />
          </div>
          <div className={styles.radioButtonControl}>
            <label className={styles.question} htmlFor="busFrom">
              {t("rsvp.busFrom")}
            </label>
            <RadioButtonContainer
              numberOfButtons={2}
              name="busFromChoice"
              labels={["rsvp.yesBus", "rsvp.noBus"]}
              radioIds={["childBusFromYes", "childBusFromNo"]}
              onSetValue={busFromResponse}
              locale={props.locale}
            />
          </div>
        </form>
      </div>
      <div className={styles.bottomButton}>
        <Button
          variant="contained"
          type="submit"
          form="childform"
          endIcon={<SendIcon />}
          sx={{
            background: "#b97b52",
            ":hover": {
              bgcolor: "#8f683d",
            },
            alignSelf: "flex-end",
          }}
        >
          {t("rsvp.send")}
        </Button>
      </div>
    </div>
  );
}

export default ChildRsvpForm;
