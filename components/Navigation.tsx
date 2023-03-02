import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import { Locale } from "@/types/Locale";
import { useRouter } from "next/router";
import Header from "./Header";

interface NavigationProps {
  locale: Locale;
}

function Navigation({ locale }: NavigationProps) {
  const { t } = useTranslation("common");
  const [isOpen, setOpen] = useState(false);

  const handleHamburgerToggle = () => {
    setOpen(!isOpen);
    console.log("clicked on hamburger, open: " + isOpen);
  };

  return (
    <div className="navbar">
      <div className={"hamburger-menu" + (isOpen ? " hamburger-overlay" : "")}>
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
          <Link
            className="link-decoration color"
            href="#program-section"
            locale={locale}
          >
            {t("program.path")}
          </Link>
          <Link
            className="link-decoration color"
            href="#story-section"
            locale={locale}
          >
            {t("story.path")}
          </Link>
          <Link
            className="link-decoration color"
            href="#rsvp-section"
            locale={locale}
          >
            {t("rsvp.path")}
          </Link>
          <Link
            className="link-decoration color"
            href="#venue-section"
            locale={locale}
          >
            {t("location.path")}
          </Link>
        </div>
      </div>

      <Header locale={locale} />
      <div className="desktop-menu bottom text-color">
        <Link className="link-decoration color" href="/" locale={locale}>
          {t("index.path")}
        </Link>
        <Link
          className="link-decoration color"
          href="#program-section"
          locale={locale}
        >
          {t("program.path")}
        </Link>
        <Link
          className="link-decoration color"
          href="#story-section"
          locale={locale}
        >
          {t("story.path")}
        </Link>
        <Link
          className="link-decoration color"
          href="#rsvp-section"
          locale={locale}
        >
          {t("rsvp.path")}
        </Link>
        <Link
          className="link-decoration color"
          href="#venue-section"
          locale={locale}
        >
          {t("location.path")}
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
