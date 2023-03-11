import { Locale } from "@/types/Locale";
import HeaderImage from "./HeaderImage";

interface HeaderProps {
  locale: Locale;
}

function Header(props: HeaderProps) {
  return (
    <div>
      <HeaderImage locale={props.locale} />
    </div>
  );
}

export default Header;
