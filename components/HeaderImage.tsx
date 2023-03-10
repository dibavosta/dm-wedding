import { Locale } from "@/types/Locale";
import Amsterdam from "@/assets/amsterdam.jpg";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import styles from "@/components/HeaderImage.module.css";
interface HeaderImageProps {
  locale: Locale;
}

function HeaderImage(props: HeaderImageProps) {
  const { t } = useTranslation("common");

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={Amsterdam}
          alt="Diba and Manolo in Amsterdam"
        ></Image>
        <div className={styles.overlay}>
          <div className={styles.contentSpacing}>
            <h1 className={`${styles.headerText} ${styles.headerNames}`}>
              Manolo & Diba
            </h1>
            <h1 className={`${styles.headerText} ${styles.headerInvite}`}>
              invite you to their wedding celebration
            </h1>
            <h1 className={`${styles.headerText} ${styles.headerDate}`}>
              2 September 2023
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
