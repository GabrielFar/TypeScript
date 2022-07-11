import { Pessoa } from "./index";

var pessoa: Pessoa;
pessoa = new Pessoa(0, 14, 3, 1879, "Albert Einstein");

var nome = pessoa.getNome()
pessoa.setDataNascimento(14, 3, 1879)
pessoa.calculaIdade()
var idade = pessoa.getIdade()
console.log(`${nome} ${idade}`);

pessoa = new Pessoa(0, 4, 1, 1643, "Isaac Newton");

nome = pessoa.getNome()
pessoa.setDataNascimento(4, 1, 1643)
pessoa.calculaIdade()
idade = pessoa.getIdade()
console.log(`${nome} ${idade}`);