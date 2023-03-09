import { Locale } from "@/types/Locale";
import Amsterdam from "@/assets/amsterdam.jpg";
import Image from "next/image";
import { useTranslation } from "next-i18next";

interface BigImageProps {
  locale: Locale;
}

function BigImageDeluxe(props: BigImageProps) {
  const { t } = useTranslation("common");

  return (
    <div className="big-image-container-d">
      <div className="image-wrapper-d">
        <Image src={Amsterdam} alt="Diba and Manolo in Amsterdam"></Image>
        <div className="overlay-d">
          <div className="countdown-margin-d">
            <h1 className="header-text header-names">Manolo & Diba</h1>
            <h1 className="header-text header-invite">
              invite you to their wedding celebration
            </h1>
            <h1 className="header-text header-date">2 September 2023</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigImageDeluxe;
