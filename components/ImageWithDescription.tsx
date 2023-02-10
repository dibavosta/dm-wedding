import { useTranslation } from "react-i18next";

export interface Props {
  imageDescription: string;
  imageSource: string;
}

const ImageWithDescription = (props: Props) => {
  console.log(props.imageSource);
  const imageSource = props.imageSource;
  return (
    <div className="image-container">
      <div className="image-style">
        <img src={require("../assets/" + props.imageSource)}></img>
      </div>
      <p>{props.imageDescription}</p>
    </div>
  );
};

export default ImageWithDescription;
