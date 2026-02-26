let nome = ''
let sobrenome = ''
let idade = 0
let gmail = ''
let cpf = ''
let nomeDaMae = ''
let nomeDoPai = ''

function cadastro() {
    nome = 'davi'
    sobrenome = 'oliveira'
    nomeCompleto = nome + ' ' + 'de' + ' ' + sobrenome
    idade = 15
    gmail = 'davidias51131@gmail.com'
    cpf = '8880989438'
    nomeDaMae = 'joelma'
    nomeDoPai = 'wagner'

    console.log(`seu nome: ${nomeCompleto}`)
    console.log(`idade: ${idade}`)
    console.log(`seu gmail: ${gmail}`)
    console.log(`seu cpf: ${cpf}`)
    console.log(`nome da mãe: ${nomeDaMae}`)
    console.log(`nome do pai: ${nomeDoPai}`)

}

function cadastro2(nomeCompleto, idade, gmail, nomeDaMae, nomeDoPai, cpf = '980823094943') {
    

    console.log(`seu nome: ${nomeCompleto}`)
    console.log(`idade: ${idade}`)
    console.log(`seu gmail: ${gmail}`)
    console.log(`seu cpf: ${cpf}`)
    console.log(`nome da mãe: ${nomeDaMae}`)
    console.log(`nome do pai: ${nomeDoPai}`)

}

cadastro()
cadastro2('davi de oliveira', 15, 'davidias51131@gmail.com','joelma', 'wagner')