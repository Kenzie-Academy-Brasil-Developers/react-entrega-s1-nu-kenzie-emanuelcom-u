import { Logo } from "./components/langePages/LangePages.jsx";
import { useState } from "react";
import { Cabecalho } from "./components/home/Index.jsx";
import { MainHome } from "./components/home/Main.jsx";
import { Formulario } from "./components/home/Formulario.jsx";
import { MainLista } from "./components/home/ListaTranzacao.jsx";
import { List } from "./components/home/List.jsx";
import { ValorTotal } from "./components/home/ValorTotal.jsx";
import { SecaoFormulario } from "./components/home/SecaoFormulario.jsx";
import { BgInical } from "./components/langePages/Background.jsx";
import { MainIniciar } from "./components/langePages/MainInicial.jsx";

function App() {
  const [lista, setLista] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      {isLogin ? (
        <div>
          <Cabecalho setIsLogin={setIsLogin} />
          <MainHome>
            <SecaoFormulario>
              <Formulario setLista={setLista} />
              <ValorTotal lista={lista} />
            </SecaoFormulario>
            <MainLista>
              <List lista={lista} setLista={setLista} />
            </MainLista>
          </MainHome>
        </div>
      ) : (
        <BgInical>
          <MainIniciar setIsLogin={setIsLogin} />
          <Logo />
        </BgInical>
      )}
    </div>
  );
}

export default App;
