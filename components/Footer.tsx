import { Locale } from "@/types/Locale";
import Title from "./Title";
import styles from "@/components/Footer.module.css";

interface FooterProps {
  locale: Locale;
}

function Footer(props: FooterProps) {
  return (
    <div className={styles.footer}>
      <Title titleText="Manolo & Diba" style={{}} />
    </div>
  );
}

export default Footer;
