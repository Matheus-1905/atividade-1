let horaDeAcordar = 11
let acordado = true
let escoveiOsDentes = false
let troqueiDeRoupa = false
let arrumeiACama = false
let comodo = ""
let abraOGavetao = false
let pegueiOSucrilhos = false
let abrirArmario = false




function acordar() {
    if (horaDeAcordar >= 11) {
        console.log(`acordar as ${horaDeAcordar} horas`)
        
    }
    else {
        console.log("não acordei no horário previsto burro... ")
    }
    if (escoveiOsDentes = true) {
        console.log("eu escovei os meus dentes")
    }
    else {
        console.log("não quis escovar os dentes")
    }
    if (troqueiDeRoupa = true) {
        console.log("agora vou trocar de roupa")
    }
    else {
        console.log("não quis trocar de roupa")
    }
    if (arrumeiACama = true) {

        console.log("agora vou arrumar a cama e comer, graças a deus")
    }
    else {
        console.log("fiquei com preguiça de arrumar a cama ")
    }
}

function comer() {
    comodo = "cozinha"
    if (comodo === "cozinha") {
        console.log(`vou ir até a ${comodo} e comer algo`)
    }
    else {
        console.log("fiquei com preguiça de comer")
    }
    if (abraOGavetao = true) {
        console.log("vá até o armário e abra o gavetão")
        if (pegueOPote = true) {
            console.log("vou pegar o pote ")
        }
    }
    else {
        console.log("não quis ir  até o armário ")
    }

    if (abraAGeladeira = true) {
        console.log(" abri a geladeira")
        if (pegarOLeite = true) {
            console.log(" peguei o leite")
        }
    }
    else {
        console.log("não achei nada na geladeira, então não peguei o leite")
    }
    if (pegarOSucrilhos = true) {
        comodo = "cozinha"
        console.log(" peguei o sucrilhos no balcão")
        if (colocarTudoNoPote = true) {
            console.log(`depois de pegar todos os ingredientes na ${comodo} coloquei tudo no pote`)

        }
    }
    else {
        console.log("não quis mais comer, perdi a fome")
    }
    comodo = "sala"
    if (comerOSucrilhos = true) {

        console.log(`depois de pronto fui comer na ${comodo}`)
    }

    else {
        console.log("não comi na sala, comi no banheiro")
    }

}

function irSala() {
    if (sentarNoSofa = true) {
        console.log("sentei no sofá ")
        if (pegarOControle = true) {
            console.log("peguei o controle")
        }

    }
    else {
        console.log("fui para o telhado para comer")
    }
    if (ligarATv = true) {
        console.log("liguei a tv")
        if (assitirTv = true) {
            console.log("assisti uma série")
        }

    }
    else {
        console.log("não estava afim de ver tv")
    }
}

function voltarQuarto() {
    comodo = "quarto"
    if (deitarNaCama = true) {
        console.log("fui para o quarto e deitei na cama")
    }
    else {
        console.log("lógico que eu deitei na cama aonde mais eu ia deitar cabaço")
    }
    if (ficarNoCelular = true) {
        console.log("fiquei no celular até o horário de dormir")
    }
    else {
        console.log("deitei na cama e capotei")
    }
    
    





}
function sairQuarto() {
    acordar()
    comer()
    irSala()
    voltarQuarto()
}
sairQuarto()