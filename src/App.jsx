import "./App.css";
import BarraDePesquisa from "./component/BarraDePesquisa";
import Filtro from "./component/Filtro";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
      </div>
    </div>
  );
}

export default App;
