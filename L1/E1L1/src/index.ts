export class Pessoa{
    private idade: number;
    private diaNasc: number;
    private mesNasc: number;
    private anoNasc: number;
    private nome: string;

    constructor(idade: number, diaNasc: number, mesNasc: number, anoNasc: number, nome: string){
        this.idade = idade;
        this.diaNasc = diaNasc;
        this.mesNasc = mesNasc;
        this.anoNasc = anoNasc;
        this.nome = nome;
    }

    public calculaIdade(): number{
        let data = new Date()
        
        return this.idade = data.getFullYear() - this.anoNasc
    }

    public getIdade(): number{
        return this.idade
    }

    public getNome(): string{
        return this.nome
    }

    public setDataNascimento(diaNasc: number, mesNasc: number, anoNasc: number): void{
        this.diaNasc = diaNasc
        this.mesNasc = mesNasc
        this.anoNasc = anoNasc
    }
}