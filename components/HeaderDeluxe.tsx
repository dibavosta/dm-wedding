import { Locale } from "@/types/Locale";
import BigImageDeluxe from "./BigImageDeluxe";

interface HeaderDeluxeProps {
  locale: Locale;
}

function HeaderDeluxe(props: HeaderDeluxeProps) {
  return (
    <div>
      <BigImageDeluxe locale={props.locale} />
    </div>
  );
}

export default HeaderDeluxe;
