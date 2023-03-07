import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";

export interface Props {
  headlineText: string;
  mainText: string;
  locale: Locale;
}

function TextWithHeadline(props: Props) {
  const { t } = useTranslation("common");
  console.log(props.mainText);
  return (
    <div>
      {/* <h3 className="headline">{t(props.headlineText)}</h3>
      <p className="text">{t(props.mainText)}</p> */}
      <h3 className="headline">{t(props.headlineText)}</h3>
      <p className="text">{t(props.mainText)}</p>
    </div>
  );
}

export default TextWithHeadline;
