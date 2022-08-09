import { Cliente } from "./Cliente";
import { ItemPedido } from "./ItemPedido";

export class Pedido {

    private cod: number;
    private cliente: Cliente;
    private itensPedidos: ItemPedido[];

    constructor(cod: number, cliente: Cliente, itemPedido: ItemPedido[]){
        this.cod = cod;
        this.cliente = cliente;
        this.itensPedidos = itemPedido;
    }

    public getCod(): number{
        return this.cod
    }

    public getCliente(): Cliente{
        return this.cliente
    }

    public getItensPedido(): ItemPedido[]{
        return this.itensPedidos
    }

    //-------------------

    public setCod(cod: number): void{
        this.cod = cod
    }

    public setCliente(cliente: Cliente): void{
        this.cliente = cliente
    }

    public setItensPedido(itemPedido: ItemPedido[]): void{
        this.itensPedidos = itemPedido
    }

    // Método Worker ----------

    public addItemPedido(itemPedido: ItemPedido): void{
        this.itensPedidos.push(itemPedido)
    }
}