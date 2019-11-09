//  EJERCICIO 6
//  1. Hacer un programa que salude al usuario dependiendo de la hora. 
//  2. Con un prompt, pedirle al usuario que diga qué hora es. 
//  3. Si la hora es mayor que 5 y menor a 12 entonces mostrar el alerta: "Buen día"
//  4. Si la hora es mayor o igual a 12 y menor a 20 entonces mostrar el alerta: "Buenas tardes"
//  5. En cualquier otro caso mostrar el mensaje "Buenas noches". 

let horaIngresadaPorUsuario = prompt("¡Bienvenidx! Por favor, ingresá la hora de 0hr a 24hr")

if (horaIngresadaPorUsuario > 5 && horaIngresadaPorUsuario < 12) {
    alert(`¡Buen día!`)
}
else if (horaIngresadaPorUsuario > 12 && horaIngresadaPorUsuario < 20) {
    alert(`¡Buenas tardes!`)
}
else {
    alert(`¡Buenas noches!`)
};



