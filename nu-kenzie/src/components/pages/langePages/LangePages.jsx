import styles from "../../estilos/inicial.module.css";
import illustration from "../../../img/illustration.svg";


export function Logo() {
  return (
    <div className={styles.divLogo}>
      <img className={styles.logo} src={illustration} alt="" />
    </div>
  );
}


