"use strict";
class Endereço {
    constructor(cep, uf, estado, cidade, bairro, rua, numeroResidencia, complemento) {
        this.cep = cep;
        this.uf = uf;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numeroResidencia = numeroResidencia;
        this.complemento = complemento;
    }
    getCEP() {
        return this.cep;
    }
    setCEP(cep) {
        this.cep = cep;
    }
    getUf() {
        return this.uf;
    }
    setUf(uf) {
        this.uf = uf;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getCidade() {
        return this.cidade;
    }
    setCidade(cidade) {
        this.cidade = cidade;
    }
    getBairro() {
        return this.bairro;
    }
    setBairro(bairro) {
        this.bairro = bairro;
    }
    getRua() {
        return this.rua;
    }
    setRua(rua) {
        this.rua = rua;
    }
    getNumeroResidencia() {
        return this.numeroResidencia;
    }
    setNumeroResidencia(numeroResidencia) {
        this.numeroResidencia = numeroResidencia;
    }
    getComplemento() {
        return this.complemento;
    }
    setComplemento(complemento) {
        this.complemento = complemento;
    }
    getEnderecoCompleto() {
        return `${this.cep} ${this.uf} ${this.estado} ${this.cidade} ${this.bairro} ${this.rua} ${this.numeroResidencia} ${this.complemento}`;
    }
}
