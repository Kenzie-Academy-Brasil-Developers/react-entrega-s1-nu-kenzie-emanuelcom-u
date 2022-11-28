import { useState } from "react";
import styles from "../../estilos/home.module.css";

export const Formulario = ({ setLista, lista }) => {
  const [inputDescricao, setInputDescricao] = useState("");
  const [inputValor, setInputValor] = useState(0);
  const [inputTipo, setInputTipo] = useState("");
  const [id, setId] = useState(1);

  return (
    <div className={styles.card}>
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          console.log(inputDescricao, inputTipo, inputValor);
          if (
            inputDescricao.length !== 0 &&
            inputValor !== 0 &&
            inputTipo !== ""
          ) {
            setLista((velhaLista) => [
              ...velhaLista,
              {
                descricao: inputDescricao,
                valor: Number(inputValor),
                tipo: inputTipo,
                id: id,
              },
            ]);
            setId(id + 1);
          }
        }}
      >
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
            onChange={(evento) => setInputDescricao(evento.target.value)}
          />
          <span className={styles.exemplo}>Ex: Compra de roupas</span>

          <div className={styles.div_valores}>
            <div className={styles.valor}>
              <label htmlFor="valor">Valor</label>
              <div className={styles.div_input}>
                <input
                  onChange={(evento) => setInputValor(evento.target.value)}
                  type="number"
                  name="valor"
                  required
                />
                <span className={styles.span}>R$</span>
              </div>
            </div>
            <div className={styles.valor}>
              <label htmlFor="tipo">Tipo de valor</label>
              <select
                onChange={(evento) => setInputTipo(evento.target.value)}
                name="tipo"
                id="tipo"
              >
                <option value="">Selecionar</option>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
              </select>
            </div>
          </div>
          <input type="submit" value="Inserir valor" />
        </div>
      </form>
      {/* <ValorTotal lista={lista}/> */}
    </div>
  );
};
