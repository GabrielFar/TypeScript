var outMedia = document.querySelector("#idOutMedia") as HTMLOutputElement
var outMais18 = document.querySelector("#idOutMais18") as HTMLOutputElement
var outMenso5 = document.querySelector("#idOutMenos5") as HTMLOutputElement
var outMaior = document.querySelector("#idOutMaior") as HTMLOutputElement
var btLer = document.querySelector("#idBtLer") as HTMLButtonElement
var btResult = document.querySelector("#idBtResult") as HTMLButtonElement
var idades: number[] = []

btLer.onclick = function (): void{
    let input = document.querySelector("#idIda") as HTMLInputElement
    let idade: number = Number(input.value)
    
    idades.push(idade)

    input.value = ""
}

btResult.onclick = function (): void {
    outMedia.value = "Média: " + calcularmedia()
    outMais18.value = "Acima de 18: " + contaMais18()
    outMenso5.value = "Menos de 5: " + contaMenos5()
    outMaior.value = "Maior Idade: " + verificaMaiorIdade()
}

function calcularmedia(): number {
    let soma: number = 0
    for (let index = 0; index < idades.length; index++) {
        soma = soma + idades[index]
    }
    return soma/idades.length
}

function contaMais18(): number {
    let maisDe18: number = 0
    for (let index = 0; index < idades.length; index++) {
        if (idades[index] >= 18) {
            maisDe18++
        }
    }
    return maisDe18
}

function contaMenos5(): number {
    let menosDe5: number = 0
    for (let index = 0; index < idades.length; index++) {
        if (idades[index] <= 5) {
            menosDe5++
        }
    }
    return menosDe5
}

function verificaMaiorIdade(): number {
    let maiorIdade: number = 0
    for (let index = 0; index < idades.length; index++) {
        if (idades[index] > maiorIdade) {
            maiorIdade = idades[index]
        }
    }
    return maiorIdade
}