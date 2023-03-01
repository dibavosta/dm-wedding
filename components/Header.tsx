import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import Favicon from "./Favicon";
import { useRouter } from "next/router";
import LanguageButton from "./LanguageButton";
import FaviconDeluxe from "./FaviconDeluxe";
import myLogo from "../assets/MDdeluxe.svg";

interface StoryTimeLineProps {
  locale: Locale;
}

function Header({ locale }: StoryTimeLineProps) {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();

  const clickOnLogoHandler = () => {
    router.replace("/");
  };

  return (
    <div className="top">
      <div className="top-center">
        <div className="header">
          <h1>hejhejhej</h1>
          <div className="logo" onClick={clickOnLogoHandler}>
            <FaviconDeluxe />
          </div>
          {/* <FaviconDeluxe /> */}
        </div>
      </div>
      <div className="top-right text-color">
        <ul className="ul-list-lang">
          {router.locales?.map((locale) => (
            <li className="li-lang" key={locale}>
              <LanguageButton
                displayName={
                  locale === "sv"
                    ? "🇸🇪"
                    : locale === "en"
                    ? "🇬🇧"
                    : locale === "it"
                    ? "🇮🇹"
                    : ""
                }
                active={i18n.language === locale}
                locale={locale}
                href={router.asPath}
              ></LanguageButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
