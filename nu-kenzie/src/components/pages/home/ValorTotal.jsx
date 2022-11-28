import styles from "../../estilos/home.module.css";
export const ValorTotal = ({ lista }) => {
  const total = lista.reduce(
    (acomulador, proximo) =>
      proximo.tipo === "Despesa"
        ? acomulador - +proximo.valor
        : acomulador + +proximo.valor,
    0
  );

  return (
    <>
      <div className={styles.cardTotal}>
        <div>
          <h2>Valor total:</h2>
          <span>${total.toFixed(2)}</span>
        </div>
        <p>O valor se refere ao saldo</p>
      </div>
    </>
  );
};
