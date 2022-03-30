const carrito = validarStorageCarrito();

function validarStorageCarrito(){
    if(localStorage.getItem("carrito") != null){
        const storageProductos = JSON.parse(localStorage.getItem("carrito"));
        return storageProductos;
    }else{
        return [];
    }
}

document.getElementById("cantidad-prod").innerHTML = carrito.length;

const agregarAlCarrito = (idProducto) => {
  
    const productosAgregados = productos.find(producto => producto.id === idProducto); 
   // Agregando al carrito
   carrito.push(productosAgregados);

   // Actualizando el storage del carrito
   localStorage.setItem("carrito", JSON.stringify(carrito));

   // Actualizando el html
   document.getElementById("cantidad-prod").innerHTML = carrito.length;

};

// const carrito = [];

const productos = [
    { id: 1, titulo: "Aromatizador", precio: 1500, stock:10 },
    { id: 2, titulo: "Sillón", precio: 35000, stock:32 },
    { id: 3, titulo: "Lámpara", precio: 11300, stock:2 },
    { id: 4, titulo: "Perchero", precio: 6500, stock: 56 },
    { id: 5, titulo: "Sillón", precio: 28500, stock: 15 },
    { id: 6, titulo: "Velas", precio: 1300, stock: 20 },
    { id: 7, titulo: "Macetero simple", precio: 2500, stock: 22 },
    { id: 8, titulo: "Macetero Doble", precio: 4000, stock: 22 },
    { id: 9, titulo: "Espejo", precio: 3250, stock: 70 },
    { id: 10, titulo: "Almohadon", precio: 6800, stock: 33 },
    { id: 11, titulo: "Bordados", precio: 1000, stock: 22 },
    { id: 12, titulo: "Almohadon especial", precio: 9800 , stock: 26 },
];

generarCards(productos);

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="producto">
        <p>${elementoDelArray.titulo}</p>
        <div class="producto--prod${elementoDelArray.id}"> </div>
        <p>$${elementoDelArray.precio}</p>
        <button onclick='agregarAlCarrito(${elementoDelArray.id});'>Agregar al Carrito</button>
        
    </div>`;
    
    });
    
    mostrarCardsEnElHTML(acumuladorDeCards);
}

function mostrarCardsEnElHTML(cards) {
    document.getElementById("product").innerHTML = cards;
};

function buscarProducto() {
    const tecla = document.getElementById("buscarProducto");

    tecla.addEventListener('keyup', function (event) {

        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("botonBuscar").click();
        }
    });
    const nombreProductoBuscado = document.getElementById("buscarProducto").value.toUpperCase().trim();
    // console.log(nombreProductoBuscado);
    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
        // console.log(productosEncontrados);
    });

    generarCards(productosEncontrados);
}


function reset (){
    const reset = document.getElementById("botonBuscar").value;
console.log(reset);
document.getElementById("botonBuscar").value = "";
console.log(reset);
}



