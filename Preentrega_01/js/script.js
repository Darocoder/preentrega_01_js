// declaro variables
let boton = document.getElementById("GuardarItem");
let boton2 = document.getElementById("borrar");
let lista = document.getElementById("listaDeCompras");
let contenidoFormularioProducto = "";
let contenidoFormularioCantidad = "";
let cantidadAcumulada = 0;
let listaDeCompras = [];


//  variable global (tengo que acceder desde un evento)
let numProducto = 0;
// recupero del storage la compra anterior (por si recarga la página)
let listaStorage = JSON.parse(sessionStorage.getItem("listaDeCompras"));
if (listaStorage) {
    for (let compraRecuperadaDelStorage of listaStorage ){
        if (!compraRecuperadaDelStorage){
            console.log("el producto " + numProducto + " ya fue eliminado de la lista, se recupera un null y no se agrega nada")
            continue;
        }

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
        li.id = "fila_" + numProducto;
        divColumnaIzq.className = "columna izquierda";
        divColumnaMed.className = "columna centro";
        divColumnaDer.className = "columna derecha";

        // guardo el contenido de cada div
        divColumnaIzq.innerHTML = compraRecuperadaDelStorage.producto;
        divColumnaMed.innerHTML = compraRecuperadaDelStorage.cantidad;

        // pinto de otro color los recuperados
        divColumnaIzq.style.color = "grey";

        let botonBorrar = document.createElement("botton");
        botonBorrar.innerHTML = "eliminar";
        botonBorrar.className = "botonEliminar";
        botonBorrar.id = numProducto;


        // asigno una funcionalidad al botón sobre cada ítem recuperado del storage
        botonBorrar.onclick = () => {
            console.log("Eliminando fila " + "fila_" + botonBorrar.id);

            let eliminado = listaDeCompras[botonBorrar.id];
            if (eliminado){   
                // borro el elemento del array
                delete listaDeCompras[botonBorrar.id];     
                listaDeCompras.remove    
                console.log("por borrar el elemento " + String(botonBorrar.id));

                //borro el elemento del html (el li completo)
                document.getElementById("fila_" + botonBorrar.id).remove();
                console.log ("Has eliminado "+ eliminado.producto);

                // guardo en el storage el estado actual de la compra
                sessionStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras));
            }
            console.log(listaDeCompras)

        }
        divColumnaDer.appendChild(botonBorrar);

        // creo la estructura html con jerarquías (li contiene div, que contiene 3 divs)
        divFila.appendChild(divColumnaIzq);
        divFila.appendChild(divColumnaMed);
        divFila.appendChild(divColumnaDer);
        li.appendChild(divFila);

        lista.appendChild(li);
        console.log("Agregando " + compraRecuperadaDelStorage.producto);
        numProducto ++;
    }
console.log(listaDeCompras);
console.log("numproducto" + numProducto)
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
    console.log("El producto es " + numProducto)
    contenidoFormularioProducto = document.getElementById("inputProducto");
    contenidoFormularioCantidad = document.getElementById("inputCantidad");

    if (contenidoFormularioProducto.value == "" || contenidoFormularioCantidad.value == "") {
        Swal.fire({
            title: 'Error!',
            text: 'Debes ingresar un producto',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
        return
    }

    let cantidadActual =  contenidoFormularioCantidad.value;
    if (isNaN(cantidadActual)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La cantidad debe ser un número',
        })
        return
    }

        
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
    console.log("Agregando el producto " + numProducto)
    li.id="fila_" + numProducto;

    // guardo el contenido de cada div
    divColumnaIzq.innerHTML = contenidoFormularioProducto.value;
    divColumnaMed.innerHTML = contenidoFormularioCantidad.value;

    //<button id="borrar" class="botonEliminarUltimo">Eliminar último</button>
    let botonBorrar = document.createElement("botton");
    botonBorrar.innerHTML = "eliminar";
    botonBorrar.className = "botonEliminar";
    botonBorrar.id = numProducto;

    botonBorrar.onclick = () => {
        console.log("Eliminando fila " + "fila_" + botonBorrar.id);
        console.log(listaDeCompras)

        let eliminado = listaDeCompras[botonBorrar.id];
        if (eliminado){   
            delete listaDeCompras[botonBorrar.id];     
            listaDeCompras.remove    
            console.log("por borrar el elemento " + String(botonBorrar.id));
            document.getElementById("fila_" + botonBorrar.id).remove();
            console.log ("Has eliminado "+ eliminado.producto);
            console.log (listaDeCompras);
            sessionStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras));
            Toastify({
                text: "Artículo eliminado",
                duration: 3000
                }).showToast();
            }
    }
    
    divColumnaDer.appendChild(botonBorrar);

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
    Toastify({
        text: "Artículo agregado",
        duration: 3000
        }).showToast();

        numProducto ++;
}

