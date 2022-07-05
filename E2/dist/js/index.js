"use strict";
var temps = [];
var out = document.querySelector("#idOut");
var soma = 0;
var btGuardar = document.querySelector("#idBtGuardar");
var btConsultar = document.querySelector("#idBtConsultar");
btGuardar.onclick = function () {
    let temp = document.querySelector("#idTemp");
    let temperatura = Number(temp.value);
    temps.push(temperatura);
    soma = soma + temperatura;
    temp.value = "";
};
btConsultar.onclick = function () {
    let diaOBJ = document.querySelector("#idDia");
    let dia = Number(diaOBJ.value);
    let media = soma / temps.length;
    let diaSelecionado = temps[(dia - 1)];
    let valor;
    for (let i = 0; i < temps.length; i++) {
        if (diaSelecionado > media) {
            valor = "superior";
        }
        else if (diaSelecionado < media) {
            valor = "inferior";
        }
        else if (diaSelecionado == media) {
            valor = "igual";
        }
    }
    out.value = "No dia " + dia + " a temperatura foi " + valor + " à media " + media;
};
