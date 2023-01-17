import { useState } from "react";
import { inAxios } from "../config_axios";

const InclusaoExcursao = () => {
  const [destino, setDestino] = useState("");
  const [data_partida, setDataPatida] = useState("");
  const [local_partida, setLocalPartida] = useState("");
  const [veiculo, setVeiculoDisponivel] = useState("");
  const [foto, setFoto] = useState(null);
  const [data_chegada, setDataChegada] = useState("");
  const [lugares_total, setLugaresTotal] = useState("");

  const enviarDados = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("destino", destino);
    formData.append("data_partida", data_partida);
    formData.append("local_partida", local_partida);
    formData.append("veiculo", veiculo);
    formData.append("foto", foto);
    formData.append("id_administrador", 1);
    formData.append("lugares_total", lugares_total);
    formData.append("data_chegada", data_chegada);

    try {
      const dados = await inAxios.post("excursao", formData);
      alert(`ok! Excursão cadastrada (${dados.data.id})`);
    } catch (erro) {
      alert(`Erro:${erro}`);
    }
    //limpa campos
    setDestino("");
    setDataPatida("");
    setLocalPartida("");
    setVeiculoDisponivel("");
    setFoto(null);
    setDataChegada("");
    setLugaresTotal("");

    // inAxios
    //   .post("candidatas", formData)
    //   .then((res) => {
    //     alert("File Upload success");
    //   })
    //   .catch((error) => alert("File Upload Error"));
    // alert(nome);
  };

  return (
    <form className="container" onSubmit={enviarDados}>
      <h2> Inclusão de Excursão </h2>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Destino
        </label>
        <input
          type="text"
          class="form-control"
          id="destino"
          placeholder="Destino"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
          required
        />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
        Data e Horário de Partida
        </label>
        <input
          type="text"
          class="form-control"
          id="data_partida"
          placeholder="2022-10-30 08:00:00"
          value={data_partida}
          onChange={(e) => setDataPatida(e.target.value)}
          required
        />
      </div>
      <div className="col-md-4">
          <label for="idade" class="form-label">
            Data e Horário de Chegada
          </label>
          <input
            type="text"
            class="form-control"
            id="veiculo"
            placeholder="2022-10-30 08:00:00"
            value={data_chegada}
            onChange={(e) => setDataChegada(e.target.value)}
            required
          />
        </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Local de Partida
        </label>
        <input
          type="text"
          class="form-control"
          id="local_partida"
          placeholder="Local de Partida"
          value={local_partida}
          onChange={(e) => setLocalPartida(e.target.value)}
          required
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label for="idade" class="form-label">
           Veiculo Disponível
          </label>
          <input
            type="text"
            class="form-control"
            id="veiculo"
            placeholder="Veiculo disponível"
            value={veiculo}
            onChange={(e) => setVeiculoDisponivel(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4">
          <label for="idade" class="form-label">
           Lugares Total
          </label>
          <input
            type="Number"
            class="form-control"
            id="veiculo"
            placeholder="Total de Lugares"
            value={lugares_total}
            onChange={(e) => setLugaresTotal(e.target.value)}
            required
          />
        </div>

        <div className="col-md-8">
          <label for="foto" class="form-label">
            Foto da Excursão
          </label>
          <input
            type="file"
            class="form-control"
            id="foto"
            placeholder="Foto da Excursão"
            value={""}
            onChange={(e) => setFoto(e.target.files[0])}
          />
        </div>
      </div>
      <button type="submit" class="btn btn-dark btn-lg">
        Adicionar
      </button>
      <button type="submit" class="btn btn-danger btn-lg ms-3">
        Limpar
      </button>
    </form>
  );
};

export default InclusaoExcursao;
