import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import { Locale } from "@/types/Locale";
import { useRouter } from "next/router";
import LanguageButton from "./LanguageButton";
import styles from "./Navigation.module.css";

interface NavigationProps {
  locale: Locale;
}

function Navigation(props: NavigationProps) {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const handleHamburgerToggle = () => {
    setOpen(!isOpen);
  };

  const styleHamburgerIsOpen = isOpen ? styles.open : "";
  const styleHamburgerOverlay = isOpen ? styles.hamburgerOverlay : "";

  return (
    <div className={styles.navbar}>
      <div className={styles.hamburgerContainer}>
        <div className={styles.hamburgerPadding}>
          <div className={`${styles.hamburgerMenu} ${styleHamburgerOverlay}`}>
            <Hamburger
              rounded
              direction="right"
              size={25}
              color="#8f683d"
              toggled={isOpen}
              toggle={handleHamburgerToggle}
            />

            <div className={`${styles.mobileMenu} ${styleHamburgerIsOpen}`}>
              <Link
                className={styles.linkDecoration}
                href="/"
                locale={props.locale}
                onClick={handleHamburgerToggle}
              >
                {t("index.path")}
              </Link>
              <Link
                className={styles.linkDecoration}
                href="#program-section"
                locale={props.locale}
                onClick={handleHamburgerToggle}
              >
                {t("program.path")}
              </Link>
              <Link
                className={styles.linkDecoration}
                href="#story-section"
                locale={props.locale}
                onClick={handleHamburgerToggle}
              >
                {t("story.path")}
              </Link>
              <Link
                className={styles.linkDecoration}
                href="#rsvp-section"
                locale={props.locale}
                onClick={handleHamburgerToggle}
              >
                {t("rsvp.path")}
              </Link>
              <Link
                className={styles.linkDecoration}
                href="#venue-section"
                locale={props.locale}
                onClick={handleHamburgerToggle}
              >
                {t("location.path")}
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.mobileLangPicker}>
          <div>
            <ul className={styles.listLang}>
              {router.locales?.map((locale) => (
                <li className={styles.lang} key={locale}>
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
                    href="/"
                  ></LanguageButton>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.desktopMenu}>
        <Link className={styles.linkDecoration} href="/" locale={props.locale}>
          {t("index.path")}
        </Link>
        <Link
          className={styles.linkDecoration}
          href="#program-section"
          locale={props.locale}
        >
          {t("program.path")}
        </Link>
        <Link
          className={styles.linkDecoration}
          href="#story-section"
          locale={props.locale}
        >
          {t("story.path")}
        </Link>
        <Link
          className={styles.linkDecoration}
          href="#rsvp-section"
          locale={props.locale}
        >
          {t("rsvp.path")}
        </Link>
        <Link
          className={styles.linkDecoration}
          href="#venue-section"
          locale={props.locale}
        >
          {t("location.path")}
        </Link>
        <div>
          <ul className={styles.listLang}>
            {router.locales?.map((locale) => (
              <li className={styles.lang} key={locale}>
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

export default Navigation;
