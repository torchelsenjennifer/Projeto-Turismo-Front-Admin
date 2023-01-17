import { inAxios, webServiceURL } from "../config_axios";
import { useState, useEffect } from "react";

import "./ListaExcursoes.css";

const ListaExcurcoes = () => {
  // declara a variável de estado e o método que irá atualizá-la
  const [exercucoes, setExcurcoes] = useState([]);
  //const [nome, sobrenome] = ['jennifer', 'torchelsen']

  const obterExcursoes = async () => {
    // obtém do Web Service a lista das candidatas cadastradas
    const lista = await inAxios.get("excursao");

    // atualiza a variável de estado
    setExcurcoes(lista.data);
  };

  // chama o método ao carregar o componente
  useEffect(() => {
    obterExcursoes();
  }, []);

  const excluir = async (id, destino) => {
    if (!window.confirm(`Confirma a exclusão da excursão para "${destino}"?`)) {
      return;
    }
    try {
      await inAxios.delete(`excursao/${id}`);
      setExcurcoes(exercucoes.filter((excursao) => excursao.id !== id));
    } catch (error) {
      alert(`Erro... Não foi possível excluir a excursao, pois há reservas! ${destino}`);
    }
  };

  return (
    <div className="container">
      <h2>Lista das Excursões Disponíveis</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Destino</th>
            <th>Data e Horário de Partida</th>
            <th>Local de Partida</th>
            <th>Veículo Disponível</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {exercucoes.map((excursao) => (
            <tr>
              <td>
                <img
                  src={webServiceURL + excursao.foto}
                  alt={excursao.destino}
                  className="img-cand"
                />
              </td>
              <td>{excursao.destino}</td>
              <td>{excursao.data_partida}</td>
              <td>{excursao.local_partida}</td>
              <td>{excursao.veiculo}</td>
              <td>
                <i className="bi bi-person-dash-fill text-danger"
                  onClick={() => excluir(excursao.id, excursao.destino)}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaExcurcoes;
