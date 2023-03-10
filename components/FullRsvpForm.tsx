import { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import RadioButtonContainer from "./RadioButtonContainer";
import { Locale } from "@/types/Locale";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddChildSpeedDial from "./AddChildSpeedDial";
import ChildRsvpForm from "./ChildRsvpForm";

export interface Props {
  onSendForm: (params: any) => void;
  onRemoveAdditionalForm: () => void;
  locale: Locale;
}

function FullRsvpForm(props: Props) {
  const { t } = useTranslation("common");
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const [partnerAttending, setpartnerAttending] = useState(false);
  const foodPreferencesRef = useRef<HTMLTextAreaElement>(null);
  const [enteredSpeech, setEnteredSpeech] = useState("");
  const [enteredBusTo, setEnteredBusTo] = useState("");
  const [enteredBusFrom, setEnteredBusFrom] = useState("");
  const [addChild, setAddChild] = useState(false);

  const attendanceResponse = (attendanceResponse: any) => {
    if (attendanceResponse === true) {
      setpartnerAttending(true);
    } else {
      setpartnerAttending(false);
    }
  };

  const speechResponse = (enteredResponse: string) => {
    setEnteredSpeech(enteredResponse);
  };
  const busToResponse = (enteredResponse: string) => {
    setEnteredBusTo(enteredResponse);
  };
  const busFromResponse = (enteredResponse: string) => {
    setEnteredBusFrom(enteredResponse);
  };

  const removeAdditionalForm = () => {
    props.onRemoveAdditionalForm();
  };

  const addChildResponseHandler = () => {
    setAddChild(true);
  };

  const registerChildResponse = (enteredDetails: any) => {
    const data = getFullFormData();
    data["child"] = enteredDetails;
    props.onSendForm(data);
  };

  const onRemoveAdditionalChildForm = () => {
    setAddChild(false);
  };

  function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    const data = getFullFormData();
    props.onSendForm(data);
  }

  function getFullFormData(): { [id: string]: any } {
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const foodPreferences = foodPreferencesRef.current?.value;
    var fullFormData: { [id: string]: any } = {};

    fullFormData["firstName"] = firstName;
    fullFormData["lastName"] = lastName;
    fullFormData["attending"] = partnerAttending;
    fullFormData["foodPreferences"] = foodPreferences;
    fullFormData["speech"] = enteredSpeech;
    fullFormData["busTo"] = enteredBusTo;
    fullFormData["busFrom"] = enteredBusFrom;

    return fullFormData;
  }

  return (
    <div className="additional-form">
      <div className="form-container">
        <form id="fullForm" className="form" onSubmit={submitHandler}>
          <div className="additional-form-header">
            <h3 className="add-new">Enter details of partner</h3>
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
          <div className="radio-button-control">
            <label className="question" htmlFor="attendance">
              {t("rsvp.attendance")}
            </label>
            <RadioButtonContainer
              numberOfButtons={2}
              name="attendance"
              labels={["rsvp.yes", "rsvp.no"]}
              radioIds={["partnerAttendanceYes", "partnerAttendanceNo"]}
              onSetValue={attendanceResponse}
              locale={props.locale}
            />
          </div>
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
              radioIds={["partnerSpeechYes", "partnerSpeechNo"]}
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
              radioIds={["partnerBusToYes", "partnerBusToNo"]}
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
              radioIds={["partnerBusFromYes", "partnerBusFromNo"]}
              onSetValue={busFromResponse}
              locale={props.locale}
            />
          </div>
          <div className="butt">
            {addChild ? (
              <div></div>
            ) : (
              <AddChildSpeedDial onAddChild={addChildResponseHandler} />
            )}
          </div>
        </form>
      </div>
      {addChild ? (
        <ChildRsvpForm
          onSendForm={registerChildResponse}
          onRemoveAdditionalForm={onRemoveAdditionalChildForm}
          locale={props.locale}
        />
      ) : (
        <div className="bottom-button">
          <Button
            variant="contained"
            form="fullForm"
            type="submit"
            endIcon={<SendIcon />}
            sx={{
              background: "#b97b52",
              ":hover": {
                bgcolor: "#8f683d",
              },
            }}
          >
            {t("rsvp.send")}
          </Button>
        </div>
      )}
    </div>
  );
}

export default FullRsvpForm;
