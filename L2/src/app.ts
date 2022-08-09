import { Cliente } from "./Cliente";
import { ItemPedido } from "./ItemPedido";
import { Pedido } from "./Pedido";

var btAddCarinho = document.querySelector("#idBtAddCarinho") as HTMLButtonElement;
var btRealizarPedido = document.querySelector("#idBtRealizarPedido") as HTMLButtonElement;
var btSalvarCliente = document.querySelector("#idBtSalvar") as HTMLButtonElement

var numPedido: number = Number(((Math.random() * 1000) + 1).toFixed(0))
var pedido: Pedido;

var pedidoTr
var pedidoTable = document.querySelector("#idTable") as HTMLTableElement
var indexador: number = 0

btSalvarCliente.onclick = function(){
    let nome = (document.querySelector("#idNome") as HTMLInputElement).value;
    let cpf = (document.querySelector("#idCPF") as HTMLInputElement).value;
    let telefone = Number((document.querySelector("#idTelefone") as HTMLInputElement).value);
    let rg = (document.querySelector("#idRG") as HTMLInputElement).value;

    let itensPedido: ItemPedido[] = [];

    let cliente = new Cliente(nome, cpf, telefone, rg)

    pedido = new Pedido(numPedido, cliente, itensPedido)
}

btAddCarinho.onclick = function():void {
    
    let código = (document.querySelector("#idItens") as HTMLInputElement).value;
    let inputDescrição = (document.querySelector("#idItens") as HTMLSelectElement);
    let descrição = inputDescrição.options[inputDescrição.selectedIndex].text
    let quantidade = Number((document.querySelector("#idQntd") as HTMLInputElement).value)
    let valor

    if (código == "001") {
        valor = Number(Valores.valor1)
    } else if(código == "002") {
        valor = Number(Valores.valor2)
    } else if(código == "003") {
        valor = Number(Valores.valor3)
    } else if(código == "004") {
        valor = Number(Valores.valor4)
    } else {
        valor = Number(Valores.valor5)
    }

    let itemPedido = new ItemPedido(código, descrição, quantidade, valor);

    pedido.addItemPedido(itemPedido);

    (document.querySelector("#idQntd") as HTMLInputElement).value = "1"
}

enum Valores{
    valor1 = 10,
    valor2 = 15,
    valor3 = 20,
    valor4 = 30,
    valor5 = 50
}

let x = []
btRealizarPedido.onclick = function():void {
    
    for (let index = 0; index < x.length; index++) {
        pedidoTr = montaTr()

        //inserir linha na tabela
        pedidoTable.appendChild(pedidoTr)  
    }  
}

function montaTr(): HTMLTableRowElement{
    let pedidoTr: HTMLTableRowElement = document.createElement("tr")

    pedidoTr.classList.add("clTrPedidoHead")    
    
    //pedidoTr.appendChild(montaTd(x[indexador].cod, "clThCódigo"))
    //pedidoTr.appendChild(montaTd(x[indexador].descrição, "clThDescrição"))
    //pedidoTr.appendChild(montaTd(x[indexador].qntd, "clThQnt"))
    //pedidoTr.appendChild(montaTd(x[indexador].valor, "clThValor"))

    indexador++

    return pedidoTr   
}

//Cria uma coluna (um td)
function montaTd(dado: string | number, classe: string){
    let pedidoTd: HTMLTableCellElement = document.createElement("td")
    pedidoTd.textContent = dado.toString()
    pedidoTd.classList.add(classe)
        
    return pedidoTd
}