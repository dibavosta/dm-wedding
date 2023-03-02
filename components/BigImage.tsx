import { Locale } from "@/types/Locale";
import Title from "./Title";
import Amsterdam from "@/assets/amsterdam.jpg";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import CountDown from "./CountDown";

interface BigImageProps {
  locale: Locale;
  title: string;
}

function BigImage(props: BigImageProps) {
  const { t } = useTranslation("common");

  return (
    <div className="image-container-deluxe">
      <div className="big-image-container">
        <div className="image-wrapper">
          <Image src={Amsterdam} alt="Diba and Manolo in Amsterdam"></Image>
          <div className="overlay">
            <div className="countdown-margin">
              <div className="header-margin">
                <Title titleText="Vi gifter oss (!) om:"></Title>
              </div>
              <CountDown locale={props.locale} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigImage;
