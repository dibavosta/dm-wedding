import { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import RadioButtonContainer from "./RadioButtonContainer";
import { Locale } from "@/types/Locale";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export interface Props {
  onSendForm: (params: any) => void;
  onRemoveAdditionalForm: () => void;
  locale: Locale;
}

function ChildRsvpForm(props: Props) {
  const { t } = useTranslation("common");
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const foodPreferencesRef = useRef<HTMLTextAreaElement>(null);
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

  const submitHandler = () => {
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const age = ageRef.current?.value;
    const foodPreferences = foodPreferencesRef.current?.value;

    const enteredData = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      foodPreferences: foodPreferences,
      busTo: enteredBusTo,
      busFrom: enteredBusFrom,
    };
    props.onSendForm(enteredData);
  };

  return (
    <div className="additional-form">
      <div className="form-container">
        <form className="form" onSubmit={submitHandler}>
          <div className="additional-form-header">
            <h3 className="add-new">Enter details of child</h3>
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
          <div className="input-control">
            <label htmlFor="firstName">{t("rsvp.firstName")}</label>
            <input required type="text" id="firstName" ref={firstNameRef} />
          </div>
          <div className="input-control">
            <label htmlFor="lastName">{t("rsvp.lastName")}</label>
            <input required type="text" id="lastName" ref={lastNameRef} />
          </div>
          <div className="input-control">
            <label htmlFor="age">{t("rsvp.age")}</label>
            <input required type="text" id="age" ref={ageRef} />
          </div>
          <div className="input-control">
            <label htmlFor="foodPreferences">{t("rsvp.foodPreferences")}</label>
            <textarea id="foodPreferences" rows={2} ref={foodPreferencesRef} />
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
        </form>
      </div>
      <div className="bottom-button">
        <Button
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
          sx={{
            background: "#b97b52",
            ":hover": {
              bgcolor: "#8f683d",
            },
            alignSelf: "flex-end",
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default ChildRsvpForm;
