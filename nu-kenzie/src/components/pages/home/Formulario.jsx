import styles from "../../estilos/home.module.css";

export const Formulario = () => {
  return (
    <div className={styles.card}>
      <form>
        <div className={styles.div_descricao}>
          <label className={styles.descricao_label} htmlFor="descricao">
            Descrição
          </label>
          <input
            className={styles.titulo}
            type="text"
            name="descricao"
            placeholder="Digite aqui sua descrição"
            required
          />
          <span className={styles.exemplo}>Ex: Compra de roupas</span>

          <div className={styles.div_valores}>
            <div className={styles.valor}>
              <label htmlFor="valor">Valor</label>
              <div className={styles.div_input}>
                <input type="number" name="valor" required />
                <span className={styles.span}>R$</span>
              </div>
            </div>
            <div className={styles.valor}>
              <label htmlFor="tipo">Tipo de valor</label>
              <select name="tipo" id="tipo">
                <option value="entrada">Entrada</option>
                <option value="despesa">Despesa</option>
              </select>
            </div>
          </div>
          <input type="submit" value="Inserir valor" />
        </div>
      </form>
    </div>
  );
};
