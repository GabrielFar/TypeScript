var num: number = 1;
var out = document.querySelector("#idOut") as HTMLOutputElement;
var btLer = document.querySelector("#idBtLer") as HTMLButtonElement;
var btCalcular = document.querySelector("#idBtCalcular") as HTMLButtonElement;
       
btLer.onclick = function() {
    let input = document.querySelector("#idNum") as HTMLInputElement;
    num = num * Number(input.value);
    input.value = "";
}

btCalcular.onclick = function() {
    let pi: number = Math.PI;
    let raiz: number = Math.sqrt(3);
    let cir = document.querySelector("#idCir") as HTMLInputElement;
    let ret = document.querySelector("#idRet") as HTMLInputElement;
    let triR = document.querySelector("#idTriR") as HTMLInputElement;

    if (cir.checked) {
        out.value = calcularAreaCir(pi, num);
        
    } else if(ret.checked){
        out.value = calcularAreaRet(num);

    } else if(triR.checked){
        out.value = calcularAreaTriR(num);

    } else{
        out.value = calcularAreaTriE(raiz, num);
    }
}

function calcularAreaCir(pi: number, num: number): string {
    return "Área: " + (pi * num**2).toFixed(2);
}

function calcularAreaRet(num: number): string {
    return "Área: " + (num).toFixed(2);
}

function calcularAreaTriR(num: number): string {
    return "Área: " + (num/2).toFixed(2);
}

function calcularAreaTriE(raiz: number, num: number): string {
    return "Área: " + (((num**2)* raiz)/4).toFixed(2);
}