import Image from "next/image";
import styles from "@/components/ImageWithDescription.module.css";

export interface Props {
  imageDescription: string;
  imageSource: string;
}

const ImageWithDescription = (props: Props) => {
  const imageSource = props.imageSource;
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.imageStyle}
          src={require("../assets/" + props.imageSource)}
          alt="image alt"
        ></Image>
      </div>
      {/* <p className="text">{props.imageDescription}</p> */}
    </div>
  );
};

export default ImageWithDescription;
