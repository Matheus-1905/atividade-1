let personagem = ""
let jogo = ""
let arma = ""
let mochila = ""
let paraquedas = ""
let materialUsado = ""
let quantidadeKill = ""
let tipo = ""
let quantidadeAmigos = ""
let dispositivo = ""

console.log("-----------------------------------------------------------")

function jogo1() {
    dispositivo = "ps4"
    quantidadeKill = 20
    jogo = "fortnite"
    tipo = "battle royale"
    quantidadeAmigos = "2"
    personagem = "homem de ferro"
    paraquedas = "minecraft"
    mochila = "são paulo"
    arma = "midas"
    materialUsado = "madeira"
    console.log(`joguei no ${dispositivo}`)
    console.log("")
    console.log(`entrei no ${jogo}`)
    console.log("")
    console.log(`joguei o modo ${tipo}`)
    console.log("")
    console.log(`joguei com ${quantidadeAmigos} amigos`)
    console.log("")
    console.log(`usei a skin do ${personagem}`)
    console.log("")
    console.log(`usei o paraquedas do ${paraquedas} `)
    console.log("")
    console.log(`usei a mochila do ${mochila}`)
    console.log("")
    console.log(`usei a arma do ${arma}`)
    console.log("")
    console.log(`usei ${materialUsado} para construir`)
    console.log("")
    console.log(`matei ${quantidadeKill} cara`)
    console.log("")
    console.log("agora vai ser outro jogo")
    console.log("------------------------------------------------------------------------")
    return jogo
}
function jogo2() {
    dispositivo = "celular"
    jogo = "free fire"
    tipo = "battle royale"
    personagem = "capitão américa"
    arma = "scar"
    mochila = "azul"
    paraquedas = "god of war"
    materialUsado = "arma"
    amigos = "3"
    quantidadeKill = "20"

    console.log(` vou usar o ${dispositivo}`)
    console.log(`joguei o ${jogo}`)
    console.log(`joguei no modo ${tipo}`)
    console.log(`joguei com ${amigos}`)
    console.log(`usei a skin do ${personagem}`)
    console.log(`usei a mochila da cor ${mochila}`)
    console.log(`usei o paraquedas do ${paraquedas}`)
    console.log(`usei a ${arma}`)
    console.log(`material que eu usei foi a ${materialUsado}`)
    console.log(`matei ${quantidadeKill} caras `)
    console.log("cansei de jogar e parei")
    return jogo
}

function jogoEscolhido() {
    jogo = jogo2()
    if (jogo === jogo2()) {
        console.log(`o jogo selecionado foi o ${jogo}`)
    }

    else {
    console.log(`irei jogar o outro jogo`)
}
}


jogoEscolhido()