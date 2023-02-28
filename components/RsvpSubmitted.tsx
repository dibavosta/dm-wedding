import { Locale } from "@/types/Locale";
import Link from "next/link";
import Title from "./Title";

interface RsvpSubmittedProps {
  locale: Locale;
}

function RsvpSubmitted(props: RsvpSubmittedProps) {
  return (
    <div className="form-container form">
      <h3>Tack för ditt svar!</h3>
      <p className="text">
        Vill du skicka in ett till svar? Klicka{" "}
        <a className="color" href="/rsvp">
          här
        </a>
      </p>
    </div>
  );
}
export default RsvpSubmitted;
