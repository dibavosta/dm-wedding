import { useTranslation } from "next-i18next";

export interface Props {
  lang: string;
  displayName: string;
  active: boolean;
}

const LanguageButton = (props: Props) => {
  const { i18n } = useTranslation("common");

  const handleClick = (language: string) => {
    console.log("clicked on " + language);
    i18n.changeLanguage(language);
  };

  return (
    <button
      onClick={handleClick.bind(this, props.lang)}
      disabled={props.active}
      className={`langBtn ${props.active ? "active" : ""}`}
    >
      <p className="dark-color">{props.displayName}</p>
    </button>
  );
};

export default LanguageButton;
