import styles from "@/components/VenueMap.module.css";

function VenueMap() {
  return (
    <div className={styles.mapResponsive}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042.8812354736508!2d18.016803265699224!3d59.20128342832514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7a7a8514047b%3A0xb8c9412b5bcc2b81!2sSundby%20G%C3%A5rd!5e0!3m2!1sen!2sse!4v1678220533270!5m2!1sen!2sse"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
export default VenueMap;
