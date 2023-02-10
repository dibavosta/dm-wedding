import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";

export interface Props {
  headlineText: string;
  mainText: string;
  locale: Locale;
}

function TextWithHeadline(props: Props) {
  const { t } = useTranslation("common");

  return (
    <div>
      <h3 className="dark-color headline">{t(props.headlineText)}</h3>
      <p>{t(props.mainText)}</p>
    </div>
  );
}

export default TextWithHeadline;
