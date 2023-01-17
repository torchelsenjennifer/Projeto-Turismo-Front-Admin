import { Link } from "react-router-dom";
import "./MenuSuperior.css";

const MenuSuperior = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">

      <div className="container">
        <div className="col-sm-4 col-md-3 text-center">
          <img src="sol.png" alt="Logo da agencia" className="logo" />
        </div>
        <Link to="/" className="navbar-brand">
          Pôr do Sol Turismo
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Lista de Excursões 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="reservas" className="nav-link active">
              Reservas Solicitadas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="inclusao" className="nav-link active">
              Incluir Excursão
            </Link>
          </li>
          <li className="nav-item">
            <Link to="dadosGerenciais" className="nav-link active">
              Dados Gerenciais
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuSuperior;
