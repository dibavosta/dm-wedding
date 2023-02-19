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

  let foodPreferences: string | null;
  let busTo: boolean | null;
  let busFrom: boolean | null;
  let speech: boolean | null;

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
    foodPreferences = enteredDetails.foodPreferences;
    busTo = enteredDetails.busTo;
    busFrom = enteredDetails.busFrom;
    speech = enteredDetails.speech;
    console.log("setting values: ", enteredDetails);
  };

  const registerPartnerResponse = (enteredDetails: any) => {
    console.log("+1: ", enteredDetails);
  };

  const registerChildResponse = (enteredDetails: any) => {
    console.log("+child: ", enteredDetails);
  };

  const onRemoveAdditionalForm = () => {
    setAddPartner(false);
  };

  const onRemoveAdditionalChildForm = () => {
    console.log("removinf child");
    setAddChild(false);
  };
  // event: React.SyntheticEvent;
  function submitHandler() {
    // event.preventDefault();
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;

    const enteredFormData = {
      firstName,
      lastName,
      attending,
      speech,
      busTo,
      busFrom,
      foodPreferences,
    };

    if (!attending) {
      console.log("gonna add non-attending guest");
      // addGuest(firstName, lastName, attending, null, null, null, null)
    } else {
      console.log("gonna add attending guest");
    }
    console.log(enteredFormData);
    // props.onSubmitForm(enteredFormData);
  }

  const { t } = useTranslation("common");

  return (
    <div className="additional-form">
      <div className="form-container">
        <form className="form" onSubmit={submitHandler}>
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
