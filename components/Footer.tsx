import { Locale } from "@/types/Locale";
import BigImage from "./BigImage";
import Title from "./Title";

interface FooterProps {
  locale: Locale;
}

function Footer(props: FooterProps) {
  return (
    <div className="footer">
      <Title titleText="DIBA and MANOLO" style={{}} />
    </div>
  );
}

export default Footer;
