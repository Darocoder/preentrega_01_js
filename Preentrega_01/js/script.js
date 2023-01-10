// let total = 0
// let cantidadProductos = 0
// let numeroLista = 0
// const salir = "esc"

function ingresaProducto() {
    let p = prompt ("Ingrese un producto o escriba ESC para salir");
    
    while (p == "") {
        p = prompt ("El producto ingresado está en blanco, ingrese un producto o escriba ESC para salir")
    }
    return p
}

function ingresaCantidad() {
    let c = prompt ("Ingrese la cantida deseada");
    while (c =="") {
        c = prompt ("La cantidad ingresada está en blanco, ingrese una cantidad")
    }
    return c
}

const cantidadMaxima = 3
alert ("Bienvenido a tu lista de compra, puedes ingresar hasta " + cantidadMaxima + " items a comprar")


// console.log ("El contenido de i es: " + i)
let cantidadTotalDeProductos = 0;
for (let i = 1; i <= cantidadMaxima; i++) {    
    let producto = ingresaProducto();
    if (producto == "ESC") {
        console.log ("Has salido de la lista de compra con " + cantidadTotalDeProductos + " artículos")
        break
    }
    let cantidad = ingresaCantidad ()
    
    cantidadTotalDeProductos = Number (cantidadTotalDeProductos) + Number (cantidad)  //cantidadTodalDeProductos += cantidad
    console.log ("Item nº " + i + " ---> " + cantidad + " unidades de " + producto)  
    console.log  ("Total de productos: " + cantidadTotalDeProductos)
}
// console.log ("El contenido de i es: " + i)







// if (total == 10) { 
//     alert ("Llegaste a 10 productos en tu lista") 
// }
