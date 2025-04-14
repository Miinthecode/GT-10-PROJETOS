


function calcularAluguel(dias, km){
    if (km > 1000){
        const valorPorDia = 250;
        const calculoDia = dias * valorPorDia // valorPorDia
        const valordoKM = km * 0.25

        const total = calculoDia + valordoKM
        console.log(total)
    } else {
        const valorPorKm = 0.50;
        const calculoDia = dias * 0.50
        const calculoKm = km * 0.25

        const total = calculoDia + calculoKm
        console.log(total)
    }
}

calcularAluguel(10, 100)