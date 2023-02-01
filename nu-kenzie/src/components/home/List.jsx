import { useState } from "react";
import styles from "./home.module.css";
import NoCard from "./../../img/NoCard.svg";
import lixaira from "./../../img/lixaira.svg";

export const List = ({ lista, setLista }) => {
  const [filterList, setFilterList] = useState("");

  function renderFilter(event) {
    return setFilterList(
      lista.filter((item) => item.tipo === event.target.outerText.slice(0, 7))
    );
  }
  function renderTodosFilter() {
    return setFilterList("");
  }

  function removerItem(item) {
    const novaLista = lista.filter((elem) => elem.id !== item.id);
    setLista(novaLista);
  }

  return (
    <div className={styles.div_ul_card}>
      <div className={styles.main_list}>
        <h2>Resumo financeiro</h2>
        <div>
          <span onClick={renderTodosFilter}>Todos</span>
          <span onClick={renderFilter}>Entradas</span>
          <span onClick={renderFilter}>Despesas</span>
        </div>
      </div>
      <ul>
        {lista.length === 0 ? (
          <>
            <h2>Você ainda não possui nenhum lançamento</h2>
            <img src={NoCard} alt="" />
          </>
        ) : filterList !== "" ? (
          filterList.map((elem) => {
            return (
              <li key={elem.id} className={styles.entrada} id={elem.id}>
                <div>
                  <h2>{elem.descricao}</h2>
                  <p>{elem.tipo}</p>
                </div>
                <div>
                  <span>{elem.valor.toFixed(2)}</span>
                  <img
                    onClick={() => {
                      removerItem(elem);
                    }}
                    src={lixaira}
                    alt=""
                  />
                </div>
              </li>
            );
          })
        ) :  (
          lista.map((ele) => {
            return ele.tipo === "Entrada" ? (
              <li key={ele.id} className={styles.entrada} id={ele.id}>
                <div>
                  <h2>{ele.descricao}</h2>
                  <p>{ele.tipo}</p>
                </div>
                <div>
                  <span>{ele.valor.toFixed(2)}</span>
                  <img
                    onClick={() => {
                      removerItem(ele);
                    }}
                    src={lixaira}
                    alt=""
                  />
                </div>
              </li>
            ) : (
              <li key={ele.id} id={ele.id}>
                <div>
                  <h2>{ele.descricao}</h2>
                  <p>{ele.tipo}</p>
                </div>
                <div>
                  <span>{ele.valor.toFixed(2)}</span>
                  <img
                    onClick={() => {
                      removerItem(ele);
                    }}
                    src={lixaira}
                    alt=""
                  />
                </div>
              </li>
            );
          })
        )}

        {/* {lista.length !== 0 ? (
          lista.map((ele) => {
            return ele.tipo === "Entrada" ? (
              <li key={ele.id} className={styles.entrada} id={ele.id}>
                <div>
                  <h2>{ele.descricao}</h2>
                  <p>{ele.tipo}</p>
                </div>
                <div>
                  <span>{ele.valor.toFixed(2)}</span>
                  <img
                    onClick={() => {
                      removerItem(ele);
                    }}
                    src={lixaira}
                    alt=""
                    srcset=""
                  />
                </div>
              </li>
            ) : (
              <li key={ele.id} id={ele.id}>
                <div>
                  <h2>{ele.descricao}</h2>
                  <p>{ele.tipo}</p>
                </div>
                <div>
                  <span>{ele.valor.toFixed(2)}</span>
                  <img
                    onClick={() => {
                      removerItem(ele);
                    }}
                    src={lixaira}
                    alt=""
                    srcset=""
                  />
                </div>
              </li>
            );
          })
        ) : (
          <>
            <h2>Você ainda não possui nenhum lançamento</h2>
            <img src={NoCard} alt="" />
          </>
        )} */}
      </ul>
    </div>
  );
};
