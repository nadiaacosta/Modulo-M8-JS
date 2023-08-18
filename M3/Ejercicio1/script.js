const flujoDeCaja = [
    { 
       periodo: "enero",
       ingresos: 1500,
       egresos: 1500
    },
    { 
       periodo: "febrero",
       ingresos: 2500,
       egresos: 2500
    },
    { 
       periodo: "marzo",
       ingresos: 84683,
       egresos: 1155
    },
    { 
       periodo: "abril",
       ingresos: 135353,
       egresos: 1533
    },
    { 
       periodo: "mayo",
       ingresos: 1535,
       egresos: 5434
    },
    { 
       periodo: "junio",
       ingresos: 4343354,
       egresos: 5434543
    },
    { 
       periodo: "julio",
       ingresos: 435453,
       egresos: 4543
    },
    { 
       periodo: "agosto",
       ingresos: 78351,
       egresos: 7816
    },
    { 
       periodo: "septiembre",
       ingresos: 1878,
       egresos: 95634
    },
    { 
       periodo: "octubre",
       ingresos: 48483,
       egresos: 9433
    },
    { 
       periodo: "noviembre",
       ingresos: 35483,
       egresos: 53133
    },
    { 
       periodo: "diciembre",
       ingresos: 3843,
       egresos: 348133
    }
   ]

function calcularFlujo(flujo) {
let resultadoFlujo;
let totalIngresos = 0 ;
let totalEgresos = 0 ;
for (let i = 0; i < flujo.length; i++) {
   totalIngresos = totalIngresos + flujo[i].ingresos
   totalEgresos = totalEgresos + flujo[i].egresos
}

resultadoFlujo = totalIngresos - totalEgresos;
return resultadoFlujo;
}

function esConfiable(resultadoFlujo) {
if (resultadoFlujo > 0) {
   alert("La empresa es confiable")
}
else {
   alert("La empresa no es confiable")
}
}
   
const resultado = calcularFlujo(flujoDeCaja);
esConfiable(resultado);