//FUNCIONES SIN PARAMETROS
function saludarSinParametros() {
    console.log(`¡Hola estudiantes, bienvenidos al curso!`);
}
saludarSinParametros() //Asi se invocan las funciones. Invocar = usar

//FUNCIONES CON PARAMETROS
function saludar(curso, segundoParametro) {
    console.log(`¡Hola estudiantes, bienvenidos al ${curso} este ese mi segundo parametro: ${segundoParametro}!`);
}

let valorUndefined = saludar("SOY EL SEGUNDO PARAMETRO", "CURSO DE JAVASCRIPT") //las funciones sin return devuelven siempre undefined
console.log(valorUndefined)

//FUNCIONES CON RETURN
function saludarConReturn() {
    return "hola chicos de coder" //Se utiliza Return para cortar la funcion y devolver lo que quieran. Ejemplo aca estamos devolviendo un texto, pero podria ser una variable
}
// function saludarConReturn(saludo) {
//     return saludo
// }
let saludoConReturn = saludarConReturn()
console.log(saludoConReturn)

//SUMAR PARAMETROS
function sumar(valor1, valor2) {
    let total = valor1 + valor2 //Total es una variable local. Se puede usar solamente dentro de la funcion
    return total
}
console.log(total)
let resultado = sumar(21, 12);
console.log(`el resultado de la suma es: ${resultado}`)

let nombre = "John Doe" // variable global

//VARIABLES LOCALES y GLOBALES
function saludarConVariablesLocales(texto) {
    let nombre = "Juan Coder" // variable local
    console.log(nombre)
}

saludarConVariablesLocales()
//VARIABLES LOCALES y GLOBALES
function saludarConVariablesGlobales(texto) {
    nombre = "Juan Coder" // variable local
    console.log(nombre)
}

saludarConVariablesGlobales()

let funcionSaludar = () => {
    nombre = texto // variable local
    return nombre
}

//Accede a nombre global
console.log(funcionSaludar(nombre)) // → “John Doe”
