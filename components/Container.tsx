import styles from "./Container.module.css";

function Container(props: any) {
  return (
    <div style={props.style} className={styles.contentContainer}>
      {props.children}
    </div>
  );
}

export default Container;
