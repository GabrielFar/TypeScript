class Endereço{
    private cep: number;
    private uf: string;
    private estado: string;
    private cidade: string;
    private bairro: string;
    private rua: string;
    private numeroResidencia: number;
    private complemento: string;

    constructor (cep: number, uf:string, estado: string, cidade: string, bairro: string, rua: string, numeroResidencia: number, complemento: string){
        this.cep = cep;
        this.uf = uf;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numeroResidencia = numeroResidencia;
        this.complemento = complemento;
    }

    public getCEP(): number{
        return this.cep;
    }

    public setCEP(cep: number): void{
        this.cep = cep;
    }

    public getUf(): string{
        return this.uf;
    }

    public setUf(uf: string): void{
        this.uf = uf;
    }

    public getEstado(): string{
        return this.estado;
    }

    public setEstado(estado: string): void{
        this.estado = estado;
    }

    public getCidade(): string{
        return this.cidade;
    }

    public setCidade(cidade: string): void{
        this.cidade = cidade;
    }

    public getBairro(): string{
        return this.bairro;
    }

    public setBairro(bairro: string): void{
        this.bairro = bairro;
    }

    public getRua(): string{
        return this.rua;
    }

    public setRua(rua: string): void{
        this.rua = rua;
    }

    public getNumeroResidencia(): number{
        return this.numeroResidencia;
    }

    public setNumeroResidencia(numeroResidencia: number): void{
        this.numeroResidencia = numeroResidencia;
    }

    public getComplemento(): string{
        return this.complemento;
    }

    public setComplemento(complemento: string): void{
        this.complemento = complemento;
    }

    public getEnderecoCompleto(): string{
        return `${this.cep} ${this.uf} ${this.estado} ${this.cidade} ${this.bairro} ${this.rua} ${this.numeroResidencia} ${this.complemento}`
    }
}


