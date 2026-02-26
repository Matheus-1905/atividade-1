let comida = "miojo"
let saborMiojo = "galinha"
let panelaEscolhida = "leiteira"
let recipiente = 'prato'
let talher = "garfo"
let bebida = "guarana antartica"

function preparandoMiojo() {

    let liquido = "agua"

    if (panelaEscolhida === "leiteira") {
        console.log(`vou usar a ${panelaEscolhida}`)
        console.log("")
        liquido = "agua"
        console.log(`coloquei a ${liquido} na leiteira`)
        console.log("")

    }

    else {
        console.log("não peguei a leiteira ainda e nem a água")

    }

    if (comida === "miojo") {
        console.log(`fazendo o ${comida}`)
        console.log("")
    }


    else {
        console.log("não estou fazendo o miojo")

    }
    if (saborMiojo === "galinha") {
        console.log(`depois de cozido coloquei o sabor de ${saborMiojo}`)
        console.log("")
    }


    else {
        console.log("fui cabaço e deixei queimar e não coloquei o tempero")
    }

    if (recipiente === "prato") {
        console.log(` depois de pronto coloquei o miojo no ${recipiente}`)
        console.log("")
    }

    else {
        console.log("deixei o prato cair e não coloquei o miojo no prato")
    }

    if (talher === "garfo") {
        console.log(`abri a gaveta e peguei o ${talher}`)
        console.log("")
    }

    else {
        console.log("fui idiota e não peguei o talher ")
    }

    if (bebida === "guarana antartica") {
        console.log(`peguei na geladeira um refrigerante de ${bebida}`)
        console.log("")
    }

    else {
        console.log("não quis mais o refri")
    console.log("")
    }

    console.log("depois desse processo todo fui para a mesa e comi o meu belissimo miojo")

}

preparandoMiojo()