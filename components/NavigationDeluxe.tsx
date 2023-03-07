import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import { Locale } from "@/types/Locale";
import { useRouter } from "next/router";
import LanguageButton from "./LanguageButton";

interface NavigationDeluxeProps {
  locale: Locale;
}

function NavigationDeluxe(props: NavigationDeluxeProps) {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const handleHamburgerToggle = () => {
    setOpen(!isOpen);
    console.log("clicked on hamburger, open: " + isOpen);
  };

  const handleMobileNavClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="navbar-d">
      <div className="hamburger-container">
        <div className="hamburger-padding">
          <div
            className={
              "hamburger-menu-d" + (isOpen ? " hamburger-overlay" : "")
            }
          >
            <Hamburger
              rounded
              direction="right"
              size={25}
              color="#8f683d"
              toggled={isOpen}
              toggle={handleHamburgerToggle}
            />

            <div className={"mobile-menu-d" + (isOpen ? " open-d" : "")}>
              <Link
                className="link-decoration-d color"
                href="/"
                locale={props.locale}
                onClick={handleHamburgerToggle}
              >
                {t("index.path")}
              </Link>
              <Link
                className="link-decoration-d color"
                href="#program-section"
                locale={props.locale}
                onClick={handleHamburgerToggle}
              >
                {t("program.path")}
              </Link>
              <Link
                className="link-decoration-d color"
                href="#story-section"
                locale={props.locale}
                onClick={handleHamburgerToggle}
              >
                {t("story.path")}
              </Link>
              <Link
                className="link-decoration-d color"
                href="#rsvp-section"
                locale={props.locale}
                onClick={handleHamburgerToggle}
              >
                {t("rsvp.path")}
              </Link>
              <Link
                className="link-decoration-d color"
                href="#venue-section"
                locale={props.locale}
                onClick={handleHamburgerToggle}
              >
                {t("location.path")}
              </Link>
            </div>
          </div>
        </div>
        <div className="mobile-lang-picker">
          <div className="text-color">
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
                    // href={router.asPath}
                    href="/"
                  ></LanguageButton>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="desktop-menu-d bottom-d text-color">
        <Link className="link-decoration-d" href="/" locale={props.locale}>
          {t("index.path")}
        </Link>
        <Link
          className="link-decoration-d"
          href="#program-section"
          locale={props.locale}
        >
          {t("program.path")}
        </Link>
        <Link
          className="link-decoration-d"
          href="#story-section"
          locale={props.locale}
        >
          {t("story.path")}
        </Link>
        <Link
          className="link-decoration-d"
          href="#rsvp-section"
          locale={props.locale}
        >
          {t("rsvp.path")}
        </Link>
        <Link
          className="link-decoration-d"
          href="#venue-section"
          locale={props.locale}
        >
          {t("location.path")}
        </Link>
        <div className="text-color">
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
                  // href={router.asPath}
                  href="/"
                ></LanguageButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavigationDeluxe;
