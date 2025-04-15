const user = {
    nome: "Michele",
    Altura: 1.72,
    Peso: 125
}

function calcularIMC(user){
    const IMC = user.Peso / (user.Altura * user.Altura)
    console.log(IMC.toFixed(2))

    if(IMC < 16){
        return console.log("Magreza Grave")
    } if (IMC >= 16 && IMC < 16.9){
        return console.log("Magreza Moderada")
    } if (IMC > 17 && IMC < 18.5){
        return console.log("Magreza leve")
    } if (IMC > 18.5 && IMC < 24.9) {
        return console.log("Peso Normal")
    } if (IMC > 25 && IMC < 29.9){
        return console.log("Sobrepeso")
    } if (IMC > 30 && IMC < 34.9){
        return console.log("Obesidade Grau I")
    } if (IMC > 35 && IMC < 39.9){
        return console.log("Obesidade Grau II")
    } if (IMC > 40){
        return console.log("Obesidade Grau III")
    }

}

calcularIMC(user)

