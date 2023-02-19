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

export interface Props {
  onSubmitForm: (params: any) => void;
  locale: Locale;
}

function RsvpForm(props: Props) {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const [attending, setAttending] = useState(false);
  const [addPartner, setAddPartner] = useState(false);
  const [addChild, setAddChild] = useState(false);

  const [foodPreferences, setFoodPreferences] = useState("");
  const [busTo, setBusTo] = useState(false);
  const [busFrom, setBusFrom] = useState(false);
  const [speech, setSpeech] = useState(false);

  //   var foodPreferences: string | null;
  //   var busTo: boolean | null;
  //   var busFrom: boolean | null;
  //   var speech: boolean | null;
  var fullFormData = useRef<{ [id: string]: any }>({});

  const attendanceResponse = (attendanceResponse: any) => {
    if (attendanceResponse === true) {
      setAttending(true);
    } else {
      setAttending(false);
    }
  };

  const addPartnerResponseHandler = () => {
    console.log("adding partner");
    setAddPartner(!addPartner);
  };

  const addChildResponseHandler = () => {
    console.log("adding child");
    setAddChild(!addChild);
  };

  const registerDetailResponse = (enteredDetails: any) => {
    setFoodPreferences(enteredDetails.foodPreferences);
    setBusTo(enteredDetails.busTo);
    setBusFrom(enteredDetails.busFrom);
    setSpeech(enteredDetails.speech);
    console.log("setting values: ", enteredDetails);
  };

  const registerPartnerResponse = (enteredDetails: any) => {
    console.log("+1 rsvp: ", enteredDetails);
    setFormData();
    fullFormData.current["partner"] = enteredDetails;
    console.log("will submit this: ", fullFormData);
    submitData();
  };

  const registerChildResponse = (enteredDetails: any) => {
    console.log("+child rsvp: ", enteredDetails);
    setFormData();
    fullFormData.current["child"] = enteredDetails;
    console.log("will submit this: ", fullFormData);
    submitData();
  };

  const onRemoveAdditionalForm = () => {
    setAddPartner(false);
  };

  const onRemoveAdditionalChildForm = () => {
    console.log("removing child");
    setAddChild(false);
  };
  // event: React.SyntheticEvent;
  function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    setFormData();

    if (!attending) {
      console.log("gonna add non-attending single guest");
      // addGuest(firstName, lastName, attending, null, null, null, null)
    } else {
      console.log("gonna add attending single guest");
    }
    console.log(fullFormData);
    submitData();
  }

  function setFormData() {
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;

    fullFormData.current["firstName"] = firstName;
    fullFormData.current["lastName"] = lastName;
    fullFormData.current["attending"] = attending;
    fullFormData.current["foodPreferences"] = foodPreferences;
    fullFormData.current["busTo"] = busTo;
    fullFormData.current["busFrom"] = busFrom;
    fullFormData.current["speech"] = speech;
    console.log("first person data: ", fullFormData);
  }

  function submitData() {
    props.onSubmitForm(fullFormData.current);
  }

  const { t } = useTranslation("common");

  return (
    <div className="additional-form">
      <div className="form-container">
        <form id="rsvp" className="form" onSubmit={submitHandler}>
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
              <div className="butt">
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
        <div className="bottom-button">
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
            Send
          </Button>
        </div>
      )}
    </div>
  );
}

export default RsvpForm;
