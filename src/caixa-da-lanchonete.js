import { LISTADEITENSEXTRAS, LISTAITENS} from "./class/itens.js";
class CaixaDaLanchonete {
constructor(){

}

    calcularValorDaCompra(metodoDePagamento, itens) {

        //Variável para verificar compra caso o pedido esteja seguindo as conformidades de um pedido padrão.
        let checked=true;
        //Variáveis para avaliar a possibilidade do pedido ter extra ou não.
        let sandwich=false;
        let coffe=false;
        //Variável para armazenar o valor total do pedido
        let totalValue=0;
        //Verificação se a lista de itens está vazia
        if(itens.length!=0){
        //Passando pelos arrays de itens
        for(let h=0;h<itens.length;h++)
        {
        //Separando os itens pela vírgula. Criando-se um array dos pedidos selecionados
        let splitItens = itens[h].split(",");
        /*Lógica para percorrer todas quantidades, onde o j refere-se ao codigo do item e 
          j+1 refere-se a quantidade
        */
        for(let j=0;j<splitItens.length;j+=2){
        //Verificando se a quantiadde do item é 0.
        if(splitItens[j+1]==0){
            return "Quantidade inválida!";
        }
        //Variável para veriricar se não achou o item na lista
        let verify=0;
        //Variável para verificar se não achou itens extras;
        let verifyExtra=0;
        //Passando por cada item do vetor de Itens principais.
            LISTAITENS.forEach(i => {
                if(i.codigo===splitItens[j]){
                    totalValue+=i.value*splitItens[j+1];
                    verify++;
                    if(i.codigo==="sanduiche"){
                        sandwich=true;
                    }
                    if(i.codigo==="cafe"){
                        coffe=true;
                    }
                }
            });

            //Computando os itens extras.
            if(LISTADEITENSEXTRAS[0].codigo==splitItens[j] || LISTADEITENSEXTRAS[1].codigo==splitItens[j] ){
                //Variavel para verificar a veracidade sobre os extras:
                let extras=sandwich || coffe;
                //Para fazer a verificação se é verdade que a uma das doncições foram atendidas
                let conditions=1;
                verifyExtra++;
                if(extras){
                    //Variáveis para veriricar cada condicação
                    let condition1=sandwich && LISTADEITENSEXTRAS[0].codigo==splitItens[j];
                    let condition2=coffe && LISTADEITENSEXTRAS[1].codigo==splitItens[j];
                    //Condicionamento de dados.
                    if(condition1){
                        totalValue+=LISTADEITENSEXTRAS[0].value*splitItens[j+1];
                    }
                    else{
                        totalValue+=LISTADEITENSEXTRAS[1].value*splitItens[j+1];
                    }
                    if(condition1 || condition2){
                        conditions--;
                    }
                    verify++;
                }
                //Veririficando se de fato foi pedido um item principal antes do extra
                if(conditions==1){
                    checked=false;
                    verify=0;
                    return("Item extra não pode ser pedido sem o principal");
                }
            }
            //Caso não seja encontrado nenhum item dos apresentados.
            if(verify==0 && verifyExtra==0){
                return("Item inválido!");
            }
          
        }
        }}
        else{
            return("Não há itens no carrinho de compra!");
        }
    //Computando os cálculos necessários    
    if(totalValue!==0 && checked){
    return this.ProcessedPay(metodoDePagamento, totalValue);
    }
}

//Verificação sobre os metodos de pagamento e escolhendo o mais propício
ProcessedPay(metodoDePagamento, totalValue){
  if(metodoDePagamento=="dinheiro") {
    return(`R$ ${(totalValue-0.05*totalValue).toFixed(2).replace(".",",")}`);
   }
   else if(metodoDePagamento=="debito"){
    return(`R$ ${(totalValue.toFixed(2).replace(".",","))}`);
   }
   else if(metodoDePagamento=="credito"){
    return(`R$ ${(totalValue+0.03*totalValue).toFixed(2).replace(".",",")}`);
   }
   else{
    return("Forma de pagamento inválida!");
   }
}

}




export { CaixaDaLanchonete };
