import { inAxios } from "../config_axios";
import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Nº de Reservas Confirmadas Por Destino"
};

const GerenciaReserva = () => {
  // declara a variável de estado e o método que irá atualizá-la
const [excursao, setExcursao] = useState(0);
const [passageiros, setPassageiros] = useState(0);
const [totalReservas, setTotalReservas] = useState(0);
const [reservasPorExcursao, setReservasPorExcursao] = useState([]);

  const obterDados = async () => {
    // obtém do Web Service dados gerais das candidatas
    const excursao = await inAxios.get("excursao/total");    
    const passageiros = await inAxios.get("passageiro/total");    
    const totalReservas = await inAxios.get("reserva/total");
    const reservasPorExcursao = await inAxios.get("reserva/totalGrafico");

    // atualiza a variável de estado
    // conforme a documentação do exemplo de gráfico
    // define as colunas de título
    const data = [["Destino", "Reservas", { role: "style" }]];
    const cores = ["#D02090", "#32CD32", "#4169E1", "#D2691E", "#00CED1"];

    // acrescenta os dados "propriamente ditos" do gráfico
    reservasPorExcursao.data.map((reservaPorExcursao, i) =>
      data.push([reservaPorExcursao.destino, reservaPorExcursao.reservas, cores[i]])
    );

    // acrescenta os dados "propriamente ditos" do gráfico
    // dadosReserva.data.map((reserva) => data2.push([reserva.confirmado]));

    // atualiza a variável de estado
    setExcursao(excursao.data);
    setPassageiros(passageiros.data);    
    setTotalReservas(totalReservas.data);
    setReservasPorExcursao(data);
  };

  // chama o método ao carregar o componente
  useEffect(() => {
    obterDados();
  }, []);

  return (
    <div className="container">
      <h2 className="my-3">Dados Gerenciais do Sistema</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="card text-center border-primary">
            <div className="card-header border-primary">
              <span className="badge text-bg-primary fs-2 fw-bold p-3 my-2">
                {excursao.total}
              </span>
            </div>
            <h5 className="my-4">Total de Excursões </h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center border-primary">
            <div className="card-header border-primary">
              <span className="badge text-bg-primary fs-2 fw-bold p-3 my-2">
              {passageiros.totalPassageiros}
              </span>
            </div>
            <h5 className="my-4">Total de Passageiros</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center border-primary">
            <div className="card-header border-primary">
              <span className="badge text-bg-primary fs-2 fw-bold p-3 my-2">
              {totalReservas.totalReservas}
              </span>
            </div>
            <h5 className="my-4">Total de Reservas</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center border-primary">
            <div className="card-header border-primary">
              <span className="badge text-bg-primary fs-2 fw-bold p-3 my-2">
                {totalReservas.totalConfirmadas}
              </span>
            </div>
            <h5 className="my-4">Reservas Confirmadas</h5>
          </div>
        </div>
      </div>

      <Chart
        chartType="PieChart"
        data={reservasPorExcursao}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default GerenciaReserva;

// import { inAxios } from "../config_axios";
// import { useState, useEffect } from "react";
// import { Chart } from "react-google-charts";

// export const options = {
//   title: "Nº de Produtos por Setor"
// };

// export const option = {
//   title: "Nº de vendas por dia"
// };

// const GerenciaProdutos = () => {
//   // declara a variável de estado e o método que irá atualizá-la
//   const [gerais, setGerais] = useState(0);
//   const [total, setTotal] = useState(0);
//   const [venda, setVendas] = useState([]);
//   const [setor, setSetor] = useState([]);

//   const obterDados = async () => {
//     // obtém do Web Service dados gerais das candidatas
//     const dadosGerais = await inAxios.get("/produtos/gerais");
//     const dadosTotais = await inAxios.get("produtos/estoque");
//     const dadosVendas = await inAxios.get("/produtos/vendas");
//     const dadosSetor = await inAxios.get("/produtos/setor");

    
  
    

//     // atualiza a variável de estado
//     setGerais(dadosGerais.data);
//     setTotal(dadosTotais.data);

//     // conforme a documentação do exemplo de gráfico
//     // define as colunas de título
//     const data = [["Venda", "Produtos", { role: "style" }]];

//     const data2 = [["Setor", "NºProdutos",{ role: "style" }]];

//     const cores = ["#D02090", "#32CD32", "#4169E1", "#D2691E", "#00CED1"];

//     // acrescenta os dados "propriamente ditos" do gráfico
//     dadosVendas.data.map((venda, i) =>
//       data.push([venda.dia, venda.num, cores[i]])
//     );

//     // acrescenta os dados "propriamente ditos" do gráfico
//     dadosSetor.data.map((setor, i) => data2.push([setor.setor, setor.num, cores[i]]));

//     // atualiza a variável de estado
//     setVendas(data);
//     setSetor(data2);
//   };

//   // chama o método ao carregar o componente
//   useEffect(() => {
//     obterDados();
//   }, []);

//   return (
//     <div className="container">
//       <h2 className="my-3">Dados Gerenciais do Sistema</h2>
//       <div className="row">
//         <div className="col-md-3">
//           <div className="card text-center border-primary">
//             <div className="card-header border-primary">
//               <span className="badge text-bg-primary fs-2 fw-bold p-3 my-2">
//                 {gerais.num}
//               </span>
//             </div>
//             <h5 className="my-4">Quantidade de Itens Cadastrado</h5>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="card text-center border-primary">
//             <div className="card-header border-primary">
//               <span className="badge text-bg-primary fs-2 fw-bold p-3 my-2">
//                 {gerais.media}
//               </span>
//             </div>
//             <h5 className="my-4">Média de preço</h5>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="card text-center border-primary">
//             <div className="card-header border-primary">
//               <span className="badge text-bg-primary fs-2 fw-bold p-3 my-2">
//                 {total.total}
//               </span>
//             </div>
//             <h5 className="my-4">Estoque Total </h5>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="card text-center border-primary">
//             <div className="card-header border-primary">
//               <span className="badge text-bg-primary fs-2 fw-bold p-3 my-2">
//                 {total.maior}
//               </span>
// ... (28 linhas)