const planes = [
    {
        nombre: "plan001",
        capital: 150000,
        plazo: 30,
        tasa: 0.15
    },
    {
        nombre: "plan002",
        capital: 300000,
        plazo: 180,
        tasa: 0.10
    },
    {
        nombre: "plan003",
        capital: 485000,
        plazo: 60,
        tasa: 0.23
    }
    
]

function calcularInteres (capital, plazo, tasa) {
    let interes;
    interes = (capital * plazo * tasa) / 100;
    return interes;
}

function agregarInteres (planes) {

    for (i=0; i < planes.length; i++) {
        let interes = calcularInteres(planes[i].capital, planes[i].plazo, planes[i].tasa);
        planes[i].interes = interes;
    }
}

agregarInteres(planes)

console.log(planes);