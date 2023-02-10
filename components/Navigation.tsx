import { useTranslation } from "next-i18next";
import LanguageButton from "./LanguageButton";
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import { Locale } from "@/types/Locale";
import { useRouter } from "next/router";

interface NavigationProps {
  locale: Locale;
}

function Navigation({ locale }: NavigationProps) {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const handleHamburgerToggle = () => {
    setOpen(!isOpen);
    console.log("clicked on hamburger, open: " + isOpen);
  };

  return (
    <div className="navbar">
      <div className="top">
        <div className="top-center">
          <div className="header dark-color">
            <h1>{t("page.title")}</h1>
          </div>
        </div>
        <div className="top-right text-color">
          <ul className="ul-list-lang">
            {router.locales?.map((locale) => (
              <li className="li-lang">
                <LanguageButton
                  displayName={
                    locale === "sv"
                      ? "🇸🇪 SVE"
                      : locale === "en"
                      ? "🇬🇧 ENG"
                      : locale === "it"
                      ? "🇮🇹 ITA"
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
      <div className="desktop-menu bottom text-color">
        <Link className="link-decoration color" href="/" locale={locale}>
          {t("index.path")}
        </Link>
        <Link className="link-decoration color" href="/story" locale={locale}>
          {t("story.path")}
        </Link>
        <Link className="link-decoration color" href="/rsvp" locale={locale}>
          {t("rsvp.path")}
        </Link>
        <Link className="link-decoration color" href="/venue" locale={locale}>
          {t("location.path")}
        </Link>
      </div>
      <div className="hamburger-menu">
        <Hamburger
          rounded
          direction="right"
          size={25}
          color="#8f683d"
          toggled={isOpen}
          toggle={handleHamburgerToggle}
        />
        <div className={"mobile-menu" + (isOpen ? " open" : "")}>
          <Link className="link-decoration color" href="/" locale={locale}>
            {t("index.path")}
          </Link>
          <Link className="link-decoration color" href="/story" locale={locale}>
            {t("story.path")}
          </Link>
          <Link className="link-decoration color" href="/rsvp" locale={locale}>
            {t("rsvp.path")}
          </Link>
          <Link className="link-decoration color" href="/venue" locale={locale}>
            {t("location.path")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
