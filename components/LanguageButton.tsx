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
      style={{ fontStyle: props.active ? "italic" : "" }}
      href={props.href}
      locale={props.locale}
      scroll={false}
    >
      <p>{props.displayName}</p>
    </Link>
  );
};

export default LanguageButton;
