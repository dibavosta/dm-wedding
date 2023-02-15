import { useTranslation } from "next-i18next";
import Link from "next/link";

export interface Props {
  displayName: string;
  active: boolean;
  locale: string;
  href: string;
}

const LanguageButton = (props: Props) => {
  const { i18n } = useTranslation("common");

  return (
    <Link
      className={props.active ? "active" : ""}
      href={props.href}
      locale={props.locale}
    >
      <p>{props.displayName}</p>
    </Link>
  );
};

export default LanguageButton;
