// armazenar valor dos input altura e peso
var altura = document.getElementById("altura")
var peso = document.getElementById("peso")
// armazenar o valor do botão por id
var btn = document.getElementById("btn")
// armazenar o valor da div fim
var fim = document.getElementById("fim")

// função para calcular o IMC
function calcularIMC(){
    // armazenar apenas o valor do input
    const valorAltura = altura.value // valor do input dentro do var altura
    const valorPeso = peso.value // valor do input dentro do var peso

    // calcular o IMC
    const IMC = valorPeso / (valorAltura * valorAltura)

    return IMC
}

// criar uma função de click, para quando clicar criar uma função especifica no caso fazer o calculo chamando a função
function calcular(){
    // chama a função de calcularIMC e armazenar o valor
    const IMC = calcularIMC()
    var mensagem = ""

    if(IMC < 16){
        mensagem = "Você está com magreza Grave"
    }

    if (IMC >= 16 && IMC < 16.9){
        mensagem = "Magreza Moderada"
    }

    if (IMC > 17 && IMC < 18.5){
        mensagem = "Magreza leve"
    }

    if (IMC > 18.5 && IMC < 24.9) {
        mensagem = "Peso Normal"
    }

    if (IMC > 25 && IMC < 29.9){
        mensagem = "Sobrepeso"
    }

    if (IMC > 30 && IMC < 34.9){
       mensagem = "Obesidade Grau I"
    }

    if (IMC > 35 && IMC < 39.9){
        mensagem = "Obesidade Grau II"
    }

    if (IMC > 40){
        mensagem = "Obesidade Grau III"
    }

    // renderizar o resultado na div fim
    fim.innerHTML = `
    <div class="linha"></div>
        <div class="resultado">
            <div class="esquerda">
                <h2>${IMC.toFixed(2)}</h2>
                <p>Seu IMC</p>
            </div>
            <div class="direita">
            <p>${mensagem}</p>
            </div>
        </div>
        <div class="linha"></div>
    `
    
}

// adicionar evento de click no botão
btn.addEventListener("click", calcular)       // como se fosse um observador do botão, quando a atividade que eu programei for executada ele age
