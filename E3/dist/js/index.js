"use strict";
var num = 1;
var out = document.querySelector("#idOut");
var btLer = document.querySelector("#idBtLer");
var btCalcular = document.querySelector("#idBtCalcular");
btLer.onclick = function () {
    let input = document.querySelector("#idNum");
    num = num * Number(input.value);
    input.value = "";
};
btCalcular.onclick = function () {
    let pi = Math.PI;
    let raiz = Math.sqrt(3);
    let cir = document.querySelector("#idCir");
    let ret = document.querySelector("#idRet");
    let triR = document.querySelector("#idTriR");
    if (cir.checked) {
        out.value = calcularAreaCir(pi, num);
    }
    else if (ret.checked) {
        out.value = calcularAreaRet(num);
    }
    else if (triR.checked) {
        out.value = calcularAreaTriR(num);
    }
    else {
        out.value = calcularAreaTriE(raiz, num);
    }
};
function calcularAreaCir(pi, num) {
    return "Área: " + (pi * num ** 2).toFixed(2);
}
function calcularAreaRet(num) {
    return "Área: " + (num).toFixed(2);
}
function calcularAreaTriR(num) {
    return "Área: " + (num / 2).toFixed(2);
}
function calcularAreaTriE(raiz, num) {
    return "Área: " + (((num ** 2) * raiz) / 4).toFixed(2);
}
