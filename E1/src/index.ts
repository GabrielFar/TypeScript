var out = document.querySelector("#idOut") as HTMLOutputElement
var btConverter = document.getElementById("idBt") as HTMLButtonElement;

btConverter.onclick = function(){

    let tempEmOBJ = document.querySelector("#idTemp") as HTMLInputElement
    let celsius = document.querySelector("#idCelsius") as HTMLInputElement
    let kelvin = document.querySelector("#idKelvin") as HTMLInputElement
    let fahrenheit = document.querySelector("#idFahrenheit") as HTMLInputElement

    let temperatura = Number(tempEmOBJ.value)

    if (celsius.checked) {

        let conversão = converCelsius(temperatura)
        out.value = conversão
    }    

    if(fahrenheit.checked){
        
        let conversão = converFahrenheit(temperatura)
        out.value = conversão
    }    

    if(kelvin.checked){
        
        let conversão = converKelvin(temperatura)
        out.value = conversão
    }
    

    function converCelsius(temperatura:number) {

        let converFah = (9 * temperatura) + 160/5
        let converKel = (temperatura + 273.15)
        let conversãoFinal: string = "Temperaturas - Kelvin: " + converKel.toFixed(2) + " - Fahrenheit: " + converFah.toFixed(2)

        return conversãoFinal
    }

    function converFahrenheit(temperatura:number) {
        
        let converCel = (5 * temperatura - 160)/9
        let converKel = (temperatura - 32) * 5/9 + 273.15
        let conversãoFinal: string = "Temperaturas - Kelvin: " + converKel.toFixed(2) + " - Celsius: " + converCel.toFixed(2)

        return conversãoFinal
    }

    function converKelvin(temperatura:number) {
        
        let converCel = (temperatura - 273.15)
        let converFah = (temperatura - 273.15) * 9/5 + 32
        let conversãoFinal: string = "Temperaturas - Fahrenheit: " + converFah.toFixed(2) + " - Celsius: " + converCel.toFixed(2)

        return conversãoFinal
    }
}