///Função principal para executar o código.
import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

//Lista de itens principais
let CaixaDaLanchonete2=new CaixaDaLanchonete();
//Testes
console.log(CaixaDaLanchonete2.calcularValorDaCompra('credito', ['cafe,1', 'queijo,1']));//Item extra não pode ser pedido
console.log(CaixaDaLanchonete2.calcularValorDaCompra('debito', ['cafe,1', 'sanduiche,1','queijo,2'])); //13,5
console.log(CaixaDaLanchonete2.calcularValorDaCompra('dinheiro', ['combo1,3'])); //27,07
console.log(CaixaDaLanchonete2.calcularValorDaCompra('debito', ['chantily,3'])); //Item extra não pode ser pedido sem o principal
console.log(CaixaDaLanchonete2.calcularValorDaCompra('debito', ['cafe,3', 'combo2,2', "chantily,3"])); //28,50




