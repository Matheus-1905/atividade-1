let comida = 'miojo'
let saborMiojo = 'galinha'
let tempoMiojo = 0
let panela = 'leitera'
let recipiente = 'prato'
let talher = 'colher'
let bebida = 'coca'

function preparandoMiojo() {
    if (comida === 'miojo') {
        console.log(`abri o armario e peguei o ${comida}`)
        if (saborMiojo === 'galinha') {
            console.log(`escolhi o sabor ${saborMiojo} para comer`)
            if (panela === 'leitera') {
                console.log(`escolhi a ${panela} para fazer o ${comida}`)
                if (recipiente === 'prato') {
                    console.log(`após o ${comida} ficar pronto, peguei um ${recipiente}`)
                    if (talher === 'colher') {
                        console.log(`não vou comer com a mão, então peguei uma ${talher}`)
                       
                    }
                    else{
                        console.log(`não escolhi nenhuma ${talher} pois não vou comer`)
                    }
                     if (bebida === 'coca') {
                            console.log(`para eu acompanhar a comida, peguei uma ${bebida} na geladeira`)

                        }
                        else{
                            console.log(`não bebi nada, pois não comi tambem!`)
                        }

                }
                else{
                    console.log(`não escolhi nenhum ${recipiente}, pois não comi ${comida}`)
                }
            }
            else{
                console.log(`não escolhi nenhuma ${panela}, pois não comi ${comida}`)
            }
        }
        else{
            console.log(`não escolhi nenhum tempero, pois não comi nenhum ${comida}!`)
        }

    }
    else {
        console.log(`não comi miojo`)
    }
    
}
preparandoMiojo()



