export class Cliente{
    private nome: string;
    private cpf: string;
    private telefone: number;
    private rg: string;

    constructor(nome: string, CPF: string, telefone: number, RG: string){
        this.nome = nome;
        this.cpf = CPF;
        this.telefone = telefone;
        this.rg = RG;
    }

    public getNome(): string{
        return this.nome
    }
    
    public getRg(): string{
        return this.rg
    }
    
    public getTelefone(): number{
        return this.telefone
    }

    public getCpf(): string{
        return this.cpf
    }

    // ------------------
    
    public setNome(nome: string): void{
        this.nome = nome
    }
    
    public setRg(rg: string): void{
        this.rg = rg
    }
    
    public setTelefone(telefone: number): void{
        this.telefone = telefone
    }

    public setCpf(cpf: string): void{
        this.cpf = cpf
    }
}
