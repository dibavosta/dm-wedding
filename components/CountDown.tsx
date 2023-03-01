import { TimeType } from "@/enums/TimeType";
import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import CountDownElement from "./CountDownElement";

interface CountDownProps {
  locale: Locale;
}

function CountDown(props: CountDownProps) {
  const { t } = useTranslation("common");
  const countDownDate = new Date("2023-09-02T15:30:00+01:00").getTime();
  var now = new Date().getTime();
  const [days, setDays] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      var timeTotal = countDownDate - now;
      var seconds = Math.floor((timeTotal / 1000) % 60);
      var minutes = Math.floor((timeTotal / 1000 / 60) % 60);
      var hours = Math.floor((timeTotal / (1000 * 60 * 60)) % 24);
      var days = Math.floor(timeTotal / (1000 * 60 * 60 * 24));
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      if (timeTotal < 0) {
        console.log("let us celebrate!");
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className="countdown-container">
      <CountDownElement
        locale={props.locale}
        timeUnit={days}
        timeText={TimeType.DAY}
      />
      <CountDownElement
        locale={props.locale}
        timeUnit={hours}
        timeText={TimeType.HOUR}
      />
      <CountDownElement
        locale={props.locale}
        timeUnit={minutes}
        timeText={TimeType.MINUTE}
      />
      <CountDownElement
        locale={props.locale}
        timeUnit={seconds}
        timeText={TimeType.SECOND}
      />
    </div>
  );
}

export default CountDown;
