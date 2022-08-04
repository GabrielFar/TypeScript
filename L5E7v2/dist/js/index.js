"use strict";
var btChute = document.querySelector("#idBtChute");
var outAviso = document.querySelector("#idOutAviso");
var out = document.querySelector("#idOut");
var numSecreto = Number(((Math.random() * 10) + 1).toFixed(0));
console.log(numSecreto);
var tentativasRestantes = 2;
btChute.onclick = function () {
    let input = document.querySelector("#idChute");
    let chute = Number(input.value);
    outAviso.value = tentativasRestantes + " Tentativas Restantes";
    if (tentativasRestantes == 0) {
        input.disabled = true;
        btChute.disabled = true;
        out.value = "Acabaram as Tentativas! - O número secreto era " + numSecreto;
    }
    else if (numSecreto < chute) {
        out.value = "Número Incorreto - O número secreto é menor do que " + chute;
    }
    else if (numSecreto > chute) {
        out.value = "Número Incorreto - O número secreto é maior do que " + chute;
    }
    if (numSecreto == chute) {
        out.value = "Número Correto - O número secreto era " + numSecreto;
        btChute.disabled = true;
    }
    tentativasRestantes--;
    input.value = "";
};
