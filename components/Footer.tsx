import { Locale } from "@/types/Locale";
import Title from "./Title";

interface FooterProps {
  locale: Locale;
}

function Footer(props: FooterProps) {
  return (
    <div className="footer">
      <Title titleText="Manolo & Diba" style={{}} />
    </div>
  );
}

export default Footer;
