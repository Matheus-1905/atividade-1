const horaDeAcordar     =9
let acordado          = true
let escovarOsDentes   = false
let arrumarRoupa      = false
let tomarCafe         = false 
const lugar             ="trabalho"
const meioDeLocomocao     ="onibus"

function irEscola() {
    console.log(`Acordar ${horaDeAcordar} horas`)
    escovarOsDentes= true
    console.log("escovei os dentes")
    arrumarRoupa=true
    console.log("Arrumei a roupa")
    tomarCafe= true
    console.log("tomei café da manhã")
    console.log(`fui para a escola de ${meioDeLocomocao}`)
    console.log(`ir para a ${lugar}`)
}
irEscola()
