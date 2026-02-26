let1 = 0
let2 = 0
let resultado = 0
function soma() {
    n1 = 2
    n2 = 4
    resultado = n1 + n2
    return resultado
}

function subtracao() {
    n1 = 25
    n2 = 7
    resultado = n1 - n2
    return resultado
}


function muiltiplicacao() {
    n1 = 3
    n2 = 6
    resultado = n1 * n2
    return resultado
}

function divisao() {
    n1 = 2
    n2 = 10
    resultado = n1 / n2
    return resultado
}

resultado = soma()
console.log(`a soma dos numeros é ${resultado}`)
resultado = subtracao()
console.log(`a subtração dos números é ${resultado}`)
resultado = muiltiplicacao()
console.log(`a multiplicação dos números é ${resultado}`)
resultado = divisao()
console.log(`a divisaõ dos números é ${resultado}`)
