import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import { Locale } from "@/types/Locale";
import { useRouter } from "next/router";
import Header from "./Header";
import HeaderDeluxe from "./HeaderDeluxe";

interface NavigationDeluxeProps {
  locale: Locale;
}

function NavigationDeluxe(props: NavigationDeluxeProps) {
  const { t } = useTranslation("common");
  const [isOpen, setOpen] = useState(false);

  const handleHamburgerToggle = () => {
    setOpen(!isOpen);
    console.log("clicked on hamburger, open: " + isOpen);
  };

  return (
    <div className="navbar-d">
      <div className="hamburger-container">
        <div
          className={"hamburger-menu-d" + (isOpen ? " hamburger-overlay" : "")}
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
              className="link-decoration color"
              href="/"
              locale={props.locale}
            >
              {t("index.path")}
            </Link>
            <Link
              className="link-decoration-d color"
              href="#program-section"
              locale={props.locale}
            >
              {t("program.path")}
            </Link>
            <Link
              className="link-decoration-d color"
              href="#story-section"
              locale={props.locale}
            >
              {t("story.path")}
            </Link>
            <Link
              className="link-decoration-d color"
              href="#rsvp-section"
              locale={props.locale}
            >
              {t("rsvp.path")}
            </Link>
            <Link
              className="link-decoration-d color"
              href="#venue-section"
              locale={props.locale}
            >
              {t("location.path")}
            </Link>
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
      </div>
      <HeaderDeluxe locale={props.locale} />
    </div>
  );
}

export default NavigationDeluxe;
