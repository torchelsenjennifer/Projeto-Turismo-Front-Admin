import { inAxios } from "../config_axios";
import { useState, useEffect } from "react";

import "./ListaReservas.css";

const ListaReservas = () => {
  // declara a variável de estado e o método que irá atualizá-la
  const [reservas, setReservas] = useState([]);
  //const [nome, sobrenome] = ['jennifer', 'torchelsen']

  const obterReservas = async () => {
    // obtém do Web Service a lista das candidatas cadastradas
    const lista = await inAxios.get("reserva");
    //console.log(lista.data);

    // atualiza a variável de estado
    setReservas(lista.data);
  };

  // chama o método ao carregar o componente
  useEffect(() => {
    obterReservas();
  }, []);
  
  const confirmar = async (id, nome, index) => {
    if (!window.confirm(`Gostaria de Confirmar a reserva da passageira(a) "${nome}"?`)) {
      return;
    }
    try {
      await inAxios.get(`reserva/confirma/${id}`);
      const reservaConfirmar = [...reservas];
      reservaConfirmar[index].confirmado = 1;
      setReservas(reservaConfirmar);
    } catch (error) {
      alert(`Erro... Não foi possível confirmar a reserva: ${error}`);
    }
  };

  const excluir = async (id, nome) => {
    if (!window.confirm(`Confirma a exclusão da reserva da passageiro(a) "${nome}"?`)) {
      return;
    }
    try {
      await inAxios.delete(`reserva/${id}`);
      setReservas(reservas.filter((reserva) => reserva.id !== id));
    } catch (error) {
      alert(`Erro... Não foi possível excluir a reserva: ${error}`);
    }
  };

  return (
    <div className="container">
      <h2>Lista Reservas Solicitadas</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome do Passageiro</th>
            <th>Excursão Selecionada</th>
            <th>Data da partida</th>
            <th>Poltrona Selecionada</th>
            <th>Situação da Confirmação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva, index) => (
            <tr>
              {/* <td>
                <img
                  src={webServiceURL + cand.foto}
                  alt={cand.destino}
                  className="img-cand"
                />
              </td> */}
              <td>{reserva.nome}</td>
              <td>{reserva.destino}</td>
              <td>{new Date(reserva.data_partida).toLocaleDateString()}</td>
              <td>{reserva.poltrona}</td>
              <td>{reserva.confirmado ? "Confirmado" : "Não Confirmado"}</td>
              <td className="text-center">
                <h4>
                {reserva.confirmado === 0 &&
                  <i class="bi bi-check-square-fill text-dark"
                  onClick={() => confirmar(reserva.id, reserva.nome, index)}></i>
                }
                &ensp;
                  <i className="bi bi-person-dash-fill text-danger"
                  onClick={() => excluir(reserva.id, reserva.nome)}></i>
                  
                </h4>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaReservas;
