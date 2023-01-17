import MenuSuperior from "./componente/MenuSuperior";
import ListaExcurcoes from "./componente/ListaExcursoes";
import InclusaoExcursao from "./componente/InclusaoExcursao";
import ListaReservas from "./componente/ListaReservas";
import GerenciaReserva from "./componente/GerenciaReserva";



import { Routes, Route,  } from "react-router-dom";


const App = () => {
  return (
    <>
      <MenuSuperior />
      <Routes>
        <Route path="/" element={<ListaExcurcoes />} />
        <Route path="inclusao" element={<InclusaoExcursao />} />
        <Route path="reservas" element={<ListaReservas />} />
        <Route path="dadosGerenciais" element={<GerenciaReserva />} />
      </Routes>
    </>
  );
};

export default App;
