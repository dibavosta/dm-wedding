import { TimeType } from "@/enums/TimeType";
import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import CountDownElement from "./CountDownElement";

interface CountDownProps {
  locale: Locale;
}

function CountDown(props: CountDownProps) {
  const { t } = useTranslation("common");

  const calculateTimeLeft = () => {
    var countDownDate = new Date("2023-09-02T15:30:00+01:00");
    const today = new Date();
    let time = {};

    var months = diffInMonth(countDownDate, today);
    var days = diffInDays(countDownDate, today);
    var hours = diffInHours(countDownDate, today);
    time = {
      months: months,
      days: days,
      hours: hours,
    };

    return time;
  };

  function diffInMonth(countDownDate: Date, today: Date) {
    const diff = Math.abs(countDownDate.getMonth() - today.getMonth());
    return diff;
  }

  function diffInDays(countDownDate: Date, today: Date) {
    const days = Math.abs(countDownDate.getDate() - today.getDate());
    return days;
  }

  function diffInHours(countDownDate: Date, today: Date) {
    const hours = Math.abs(countDownDate.getHours() - today.getHours());
    return hours;
  }

  const timeLeft = calculateTimeLeft();

  return (
    <div className="countdown-container">
      <CountDownElement
        locale={props.locale}
        timeUnit={timeLeft.months}
        timeText={TimeType.MONTH}
      />
      <CountDownElement
        locale={props.locale}
        timeUnit={timeLeft.days}
        timeText={TimeType.DAY}
      />
      <CountDownElement
        locale={props.locale}
        timeUnit={timeLeft.hours}
        timeText={TimeType.HOUR}
      />
    </div>
  );
}

export default CountDown;
