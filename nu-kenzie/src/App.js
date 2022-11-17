// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BgInical, Logo, MainIniciar } from "./components/Inicial.jsx";

function App() {
  return (
    <div className="App">
      <BgInical>
        <MainIniciar />
        <Logo />
      </BgInical>
    </div>
  );
}

export default App;
