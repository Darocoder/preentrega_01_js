//let producto = document.getElementById("inputProducto")
//console.log (producto)

class Persona{
    constructor(nombre, edad) {
        this.nombreCompleto = "sr. " + nombre;
        this.edadPersona = edad + " años";
        this.veces = 0
        console.log("Acabo de nacer y mi nombre es " + this.nombreCompleto)
    }
    saludar() {
        console.log("Hola mi nombre es " + this.nombreCompleto + ++this.veces)
    }
}

function saludar(nombre, edad) { //recibe un string con el nombre
    console.log("Hola mi nombre es "+ nombre + " y tengo " + edad)
}

function saludarEstructura(persona) { //recibe un string con el nombre
    console.log("Hola mi nombre es "+ persona.nombre + " y tengo " + persona.edad)
}

console.log("inicio de programa")
//usando variables
saludar ("Eze", "10")
let otraPersona = "Dari"
let edad = 11

saludar (otraPersona, edad)

//usando objetos/estructuras
let persona = {nombre: "Dario", edad: "12"}
saludarEstructura(persona)

persona = {nombre: "Ezequiel", edad: "22"}
saludarEstructura(persona)

//usando clases
let dari = new Persona ("Dario", "20")
dari.saludar()
dari.saludar()
dari.veces = 1000
dari.saludar()