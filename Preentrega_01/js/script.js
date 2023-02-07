// declaro variables
let boton = document.getElementById("GuardarItem");
let boton2 = document.getElementById("borrar");
let lista = document.getElementById("listaDeCompras");
let contenidoFormularioProducto = "";
let contenidoFormularioCantidad = "";
let cantidadAcumulada = 0;
let listaDeCompras = [];


// recupero del storage la compra anterior (por si recarga la página)
let listaStorage = JSON.parse(sessionStorage.getItem("listaDeCompras"));
if (listaStorage) {
for (let compraRecuperadaDelStorage of listaStorage ){
    listaDeCompras.push(compraRecuperadaDelStorage);
    let li = document.createElement("li");
    li.innerHTML = "Almacenado: " + "Producto: " + compraRecuperadaDelStorage.producto + "  ----->  " + compraRecuperadaDelStorage.cantidad + "unidades";
    lista.appendChild(li);
    console.log("Agregando " + compraRecuperadaDelStorage.producto);
}
console.log(listaDeCompras);
}

// declaro una clase compra para construir el objeto de productos y cantidades
class Compra{
    constructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = Number (cantidad);
    }
}

// evento cuando hacen click en Guardar item
boton.onclick = () => {
    console.log("Hicieron click");
    contenidoFormularioProducto = document.getElementById("inputProducto");
    contenidoFormularioCantidad = document.getElementById("inputCantidad");

    if (contenidoFormularioProducto.value == "" || contenidoFormularioCantidad.value == "")
        console.log("Formulario en incompleto")
    else {
        let cantidadActual =  contenidoFormularioCantidad.value;
        if (isNaN(cantidadActual))
            console.log("No es un número");
        else{
            console.log(contenidoFormularioProducto.value);
            console.log(contenidoFormularioCantidad.value);
            let li = document.createElement("li");
            li.innerHTML = "Agregando: " + "Producto: " + contenidoFormularioProducto.value + "  ----->  " + contenidoFormularioCantidad.value + " unidades";
            lista.appendChild(li);
            cantidadAcumulada += Number(contenidoFormularioCantidad.value);
            console.log("Acumulado: " + cantidadAcumulada);
            let compra = new Compra (contenidoFormularioProducto.value, contenidoFormularioCantidad.value);
            listaDeCompras.push (compra);
            console.log (listaDeCompras);
            sessionStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras));
        }
    }
}

// evento cuando hacen click en Eliminar último
boton2.onclick = () => {
    let eliminado = listaDeCompras.pop ();
    if (eliminado){            
        lista.removeChild(lista.lastChild);
        console.log ("Haz eliminado "+ eliminado.producto);
        cantidadAcumulada -= eliminado.cantidad;            
        console.log (listaDeCompras);
        sessionStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras));
        }
}