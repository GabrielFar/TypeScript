"use strict";
var outMedia = document.querySelector("#idOutMedia");
var outMais18 = document.querySelector("#idOutMais18");
var outMenso5 = document.querySelector("#idOutMenos5");
var outMaior = document.querySelector("#idOutMaior");
var btLer = document.querySelector("#idBtLer");
var btResult = document.querySelector("#idBtResult");
var idades = [];
btLer.onclick = function () {
    let input = document.querySelector("#idIda");
    let idade = Number(input.value);
    idades.push(idade);
    input.value = "";
};
btResult.onclick = function () {
    outMedia.value = "Média: " + calcularmedia();
    outMais18.value = "Acima de 18: " + contaMais18();
    outMenso5.value = "Menos de 5: " + contaMenos5();
    outMaior.value = "Maior Idade: " + verificaMaiorIdade();
};
function calcularmedia() {
    let soma = 0;
    for (let index = 0; index < idades.length; index++) {
        soma = soma + idades[index];
    }
    return soma / idades.length;
}
function contaMais18() {
    let maisDe18 = 0;
    for (let index = 0; index < idades.length; index++) {
        if (idades[index] >= 18) {
            maisDe18++;
        }
    }
    return maisDe18;
}
function contaMenos5() {
    let menosDe5 = 0;
    for (let index = 0; index < idades.length; index++) {
        if (idades[index] <= 5) {
            menosDe5++;
        }
    }
    return menosDe5;
}
function verificaMaiorIdade() {
    let maiorIdade = 0;
    for (let index = 0; index < idades.length; index++) {
        if (idades[index] > maiorIdade) {
            maiorIdade = idades[index];
        }
    }
    return maiorIdade;
}
