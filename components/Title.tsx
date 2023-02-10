export interface Props {
  titleText: string;
}

function Title(props: Props) {
  return (
    <div>
      <h1 className="title">{props.titleText}</h1>
    </div>
  );
}

export default Title;
