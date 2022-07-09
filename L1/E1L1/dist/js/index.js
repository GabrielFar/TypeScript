"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(idade, diaNasc, mesNasc, anoNasc, nome) {
        this.idade = idade;
        this.diaNasc = diaNasc;
        this.mesNasc = mesNasc;
        this.anoNasc = anoNasc;
        this.nome = nome;
    }
    calculaIdade() {
        let data = new Date();
        return this.idade = data.getFullYear() - this.anoNasc;
    }
    getIdade() {
        return this.idade;
    }
    getNome() {
        return this.nome;
    }
    setDataNascimento(diaNasc, mesNasc, anoNasc) {
        this.diaNasc = diaNasc;
        this.mesNasc = mesNasc;
        this.anoNasc = anoNasc;
    }
}
exports.Pessoa = Pessoa;
