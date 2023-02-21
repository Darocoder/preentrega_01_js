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
    //li.innerHTML = "Almacenado: " + "Producto: " + compraRecuperadaDelStorage.producto + "  ----->  " + compraRecuperadaDelStorage.cantidad + "unidades";

    // dentro del li, va un div, que contiene otros tres divs (producto, cantidad, eliminar)
    let divFila = document.createElement("div");
    let divColumnaIzq = document.createElement("div");
    let divColumnaMed = document.createElement("div");
    let divColumnaDer = document.createElement("div");

    //asigno una clase css a cada div
    divFila.className = "fila";
    divColumnaIzq.className = "columna izquierda";
    divColumnaMed.className = "columna centro";
    divColumnaDer.className = "columna derecha";

    // guardo el contenido de cada div
    divColumnaIzq.innerHTML = compraRecuperadaDelStorage.producto;
    divColumnaMed.innerHTML = compraRecuperadaDelStorage.cantidad;
    divColumnaDer.innerHTML = "eliminar";

    // pinto de otro color los recuperados
    divColumnaIzq.style.color = "grey";

    // creo la estructura html con jerarquías (li contiene div, que contiene 3 divs)
    divFila.appendChild(divColumnaIzq);
    divFila.appendChild(divColumnaMed);
    divFila.appendChild(divColumnaDer);
    li.appendChild(divFila);

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

            // creo un li
            let li = document.createElement("li");
            //li.innerHTML = "Agregando: " + "Producto: " + contenidoFormularioProducto.value + "  ----->  " + contenidoFormularioCantidad.value + " unidades";
            
            // dentro del li, va un div, que contiene otros tres divs (producto, cantidad, eliminar)
            let divFila = document.createElement("div");
            let divColumnaIzq = document.createElement("div");
            let divColumnaMed = document.createElement("div");
            let divColumnaDer = document.createElement("div");

            //asigno una clase css a cada div
            divFila.className = "fila";
            divColumnaIzq.className = "columna izquierda";
            divColumnaMed.className = "columna centro";
            divColumnaDer.className = "columna derecha";

            // guardo el contenido de cada div
            divColumnaIzq.innerHTML = contenidoFormularioProducto.value;
            divColumnaMed.innerHTML = contenidoFormularioCantidad.value;
            divColumnaDer.innerHTML = "eliminar";

            // creo la estructura html con jerarquías (li contiene div, que contiene 3 divs)
            divFila.appendChild(divColumnaIzq);
            divFila.appendChild(divColumnaMed);
            divFila.appendChild(divColumnaDer);
            li.appendChild(divFila);
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