import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import ImageWithDescription from "./ImageWithDescription";
import styles from "@/components/Story.module.css";

interface StorySectionProps {
  locale: Locale;
  section: string;
}

function StorySection(props: StorySectionProps) {
  const { t } = useTranslation("story");

  return (
    <div className={styles.layout}>
      <div className={`${styles.layoutItem} ${styles.layoutItemBody}`}>
        <h2 className="headline">
          {t(`${props.section}.title`, { ns: "story" })}
        </h2>
        <p className="text">{t(`${props.section}.text`, { ns: "story" })}</p>
      </div>
      <div className={`${styles.layoutItem} ${styles.layoutItemFigure}`}>
        <ImageWithDescription
          imageSource={"bild.jpg"}
          imageDescription={t("image.description")}
        />
      </div>
    </div>
  );
}

export default StorySection;
