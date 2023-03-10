import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import BigImageDeluxe from "./BigImageDeluxe";

interface HeaderDeluxeProps {
  locale: Locale;
}

function HeaderDeluxe(props: HeaderDeluxeProps) {
  const { t } = useTranslation("common");
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      {/* <NavigationDeluxe locale={props.locale} /> */}
      <BigImageDeluxe locale={props.locale} />
    </div>
  );
}

export default HeaderDeluxe;
