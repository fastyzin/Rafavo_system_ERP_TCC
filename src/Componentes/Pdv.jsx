import React from "react";

import "./Pdv.css";

import {FaChartBar, FaProductHunt} from "react-icons/fa";
import {MdOutlineDashboard, MdPointOfSale} from "react-icons/md";
import {AiOutlineCustomerService} from "react-icons/ai";
import {BsPersonLinesFill, BsPersonFillExclamation} from "react-icons/bs";

import logo from "./logotipo.png"
import { useState } from "react";
const inventario = [
    { id: 1, codigoBarras: "123456", nome: "Nescau Cereal", preco: 10.0 },
    { id: 2, codigoBarras: "789012", nome: "Doritos 400g", preco: 20.0 },


    
  ];
export function PDV() {
    const [carrinho, setCarrinho] = useState([]);
    const [total, setTotal] = useState(0);
    const [meioPagamento, setMeioPagamento] = useState('');
    const [codigoBarras, setCodigoBarras] = useState("");

    const onSelecionarProduto = (produto) => {
        const novoCarrinho = [...carrinho, produto];
    setCarrinho(novoCarrinho);
    setCodigoBarras("");
    // Calcular o novo total ao adicionar um produto
    const novoTotal = novoCarrinho.reduce((acc, produto) => acc + produto.preco, 0);
    setTotal(novoTotal);
        
  }; 
 
 

 
    
  const buscarProdutoPorCodigoBarras = () => {
    const produtoEncontrado = inventario.find(
      (produto) => produto.codigoBarras === codigoBarras
    );  

    if (produtoEncontrado) {
      onSelecionarProduto(produtoEncontrado);
    } else {
      alert("Produto não encontrado");
    }
  };
  const handleMeioPagamentoChange = (e) => {
    setMeioPagamento(e.target.value);
  };

  const finalizarCompra = () => {
    alert(`Você escolheu o meio de pagamento: ${meioPagamento}\nTotal da compra: R$ ${total.toFixed(2)}`);
    
  };
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
        <div className="main">
        <div className="cards">
        <div className="pdv">
            <h1>Ponto de Venda</h1>
        <div className="inventario">
              <input
              className="codigodebarras"
                type="text"
                placeholder="Código de Barras"
                value={codigoBarras}
                onChange={(e) => setCodigoBarras(e.target.value)}
              />
              <button className="findproduct_button" onClick={buscarProdutoPorCodigoBarras}>
                Buscar Produto
              </button>
              </div>
              </div>
                <div className="produtos">
                <h1> Produtos </h1>
                {inventario.map((produto) => (
                <div
                  key={produto.id}
                  className={`produto ${
                    carrinho.includes(produto) ? "selecionado" : ""
                  }`}
                  onClick={() => onSelecionarProduto(produto)}
                >
                  <h3>{produto.nome}</h3>
                  <p>Preço: R$ {produto.preco.toFixed(2)}</p>
                </div>
              ))}
                </div>
              
            
          
          <div className="card">
            <div className="carrinho">
              <h1>Carrinho</h1>
              <ul>
                {carrinho.map((produto) => (
                  <li className="showitem_cart"key={produto.id}>{produto.nome}</li>
                ))}
              </ul>

              <h3>Total: R$ {total.toFixed(2)}</h3>
              <label className="label_selectpaymentmethod">
                Escolha o meio de pagamento:
                <select
                  className="select_paymentmethod"
                  value={meioPagamento}
                  onChange={handleMeioPagamentoChange}
                >
                  <option value="">Selecione...</option>
                  <option value="Cartão de Crédito">Cartão de Crédito</option>
                  <option value="Dinheiro">Dinheiro</option>
                  <option value="Pix">Pix</option>
                 
                </select> <br></br>
              </label>
              <button
                className="donebuy_button"
                onClick={finalizarCompra}
                disabled={!meioPagamento || carrinho.length === 0}
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}