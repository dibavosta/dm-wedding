import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import ImageWithDescription from "./ImageWithDescription";

interface StorySectionProps {
  locale: Locale;
  section: string;
}

function StorySection(props: StorySectionProps) {
  const { t } = useTranslation("story");

  return (
    <div className="layout">
      <div className="layout__item layout__item--body">
        <h2 className="headline">
          {t(`${props.section}.title`, { ns: "story" })}
        </h2>
        <p className="text">{t(`${props.section}.text`, { ns: "story" })}</p>
      </div>
      <div className="layout__item layout__item--figure">
        <ImageWithDescription
          imageSource={"bild.jpg"}
          imageDescription={t("image.description")}
        />
      </div>
    </div>
  );
}

export default StorySection;
