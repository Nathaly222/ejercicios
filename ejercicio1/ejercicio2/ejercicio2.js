'use strict'
let promedio = Number(prompt("Promedio del estudiante"));
let ingresos = Number(promedio("Ingreso mensual del familiar"));

if(promedio>=8.5 && ingresos>=600) {
    alert("aprovado");
}
else{
    alert("desaprovado");
}