import { Locale } from "@/types/Locale";
import { useRef, useState } from "react";
import RadioButtonContainer from "./RadioButtonContainer";
import RsvpDetailsForm from "./RsvpDetailsForm";
import { useTranslation } from "next-i18next";
import FullRsvpForm from "./FullRsvpForm";
import AddPersonSpeedDial from "./AddPersonSpeedDial";
import ChildRsvpForm from "./ChildRsvpForm";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import formStyles from "@/components/Form.module.css";
import styles from "@/components/RsvpForm.module.css";

export interface Props {
  onSubmitForm: (params: any) => void;
  locale: Locale;
}

function RsvpForm(props: Props) {
  const { t } = useTranslation("common");

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const [attending, setAttending] = useState(false);
  const [addPartner, setAddPartner] = useState(false);
  const [addChild, setAddChild] = useState(false);

  const [foodPreferences, setFoodPreferences] = useState("");
  const [busTo, setBusTo] = useState(false);
  const [busFrom, setBusFrom] = useState(false);
  const [speech, setSpeech] = useState(false);

  const attendanceResponse = (attendanceResponse: any) => {
    if (attendanceResponse === true) {
      setAttending(true);
    } else {
      setAttending(false);
    }
  };

  const addPartnerResponseHandler = () => {
    setAddPartner(!addPartner);
  };

  const addChildResponseHandler = () => {
    setAddChild(!addChild);
  };

  const registerDetailResponse = (enteredDetails: any) => {
    setFoodPreferences(enteredDetails.foodPreferences);
    setBusTo(enteredDetails.busTo);
    setBusFrom(enteredDetails.busFrom);
    setSpeech(enteredDetails.speech);
  };

  const registerPartnerResponse = (enteredDetails: any) => {
    var fullFormData = getFormData();
    fullFormData["partner"] = enteredDetails;
    submitData(fullFormData);
  };

  const registerChildResponse = (enteredDetails: any) => {
    var fullFormData = getFormData();
    fullFormData["child"] = enteredDetails;
    submitData(fullFormData);
  };

  const onRemoveAdditionalForm = () => {
    setAddPartner(false);
  };

  const onRemoveAdditionalChildForm = () => {
    setAddChild(false);
  };

  function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    var fullFormData = getFormData();
    submitData(fullFormData);
  }

  function getFormData(): { [id: string]: any } {
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    var fullFormData: { [id: string]: any } = {};

    fullFormData["firstName"] = firstName;
    fullFormData["lastName"] = lastName;
    fullFormData["attending"] = attending;
    fullFormData["foodPreferences"] = foodPreferences;
    fullFormData["busTo"] = busTo;
    fullFormData["busFrom"] = busFrom;
    fullFormData["speech"] = speech;

    return fullFormData;
  }

  function submitData(fullFormData: { [id: string]: any }) {
    props.onSubmitForm(fullFormData);
  }

  return (
    <div className={styles.additionalForm}>
      <div className={formStyles.formContainer}>
        <form id="rsvp" className={formStyles.form} onSubmit={submitHandler}>
          <div className={styles.inputControl}>
            <label htmlFor="firstName">{t("rsvp.firstName")}</label>
            <input required type="text" id="firstName" ref={firstNameRef} />
          </div>
          <div className={styles.inputControl}>
            <label htmlFor="lastName">{t("rsvp.lastName")}</label>
            <input required type="text" id="lastName" ref={lastNameRef} />
          </div>
          <div className={styles.radioButtonControl}>
            <label className={styles.question} htmlFor="attendance">
              {t("rsvp.attendance")}
            </label>
            <RadioButtonContainer
              numberOfButtons={2}
              name="attendance"
              labels={["rsvp.yes", "rsvp.no"]}
              radioIds={["attendanceYes", "attendanceNo"]}
              onSetValue={attendanceResponse}
              locale={props.locale}
            />
          </div>
          {attending ? (
            <div>
              <RsvpDetailsForm
                onSendForm={registerDetailResponse}
                locale={props.locale}
              />
              <div className={styles.butt}>
                {addPartner || addChild ? (
                  <div></div>
                ) : (
                  <AddPersonSpeedDial
                    onAddPartner={addPartnerResponseHandler}
                    onAddChild={addChildResponseHandler}
                  />
                )}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </form>
      </div>
      {addPartner ? (
        <FullRsvpForm
          onSendForm={registerPartnerResponse}
          onRemoveAdditionalForm={onRemoveAdditionalForm}
          locale={props.locale}
        />
      ) : addChild ? (
        <ChildRsvpForm
          onSendForm={registerChildResponse}
          onRemoveAdditionalForm={onRemoveAdditionalChildForm}
          locale={props.locale}
        />
      ) : (
        <div className={styles.bottomButton}>
          <Button
            variant="contained"
            form="rsvp"
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

export default RsvpForm;
