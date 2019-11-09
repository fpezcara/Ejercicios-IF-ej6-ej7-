//  EJERCICIO 7
//  1. Hacer un programa que determine si un alumno aprobó o no un examen. 
//  2. Con un prompt, pedir que el usuario ingrese una nota del 0 al 10. 
//  3. Si la nota es mayor o igual a 9 entonces mostrar un alerta: "La nota es excelente".
//  4. Si la nota es menor que 9 y mayor o igual que 6, mostrar el alerta "La nota es buena". 
//  5. Si no, mostrar el alerta "El examen no está aprobado".

let notaIngresada = prompt("¡Bienvenidx! Por favor, ingresá tu nota");

if (notaIngresada >= 9) {
    alert(`La nota es excelente`)
}
else if (notaIngresada < 9 && notaIngresada >= 6) {
    alert(`La nota es buena`)
}
else {
    alert(`El examen no está aprobado`)
};
