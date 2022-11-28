import logo from "../../../img/Nu Kenzie home.svg";
import styles from "../../estilos/home.module.css";

export function Cabecalho({ setIsLogin }) {
  return (
    <div className={styles.cabecalho}>
      <img src={logo} alt="" srcset="" />
      <input
        onClick={() => {
          setIsLogin(false);
        }}
        type="button"
        value="Inicio"
      />
    </div>
  );
}
