import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import styles from "@/components/RadioButtonContainer.module.css";

export interface Props {
  numberOfButtons: number;
  name: string;
  labels: string[];
  radioIds: string[];
  onSetValue: (params: any) => void;
  locale: Locale;
}

function RadioButtonContainer(props: Props) {
  const { t } = useTranslation("common");
  const radioButtons = [];
  const [selectedRadioButton, setSelectedRadioButton] = useState("");

  const radioClickedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSelectedRadioButton(value);
    if (value.includes("Yes")) {
      props.onSetValue(true);
    } else {
      props.onSetValue(false);
    }
  };

  const isRadioSelected = (value: string): boolean => {
    return selectedRadioButton === value;
  };

  for (let i = 0; i < props.numberOfButtons; i++) {
    radioButtons.push(
      <div className={styles.radioButton} key={props.radioIds[i]}>
        <input
          className={styles.input}
          type="radio"
          id={props.radioIds[i]}
          name={props.name}
          value={props.radioIds[i]}
          checked={isRadioSelected(props.radioIds[i])}
          onChange={radioClickedHandler}
        ></input>
        <label className={styles.radioButtonLabel} htmlFor={props.radioIds[i]}>
          {t(props.labels[i])}
        </label>
      </div>
    );
  }

  return <div className={styles.radioButtonContainer}>{radioButtons}</div>;
}

export default RadioButtonContainer;
