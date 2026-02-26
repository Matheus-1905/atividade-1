let idade = 12
let tipoPessoa = ""
let pessoa1 = "criança"
let pessoa2 = "adolescente"
let pessoa3 = "adulto"
let pessoa4 = "idoso"

if (idade <= 12) {
    tipoPessoa = pessoa1


    if (tipoPessoa === pessoa1) {
        console.log(`voce é uma ${tipoPessoa} e tem ${idade} anos`)
    }
    else {
        console.log(`voce não e uma ${tipoPessoa}`)
    }
}


else if (idade >= 12 & idade <= 17) {

    tipoPessoa = pessoa2

    if (tipoPessoa === pessoa2) {
        console.log(`voce é um ${tipoPessoa} e tem ${idade} anos `)
    }
    else {
        console.log(`voce não é um ${tipoPessoa} e tem ${idade}`)
    }


}

else if (idade >= 18 & idade <= 59) {
    tipoPessoa = pessoa3

    if (tipoPessoa === pessoa3) {
        console.log(`voce é um ${tipoPessoa} e tem ${idade} anos`)
    }

    else {
        console.log(`voce não é um ${tipoPessoa} e tem ${idade} anos`)
    }
}
else{
   tipoPessoa=pessoa4
    console.log(`voce é um ${tipoPessoa} e tem ${idade} `)
}
