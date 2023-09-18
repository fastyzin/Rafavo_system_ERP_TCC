import React from 'react';
import './Dashboard.css';
import { Bar , Pie} from 'react-chartjs-2';

import {FaChartBar, FaProductHunt} from "react-icons/fa";
import {MdOutlineDashboard, MdPointOfSale} from "react-icons/md";
import {AiOutlineCustomerService} from "react-icons/ai";
import {BsPersonLinesFill, BsPersonFillExclamation} from "react-icons/bs";

import logo from "./logotipo.png"

import coin from "./coin.png";
import cliente from "./cliente.png";
import encomenda from "./encomenda.png";
 

export default function Dashboard() {
const grafico_quantidadevendida = {
    labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5'],
    datasets: [
      {
        label: 'Quantidade Vendida',
        data: [10, 15, 7, 8, 12],
        backgroundColor: 'orange',
      },
    ],
  };

const grafico_valorvendido = {
    labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5'],
    datasets: [
      {
        label: 'Valor Vendido',
        data: [10, 15, 7, 8, 12],
        backgroundColor: 'lightblue',
      },
    ],
  };

  const grafico_meiospagamento = {
    labels: ['Crédito','Débito','Pix', 'Dinheiro' ],
    datasets: [
      {
        data: [30, 20, 15, 15],
        backgroundColor: ['yellow', 'purple', 'blue', 'green'],
        hoverBackgroundColor: ['yellow', 'purple', 'blue', 'green'],
      },
    ],
  };
  
  
  
  const vendasDoMes = '1293,32';
  const vendasDoDia = '512,91';
  const clientesAtivos = '152';
  const produtosDisponiveis = 54;
  const mes = ['Janeiro'];
  const diaHoje = ['Quarta-Feira'];

  return (
    <>
    <div class="cabecalho">
      <img src= {logo}></img>
    </div>
    <div className="sidebar">
        <ul>
        <li> <MdOutlineDashboard/> Dashboard </li>
            <li> <MdPointOfSale/> PDV </li>
            <li> <FaProductHunt/> Produtos </li>
            <li><AiOutlineCustomerService/> Clientes</li>
            <li> <BsPersonLinesFill/> Funcionarios </li>
            <li> <FaChartBar/> Vendas </li>
            <li> <BsPersonFillExclamation/>  Acessos </li>
        </ul>
    </div>
    <div class="main">
    <div id="cards">
        <div className="card">
          <img src={coin}></img>
          <h2>Vendas do Mês</h2> 
          <div className="inlinecard">
          <p className="preco"> R$ {vendasDoMes} </p>
          </div>
          <p>Mês de {mes}</p>
        </div>


        <div className="card">
        <img src={coin}></img>
          <h2>Vendas do Dia</h2>
          <div className="inlinecard">
          <p className="preco">R$ {vendasDoDia}</p>
          </div>
          <p> Hoje, {diaHoje}</p>
        </div>


        <div className="card">
        <img src={cliente}></img>
          <h2>Clientes Ativos</h2>
          <div className="inlinecard">
          <p>{clientesAtivos}</p>
        </div>
        <p> Mês de {mes}</p>
        </div>
        
        
          <div className="card">
          <img src={encomenda}></img>
            <h2>Produtos Disp.</h2>
            <div className="inlinecard">
            <p>{produtosDisponiveis}</p>
            </div>
            <p>Mês de  {mes}</p>
          </div>




        <div className="card_grafico">
            <h2>Vendas por Dia</h2>
            <div className="inlinecard">
            <Bar data={grafico_valorvendido} />
            </div>
        </div>

      <div className="card_grafico">
          <h2>Vendas por Dia</h2>
          <div className="inlinecard">
            <Bar data={grafico_quantidadevendida} />
          </div>
      </div>
      
        </div>
      <div className="card_grafico">
            <h2>Meios de pagamento</h2>
            <div className="inlinecard">
            <Pie data={grafico_meiospagamento} />
            </div>
      </div>
  <div className="card_grafico">
      <h2>Tabela de Produtos Mais Vendidos</h2>
    <table>
        <thead>
            <tr>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Cebola</td>
                <td>50</td>
                <td>R$ 500.00</td>
            </tr>
            <tr>
                <td>Doritos</td>
                <td>30</td>
                <td>R$ 300.00</td>
            </tr>
            <tr>
                <td>Baly</td>
                <td>45</td>
                <td>R$ 450.00</td>
            </tr>
            
        </tbody>
      </table>
  </div>
      </div>
      
       
    
    </>
  );
}

