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
    if (props.timeUnit > 1) {
      switch (props.timeText) {
        case TimeType.MONTH:
          // return t("countdown.manyMonths")
          return "months";
          break;
        case TimeType.DAY:
          return "days";
          break;
        case TimeType.HOUR:
          return "hours";
          break;
        default:
          break;
      }
    } else {
      switch (props.timeText) {
        case TimeType.MONTH:
          // return t("countdown.manyMonths")
          return "month";
          break;
        case TimeType.DAY:
          return "day";
          break;
        case TimeType.HOUR:
          return "hour";
          break;
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
