import styles from "../../estilos/home.module.css";
import NoCard from "../../../img/NoCard.svg";

export const Botoes = () => {
  return (
    <div className={styles.main_list}>
      <h2>Resumo financeiro</h2>
      <ul>
        <li>Todos</li>
        <li>Entradas</li>
        <li>Despesas</li>
      </ul>
    </div>
  );
};

export const MainLista = (props) => {
  return (
    <div>
      {props.children}
      <div className={styles.div_ul_card}>
        <h2>Você ainda não possui nenhum lançamento</h2>
        <img src={NoCard} alt="" />
      </div>
    </div>
  );
};
