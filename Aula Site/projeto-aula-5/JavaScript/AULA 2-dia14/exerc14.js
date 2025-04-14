const carro = {
    modelo: "civic",
    ano: "2021",
    cor: "preto",
    km: 800
}

function verificarCarro(carro){
    if(carro.ano > 2020 || carro.km < 1000){
        console.log("Carro novo")
    } else { 
    console.log("Carro Usado")
    }
}

verificarCarro(carro)