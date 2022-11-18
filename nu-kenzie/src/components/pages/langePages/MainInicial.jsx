import styles from "../../estilos/inicial.module.css";
import NuKenzie from "../../../img/Nu Kenzie.svg";

export function MainIniciar() {
  return (
    <div className={styles.divMain}>
      <img className={styles.logo_titulo} src={NuKenzie} alt="Nu Kenzie" />
      <h1 className={styles.titulo}>Centralize o controle das suas finanças</h1>
      <p className={styles.sub_titulo}>de forma rápida e segura</p>
      <button className={styles.botao_iniciar}>Iniciar</button>
    </div>
  );
}
