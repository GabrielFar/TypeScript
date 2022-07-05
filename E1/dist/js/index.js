"use strict";
var out = document.querySelector("#idOut");
var btConverter = document.getElementById("idBt");
btConverter.onclick = function () {
    let tempEmOBJ = document.querySelector("#idTemp");
    let celsius = document.querySelector("#idCelsius");
    let kelvin = document.querySelector("#idKelvin");
    let fahrenheit = document.querySelector("#idFahrenheit");
    let temperatura = Number(tempEmOBJ.value);
    if (celsius.checked) {
        let conversão = converCelsius(temperatura);
        out.value = conversão;
    }
    if (fahrenheit.checked) {
        let conversão = converFahrenheit(temperatura);
        out.value = conversão;
    }
    if (kelvin.checked) {
        let conversão = converKelvin(temperatura);
        out.value = conversão;
    }
    function converCelsius(temperatura) {
        let converFah = (9 * temperatura) + 160 / 5;
        let converKel = (temperatura + 273.15);
        let conversãoFinal = "Temperaturas - Kelvin: " + converKel.toFixed(2) + " - Fahrenheit: " + converFah.toFixed(2);
        return conversãoFinal;
    }
    function converFahrenheit(temperatura) {
        let converCel = (5 * temperatura - 160) / 9;
        let converKel = (temperatura - 32) * 5 / 9 + 273.15;
        let conversãoFinal = "Temperaturas - Kelvin: " + converKel.toFixed(2) + " - Celsius: " + converCel.toFixed(2);
        return conversãoFinal;
    }
    function converKelvin(temperatura) {
        let converCel = (temperatura - 273.15);
        let converFah = (temperatura - 273.15) * 9 / 5 + 32;
        let conversãoFinal = "Temperaturas - Fahrenheit: " + converFah.toFixed(2) + " - Celsius: " + converCel.toFixed(2);
        return conversãoFinal;
    }
};
