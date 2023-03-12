import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import { Locale } from "@/types/Locale";
import { useRouter } from "next/router";
import LanguageButton from "./LanguageButton";
import styles from "@/components/LoggedOutHeader.module.css";

interface LoggedOutHeaderProps {
  locale: Locale;
}

function LoggedOutHeader(props: LoggedOutHeaderProps) {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();

  return (
    <div className={styles.navbar}>
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

      <div className={styles.desktopMenu}>
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

export default LoggedOutHeader;
