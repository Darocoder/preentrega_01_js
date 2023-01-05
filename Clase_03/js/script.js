console.log("Hola, bienvenido a mi JavaScript");
let nombre = "";

nombre = prompt("Ingrese el nombre")
while(nombre ==""){
    alert("INGRESE UN NOMBRE VALIDO")
    nombre = prompt("Ingrese el nombre")
}

do {
    nombre = prompt("Ingrese el nombre")
    if (nombre == "") {
        alert("INGRESE UN NOMBRE VALIDO")
    }
} while (nombre =="");


// // CASO CON CONDICION DE SALIDA "ESC"
nombre = prompt("Ingrese el nombre o ESC PARA SALIR")
while(nombre !="ESC"){
    nombre = prompt("Ingrese el nombre o ESC PARA SALIR")
}

do {
    nombre = prompt("Ingrese el nombre o ESC PARA SALIR")
} while (nombre !="ESC");

//CASO CON UN FOR
for (let turno = 1; turno <= 20; turno++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    if(ingresarNombre=="ESC"){
        break
    }
    while(ingresarNombre ==""){
        ingresarNombre = prompt("Ingrese un nombre valido")
    }
    //OTRA MANERA DE EVITAR QUE AVANCE EL INDICE SI EL VALOR ES INVALIDO
    // if(ingresarNombre==""){
    //     turno=turno-1
    //     continue
    // }
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+turno+" Nombre: "+ingresarNombre);
}