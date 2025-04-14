const user = {
    nome: "Samuel",
    idade: "24",
    genero: "masculino",
    cidade: "Fortaleza"
}

function verificarAlistamento(user){
    if(user.idade >= "18" && user.genero == "masculino"){
        console.log("Precisa se alistar")
} else {
    console.log("Não precisa de listar")
}
}

verificarAlistamento(user)