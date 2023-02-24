// declaro variables
// declaro una clase compra para construir el objeto de productos y cantidades
class Compra{
    constructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = Number (cantidad);
    }
}
let boton = document.getElementById("GuardarItem");
let boton2 = document.getElementById("borrar");
let lista = document.getElementById("listaDeCompras");
let botonEnvio = document.getElementById("CalculaEnvio");

let contenidoFormularioProducto = "";
let contenidoFormularioCantidad = "";
let cantidadAcumulada = 0;
let listaDeCompras = [];
let productosValidos = []


function eliminarProductoDeLaLista(idQueQuieroBorrar){
    console.log("Eliminando fila " + "fila_" + idQueQuieroBorrar);

    let eliminado = listaDeCompras[idQueQuieroBorrar];
    if (eliminado){   
        // borro el elemento del array
        delete listaDeCompras[idQueQuieroBorrar];     
        listaDeCompras.remove    
        console.log("por borrar el elemento " + String(idQueQuieroBorrar));

        //borro el elemento del html (el li completo)
        document.getElementById("fila_" + idQueQuieroBorrar).remove();
        console.log ("Has eliminado "+ eliminado.producto);

        // guardo en el storage el estado actual de la compra
        sessionStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras));
    }
    console.log(listaDeCompras)
}

// esta función recibe un objeto compra (que tiene producto y cantidad) y un booleano que indica si hay que cambiar el color
function agregarFilaEnHTML(fila, esRecuperadoDelStorage){
        let li = document.createElement("li");

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
        divColumnaIzq.innerHTML = fila.producto;
        divColumnaMed.innerHTML = fila.cantidad;

        // pinto de otro color los recuperados
//        if(esRecuperadoDelStorage)
//            divColumnaIzq.style.color = "grey";

        // reemplazo el if por un ternario (booleano)?acciónVerdadero:acciónFalso;
         (esRecuperadoDelStorage)?divColumnaIzq.style.color = "grey":divColumnaIzq.style.color = "blue";
            
        let botonBorrar = document.createElement("botton");
        botonBorrar.innerHTML = "eliminar";
        botonBorrar.className = "botonEliminar";
        botonBorrar.id = numProducto;

        // asigno una funcionalidad al botón sobre cada ítem recuperado del storage
        botonBorrar.onclick = () =>  eliminarProductoDeLaLista(botonBorrar.id);
        
        divColumnaDer.appendChild(botonBorrar);

        // creo la estructura html con jerarquías (li contiene div, que contiene 3 divs)
        divFila.appendChild(divColumnaIzq);
        divFila.appendChild(divColumnaMed);
        divFila.appendChild(divColumnaDer);
        li.appendChild(divFila);

        // finalmente, agrego el li al html
        lista.appendChild(li);
        console.log("Agregando " + fila.producto);
        if (!esRecuperadoDelStorage)
            Toastify({
                text: "Artículo agregado",
                duration: 3000
                }).showToast();
                console.log(listaDeCompras);
        numProducto ++;
}

function traerDatosDelStorage(){
    if (listaStorage) {
        for (let compraRecuperadaDelStorage of listaStorage ){
            if (!compraRecuperadaDelStorage){
                console.log("el producto " + numProducto + " ya fue eliminado de la lista, se recupera un null y no se agrega nada")
                continue;
            }
            agregarFilaEnHTML(compraRecuperadaDelStorage, true)
            listaDeCompras.push(compraRecuperadaDelStorage);
        }
    }
}

function prometoTraerDatosDelStorage(){
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve (
                traerDatosDelStorage(),
                console.log("listo"))
        }, 2000)
    })
}

//  variable global (tengo que acceder desde un evento)
let numProducto = 0;
// recupero del storage la compra anterior (por si recarga la página)
let listaStorage = JSON.parse(sessionStorage.getItem("listaDeCompras"));

console.log("espero dos segundos para que me traiga los datos del storage")
prometoTraerDatosDelStorage(),

// termina la lógica de recuperar del storage



// evento cuando hacen click en Guardar item
boton.onclick = () => {
    function mensajeError(texto){
        Swal.fire({
            title: 'Error!',
            text: texto,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }

    contenidoFormularioProducto = document.getElementById("inputProducto");
    contenidoFormularioCantidad = document.getElementById("inputCantidad");

    if (contenidoFormularioProducto.value == "" || contenidoFormularioCantidad.value == "") {
        mensajeError("Debes ingresar un producto");
        return
    }

    let cantidadActual =  contenidoFormularioCantidad.value;
    if (isNaN(cantidadActual)){
        mensajeError('La cantidad debe ser un número');
        return
    }

    let compra = new Compra (contenidoFormularioProducto.value, contenidoFormularioCantidad.value);
    //el false indica que NO voy a cambiar el color por defecto (que es verde)
    agregarFilaEnHTML(compra, false)
    listaDeCompras.push (compra);
    sessionStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras));
}


botonEnvio.onclick = () => {
    console.log("mostrando costos de envio")
    calculaCostoEnvio()
}

const calculaCostoEnvio = async(zona) => {

    let costos = []

    const resp = await fetch("codigosPostales.json")
    // el profe dijo en clase que hay que hacer dos then para llegar al dato
    .then ((res) => res.json(), 
        console.log("termina el primer then")
    )
    .then (
        (data) => { 
        data.forEach(zona => {
            console.log("Leyendo el código postal del json: " + zona.cp + " que pertener a la localidad de " + zona.localidad)
            costos.push(zona)
            console.log(costos)
        });

     
        }
    )
    console.log("Termina el segundo then, verifico el costo de enviar a " )

    let mostrar = ""
    for (zona of costos){
        mostrar+=zona.localidad + " (" + zona.cp + "): $" + zona.costoEnvio + "<br>"; 
    }

    Swal.fire({
        title: 'Las costos por zona de envío son',
        html: mostrar,
        confirmButtonText: 'Ok'
    })
    
}
