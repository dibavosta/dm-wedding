import { Locale } from "@/types/Locale";
import Title from "./Title";
import Amsterdam from "@/assets/amsterdam.jpg";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import CountDown from "./CountDown";
import FaviconDeluxe from "./FaviconDeluxe";

interface BigImageProps {
  locale: Locale;
  // title: string;
}

function BigImageDeluxe(props: BigImageProps) {
  const { t } = useTranslation("common");

  return (
    <div className="image-container-deluxe-d">
      <div className="big-image-container-d">
        <div className="image-wrapper-d">
          <Image src={Amsterdam} alt="Diba and Manolo in Amsterdam"></Image>
          <div className="overlay-d">
            <div className="countdown-margin-d">
              <h1 className="header-text header-names">DIBA and MANOLO</h1>
              <h1 className="header-text header-invite">
                invite you to their wedding celebration
              </h1>
              <h1 className="header-text header-date">02 September 2023</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigImageDeluxe;
