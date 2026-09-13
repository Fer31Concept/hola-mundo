function verificarEdad(edad: number): string {
if (edad >= 18) {
    return "Acceso concedido: Bienvenido al sistema";
} else if (edad < 18) {
    return "Acceso denegado: Eres menor de edad";
}
}

console.log(verificarEdad(17));
console.log(verificarEdad(19));