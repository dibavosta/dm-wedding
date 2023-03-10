function Container(props: any) {
  return (
    <div style={props.style} className="content-container">
      {props.children}
    </div>
  );
}

export default Container;
