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

    public calculaIdade(): void{
        let data = new Date()
        let ano = data.getFullYear()
        let mes = data.getMonth()
        let dia = data.getDay()
        
        this.idade = Number(ano) - this.anoNasc        
        
        if (Number(mes) == this.mesNasc) {
            if (Number(dia) > this.diaNasc) {
                this.idade + 1
            }

        } else if(Number(mes) > this.mesNasc){
            this.idade + 1
        }
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