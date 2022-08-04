var btChute = document.querySelector("#idBtChute") as HTMLButtonElement
var outAviso = document.querySelector("#idOutAviso") as HTMLOutputElement
var out = document.querySelector("#idOut") as HTMLOutputElement

var numSecreto : number = Number(((Math.random() * 10) + 1).toFixed(0))
console.log(numSecreto);

var tentativasRestantes: number = 2

btChute.onclick = function (): void {
    let input = document.querySelector("#idChute") as HTMLInputElement
    let chute: number = Number(input.value)

    outAviso.value = tentativasRestantes + " Tentativas Restantes"

            if (tentativasRestantes == 0) {

                input.disabled = true
                btChute.disabled = true
                out.value = "Acabaram as Tentativas! - O número secreto era " + numSecreto
            }else  if (numSecreto < chute) {

                out.value = "Número Incorreto - O número secreto é menor do que " + chute

            }else if (numSecreto > chute) {
                out.value = "Número Incorreto - O número secreto é maior do que " + chute

            }
            
            if (numSecreto == chute) {            
                out.value = "Número Correto - O número secreto era " + numSecreto
                btChute.disabled = true
            }
           
            tentativasRestantes--
            input.value = ""
}