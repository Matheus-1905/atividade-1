function restaurante(nomeRestaurante, corRestaurante, endereço, numero, quantidadeFuncionarios,) {
    console.log('')
    console.log('----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
    console.log('')
    console.log(`viemos visitar o restaurante ${nomeRestaurante}`)
    console.log(`é um restaurante bem bonito de bairro, que consiste na tematica nordestina`)
    console.log(`seu interior e exerior é de madeira nas cores ${corRestaurante} para simbolizar um ambiente bem nordestino`)
    console.log(`ele se localiza na ${endereço} n°${numero}`)
    console.log(`como é um restaurante de bairro ele tem ${quantidadeFuncionarios} funcionarios`)
    console.log(' ')
    console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
    console.log(' ')
}



function catalogo(pratos, preco, pratoEscolhido) {
    console.log('')
    console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
    console.log('')
    console.log(`prato 1 ${pratos[0]} /R$ ${preco[0]},89`)
    console.log(`prato 2 ${pratos[1]} / R$${preco[1]},64 `)
    console.log(`prato 3 ${pratos[2]} / R$${preco[2]},99`)
    console.log(`prato 4 ${pratos[3]} / R$${preco[3]},80`)
    console.log('')
    console.log('----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
    console.log('')

    if (pratoEscolhido === 1) {
        console.log(`Seu prato escolhido foi ${pratos[0]}`)
        return preco[0]
    }
    else if (pratoEscolhido === 2) {
        console.log(`Seu prato escolhido foi ${pratos[1]}`)
        return preco[1]
    }
}



function funcionarios(nome1, idade1, email1, senha1, funcao1, nome2, idade2, email2, senha2, funcao2, nome3, idade3, email3, senha3, funcao3, nome4, idade4, email4, senha4, funcao4, nome5, idade5, email5, senha5, funcao5) {
    console.log('')
    console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
    console.log('')
    console.log(`funcionario 1 : ${nome1} tem ${idade1} anos, seu email é ${email1}, sua senha de acesso é ${senha1}, exerce o cargo de ${funcao1} `)
    console.log(`funcionario 2 : ${nome2} tem ${idade2} anos, seu email é ${email2}, sua senha de acesso é ${senha2}, exerce o cargo de ${funcao2} `)
    console.log(`funcionario 3 : ${nome3} tem ${idade3} anos, seu email é ${email3}, sua senha de acesso é ${senha3}, exerce o cargo de ${funcao3} `)
    console.log(`funcionario 4 : ${nome4} tem ${idade4} anos, seu email é ${email4}, sua senha de acesso é ${senha4}, exerce o cargo de ${funcao4} `)
    console.log(`funcionario 5 : ${nome5} tem ${idade5} anos, seu email é ${email5}, sua senha de acesso é ${senha5}, exerce o cargo de ${funcao5} `)
    console.log('')
    console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
    console.log('')
}

restaurante('prato bom', 'marrom', 'rua lazaro de boa vista', 117, 5)
catalogo(['arroz ', 'arroz -feijão', 'feijão - salada', 'saladaX - carne vegana'], [119, , 89, , 110, , 78])
funcionarios('josé da silva', 27, 'jose7665@gmail.com', 822, 'cozinheiro', 'taina silva', 21, 'tayFF4321@gmail.com', 677, 'balconisa', 'adriano lima', 38, 'adrianoo21@gmail.com', 421, 'garçom', 'amelia linda', 31, 'amelinda@gmail.com', 586, 'cozinheira', 'fabio de melo', 20, 'fabinho5d@gmail.com', 777, 'gerente')



