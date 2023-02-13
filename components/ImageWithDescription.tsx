import Image from "next/image";

export interface Props {
  imageDescription: string;
  imageSource: string;
}

const ImageWithDescription = (props: Props) => {
  const imageSource = props.imageSource;
  return (
    <div className="image-container">
      <div className="image-style">
        <Image
          src={require("../assets/" + props.imageSource)}
          alt="image alt"
        ></Image>
      </div>
      <p>{props.imageDescription}</p>
    </div>
  );
};

export default ImageWithDescription;
