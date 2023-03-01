import { TimeType } from "@/enums/TimeType";
import { Locale } from "@/types/Locale";
import { t } from "i18next";
import { useTranslation } from "next-i18next";

interface CountDownElementProps {
  timeUnit: number;
  timeText: TimeType;
  locale: Locale;
}

function CountDownElement(props: CountDownElementProps) {
  const { t } = useTranslation("common");

  function getTimeText() {
    if (props.timeUnit === 1) {
      switch (props.timeText) {
        case TimeType.MONTH:
          return t("countDown.month");
        case TimeType.DAY:
          return t("countDown.day");
        case TimeType.HOUR:
          return t("countDown.hour");
        case TimeType.MINUTE:
          return t("countDown.minute");
        case TimeType.SECOND:
          return t("countDown.second");
        default:
          break;
      }
    } else {
      switch (props.timeText) {
        case TimeType.MONTH:
          return t("countDown.months");
        case TimeType.DAY:
          return t("countDown.days");
        case TimeType.HOUR:
          return t("countDown.hours");
        case TimeType.MINUTE:
          return t("countDown.minutes");
        case TimeType.SECOND:
          return t("countDown.seconds");
        default:
          break;
      }
    }
  }

  return (
    <div className="form-container count-down">
      <div></div>
      <h3>{props.timeUnit}</h3>
      <p className="text">{getTimeText()}</p>
    </div>
  );
}

export default CountDownElement;
