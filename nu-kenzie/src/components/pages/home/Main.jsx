import styles from "../../estilos/home.module.css";

export function MainHome(props) {
  return <div className={styles.main_home}>{props.children}</div>;
}
