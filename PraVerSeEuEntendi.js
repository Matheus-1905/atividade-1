let comodo = ""
let celular = false
let desbloquear = false
let aplicativo = ""
let mandarMensagem = false

function mandandoMensagem() {
    comodo = "quarto"
    if (comodo === "quarto") {
        console.log(`fui para o ${comodo}`)
        if (celular = true)
            console.log("peguei o celular e desbloquei ele")
        celular = true
        desbloquear = true

    }
    else {
        console.log("não peguei o celular, não estava afim")
    }

    aplicativo = "instagram"
    if (aplicativo === "instagram") {
        console.log(`entrei no ${aplicativo}`)
        if (mandarMensagem = true) {
            console.log("mandei mensagem para o vitor")
        }
        else {
            console.log("não mandei a mensagem, só fiquei vendo reels")
        }
    }
}

mandandoMensagem()