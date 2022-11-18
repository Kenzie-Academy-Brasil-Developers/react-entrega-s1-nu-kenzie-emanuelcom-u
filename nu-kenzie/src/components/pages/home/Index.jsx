import logo from "../../../img/Nu Kenzie home.svg";
import styles from "../../estilos/home.module.css";

export function Cabecalho() {
  return (
    <div className={styles.cabecalho}>
      <img src={logo} alt="" srcset="" />
      <input type="button" value="Inicio" />
    </div>
  );
}
