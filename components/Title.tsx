export interface Props {
  titleText: string;
  style: React.CSSProperties;
}

function Title(props: Props) {
  return (
    <div>
      <h1 style={props.style} className="title">
        {props.titleText}
      </h1>
    </div>
  );
}

export default Title;
