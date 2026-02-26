let comida = ""
let saborComida = ""
let tempoPreparo = 0
let panelaEscolhida = ""
let talherEscolhido = ""
let recipienteExiste = true
let beberAlgo = true
let estouComFome = true

function irAteCozinha() {
    if (estouComFome) {
        console.log("Estou com muita fome...")
        console.log("Vou para a cozinha procurar algo para comer...")
        return true
    }
    else {
        console.log("Não estou com fome, então nem vou comer!")
    }
}

function escolherComida() {
    let fuiCozinha = irAteCozinha()
    if (fuiCozinha) {
        console.log("Quero comer alguma coisa que me lembre macarrão e seja rápido...")
        comida = "Miojo"
        if (comida === "Miojo") {
            console.log(`Eu escolhi que vou comer ${comida} e agora preciso escolher o sabor...`)
            saborComida = "Galinha"
            console.log(`Escolhi comer o ${comida} de ${saborComida}...`)
            return true
        }
        else {
            console.log("Não escolhi o miojo, então não sei o que vou comer!")
            return false
        }
    }
    else {
        console.log("Não fui para a cozinha, então não escolhi comida!")
    }
}

function esquentarAgua() {
    let comidaEscolhida = escolherComida()
    if (comidaEscolhida & recipienteExiste) {
        console.log("Onde vou preparar o miojo...")
        console.log(`Qual  eu vou usar para esquentar o ${comida}?`)
        panelaEscolhida = "Panela de pressão"
        tempoPreparo = 3
        console.log(`Agora preciso esquentar a água por ${tempoPreparo} minutos na ${panelaEscolhida} para preparar o ${comida}...`)
        return true
    }
    else {
        console.log("Não escolhi comida ou não tenho recipiente para esquentar a água!")
    }
}

function prepararComida() {
    let aguaQuente = esquentarAgua()
    if (aguaQuente) {
        console.log(`Agora que a água está quente, vou jogar o ${saborComida} no ${comida}...`)
        console.log(`Pronto! Agora é só esperar ${tempoPreparo} minutos para o ${comida} ficar pronto...`)
        return true
    }
    else {
        console.log("Não tenho água quente para preparar minha comida!")
    }
}

function finalizarParaComer() {
    let comidaPronta = prepararComida()
    if (comidaPronta) {
        console.log(`Agora vou comer todo o meu ${comida} de ${saborComida} e vamos ver se vai ficar bom...`)
        if (beberAlgo) {
            console.log(`Também vou beber algo para acompanhar minha refeição...`)
        }
        else {
            console.log(`Não vou beber nada para acompanhar minha refeição...`)
        }
    }
    else {
        console.log("Não comi nada porque minha comida não ficou pronta ou não tinha bebida!")
    }
}

function alimentacaoVitor() {
    irAteCozinha()
    escolherComida()
    esquentarAgua()
    prepararComida()
    finalizarParaComer()
    console.log(`Acabei de comer o meu ${comida} de ${saborComida}, estava uma delícia!`)
}

alimentacaoVitor()