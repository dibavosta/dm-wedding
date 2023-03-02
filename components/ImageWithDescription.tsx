import Image from "next/image";

export interface Props {
  imageDescription: string;
  imageSource: string;
}

const ImageWithDescription = (props: Props) => {
  const imageSource = props.imageSource;
  return (
    <div>
      <div className="image-style">
        <Image
          className="story-image"
          src={require("../assets/" + props.imageSource)}
          alt="image alt"
        ></Image>
      </div>
      {/* <p className="text">{props.imageDescription}</p> */}
    </div>
  );
};

export default ImageWithDescription;
