// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BgInical } from "./components/pages/langePages/Background.jsx";
// import { MainIniciar } from "./components/pages/langePages/MainInicial.jsx";
// import { Logo } from "./components/pages/langePages/LangePages.jsx";
import { Cabecalho } from "./components/pages/home/Index.jsx";
import { MainHome } from "./components/pages/home/Main.jsx";
import { Formulario } from "./components/pages/home/Formulario.jsx";
import { Botoes, MainLista } from "./components/pages/home/ListaTranzacao.jsx";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <MainHome>
        <Formulario />
        <MainLista>
        <Botoes/>
        </MainLista>
      </MainHome>

      {/* <BgInical>
        <MainIniciar />
        <Logo />
      </BgInical> */}
    </div>
  );
}

export default App;
