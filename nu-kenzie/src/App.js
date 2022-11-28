import { BgInical } from "./components/pages/langePages/Background.jsx";
import { MainIniciar } from "./components/pages/langePages/MainInicial.jsx";
import { Logo } from "./components/pages/langePages/LangePages.jsx";
import { useState } from "react";
import { Cabecalho } from "./components/pages/home/Index.jsx";
import { MainHome } from "./components/pages/home/Main.jsx";
import { Formulario } from "./components/pages/home/Formulario.jsx";
import { MainLista } from "./components/pages/home/ListaTranzacao.jsx";
import { List } from "./components/pages/home/List.jsx";
import { ValorTotal } from "./components/pages/home/ValorTotal.jsx";
import { SecaoFormulario } from "./components/pages/home/SecaoFormulario.jsx";

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
