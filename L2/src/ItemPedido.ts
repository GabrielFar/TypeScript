export class ItemPedido {
    private cod: string
    private descrição: string
    private qntd: number
    private valor: number

    constructor(código: string, descrição: string, quantidade: number, valor: number){
        this.cod = código;
        this.descrição = descrição;
        this.qntd = quantidade;
        this.valor = valor;
    }

    public getCod(): string{
        return this.cod
    }
    
    public getDescrição(): string{
        return this.descrição
    }
    
    public getQntd(): number{
        return this.qntd
    }

    public getValor(): number{
        return this.valor
    }

    // ------------------

    public setCod(cod: string): void{
        this.cod = cod
    }
    
    public setDescrição(descrição: string): void{
        this.descrição = descrição
    }
    
    public setQntd(qntd: number): void{
        this.qntd = qntd
    }

    public setValor(valor: number): void{
        this.valor = valor
    }
}