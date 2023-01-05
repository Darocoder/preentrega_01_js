console.log("Hola, bienvenido a mi java script")
let nombre = "";
nombre = prompt("Ingrese el nombre")
console.log("NOMBRE INGRESADO:  "+" "+nombre)
if(nombre == ""){
}else{
    alert("NOMBRE INGRESADO:"+" "+nombre)
}


let monto = Number(prompt("Ingrese el valor"))
let monto2 = Number(prompt("ingrese valor 2"))
let total = monto+monto2
console.log(total)
if(total < 500){
    alert("Aun no superaste los 500")
}else if(total < 1000){
    alert("Bien ya superaste los 500")
}
else{
    alert("VALOR INGRESADO:"+" "+total+ " Bien! superaste los 1000!")
}

let edad = Number(prompt("ingrese edad"))
if(edad > 16  && edad < 65){
    console.log("Bienvenido a su lisencia")
}else if(typeof Number){
    console.log("Ingreso incorrecto")
}else{
    console.log("Por tu edad no podes anotarte")
}

// WEB con comandos js:  https://www.w3schools.com/js/js_typeof.asp