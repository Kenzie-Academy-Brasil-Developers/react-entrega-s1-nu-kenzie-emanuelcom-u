import styles from "./inicial.module.css";
import NuKenzie from "./../../img/Nu Kenzie.svg";

export function MainIniciar({ setIsLogin }) {
  return (
    <div className={styles.divMain}>
      <img className={styles.logo_titulo} src={NuKenzie} alt="Nu Kenzie" />
      <h1 className={styles.titulo}>Centralize o controle das suas finanças</h1>
      <p className={styles.sub_titulo}>de forma rápida e segura</p>
      <button
        onClick={() => {
          setIsLogin(true);
        }}
        className={styles.botao_iniciar}
      >
        Iniciar
      </button>
    </div>
  );
}
