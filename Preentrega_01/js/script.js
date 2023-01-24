//Funciones a utilizar en el programa
function ingresaProducto() {
    let p = prompt ("Ingrese un producto o escriba ESC para salir");
    listaProducto.push (p);
    while (p == "") {
        p = prompt ("El producto ingresado está en blanco, ingrese un producto o escriba ESC para salir");
    }
    return p;
}

function ingresaCantidad() {
    let c = prompt ("Ingrese la cantida deseada");
    listaCantidad.push (c);
    while (c =="") {
        c = prompt ("La cantidad ingresada está en blanco, ingrese una cantidad");
    }
    return c;
}

//Variables
let listaProducto = [];
let listaCantidad = [];

//Inicio del programa
alert ("Bienvenido a tu lista de compra, puedes ingresar los items a comprar");

//Solicito productos y cantidades dentro de un ciclo FOR //Establezco ESC como variable de salida
// console.log ("El contenido de i es: " + i)
let cantidadTotalDeProductos = 0;
let producto;
let cantidad;
let i = 0;
//for (i = 1; i <= cantidadMaxima; i++) {   
producto = ingresaProducto();
while (producto != "ESC") {
    i++;
    //if (producto == "ESC") {
      //  console.log ("Has salido de la lista de compra con " + cantidadTotalDeProductos + " artículos")
        //break
    //}
    cantidad = ingresaCantidad();
    //cantidadTotalDeProductos = Number (cantidadTotalDeProductos) + Number (cantidad)  
    cantidadTotalDeProductos += Number(cantidad);
    console.log ("Item nº " + i + " ---> " + cantidad + " unidades de " + producto);  
    console.log  ("Total de productos: " + cantidadTotalDeProductos);
    producto = ingresaProducto();
}

//Muestro lista creada al final
let textoAmostrar = "Lista de compra creada:\n";
for (i = 0; i < listaCantidad.length; i++){
    textoAmostrar += "Artículo: " + listaProducto[i] + "\t" + "Cantidad: " + listaCantidad[i] + "\n";
}
alert (textoAmostrar);

//Pregunto (búsqueda) por un artículo en particular
let cantidadEncontrada;
let productoBuscado = prompt ("Ingrese un producto para saber la cantidad a comprar");
let posicionProductoBuscado = listaProducto.indexOf(productoBuscado);
if (posicionProductoBuscado == -1){
    cantidadEncontrada = 0;
}
else{
    cantidadEncontrada = listaCantidad[posicionProductoBuscado];
}

alert ("La cantidad a comprar de " + productoBuscado + " es " + cantidadEncontrada + " unidades" );

/* const listadoCursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
]

const resultado = listadoCursos.find((curso) => curso.nombre === "ReactJS")
const resultado2 = listadoCursos.find((curso) => curso.nombre === "DW")

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined */