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
        let ano = data.getFullYear();
        let mes = data.getMonth();
        let dia = data.getDay();
        this.idade = Number(ano) - this.anoNasc;
        if (Number(mes) == this.mesNasc) {
            if (Number(dia) > this.diaNasc) {
                this.idade + 1;
            }
        }
        else if (Number(mes) > this.mesNasc) {
            this.idade + 1;
        }
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
