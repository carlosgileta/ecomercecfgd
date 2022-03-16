// ----------------------navbar------------------------
const navbar = ["Inicio","Productos","Carritos","Contacto"]


const  listaBarra = document.getElementById('listaNavegacion')
let htmllistaBarra = ' '
for (let i = 0; i < navbar.length; i++) {
    htmllistaBarra += `
            
            <li><button class="botonNav">${navbar[i]}</button></li>
            
      `
}
listaBarra.insertAdjacentHTML('beforeend',htmllistaBarra)



// ---------------------------lista de productos---------------
const productos = [
    {
     id: 1,
     nombre: 'Xbox One s',
     image: './asses/imagenes/1.jpg',
     precio: 6000
 },
 {
     id: 2,
     nombre: 'Play Station 5',
     image: './asses/imagenes/2.jpg',
     precio: 6500
 },
 {
     id:3 ,
     nombre: 'Iphone 14',
     image: './asses/imagenes/3.jpeg',
     precio: 15000
 },
 {
     id: 4,
     nombre: 'Pc Gamer',
     image: './asses/imagenes/4.jpg',
     precio: 15000
 },
 {
     id:5 ,
     nombre: 'Monitor',
     image: './asses/imagenes/5.jpg',
     precio: 3500
 },
 {
     id:6 ,
     nombre: 'Peluche de Kirby',
     image: './asses/imagenes/6.jpg',
     precio: 85
 },
 {
     id:7 ,
     nombre: 'Peluche de Star Fox',
     image: './asses/imagenes/7.jpg',
     precio: 100
 },
 {
     id:8 ,
     nombre: 'Nintendo 64',
     image: './asses/imagenes/8.jpg',
     precio: 2500
 },
 {
     id:9 ,
     nombre: 'Ventilador',
     image: './asses/imagenes/9.jpg',
     precio: 550
 }
 ]
//  ------------primera linea de productos--------------------
const infoProductos = document.getElementById('container1')
let htmlProductos1 = ' '
for (let i = 0; i < 3; i++) {
    htmlProductos1 +=`
    <div class="ubicacion-boton">
    <img src=${productos[i].image} class='img-productos'>
    <p>${productos[i].nombre}</p>
    <p>$${productos[i].precio}.00</p>
    <button data-id ="${productos[i].id}" class="boton">${"Añadir"}<img src=${"./asses/imagenes/shopping-cart-white.svg"} id ="carrito-boton"> </button>
    </div>
    `
}
infoProductos.insertAdjacentHTML('beforeend',htmlProductos1)
// ------------------segunda linda de prodctos------------------
const infoProductos2 = document.getElementById('container2')
let htmlProductos2 = ' '
for (let i = 3; i < 6; i++) {
    htmlProductos2 +=`
    
    <div class="ubicacion-boton">
    <img src=${productos[i].image} class='img-productos'>
    <p>${productos[i].nombre}</p>
    <p>$${productos[i].precio}.00</p>
    <button data-id ="${productos[i].id}" class="boton">${"Añadir"}<img src=${"./asses/imagenes/shopping-cart-white.svg"} id ="carrito-boton"> </button>
    </div>
    `
}
infoProductos2.insertAdjacentHTML('beforeend',htmlProductos2)

// --------------------tercerla linea de productos-------------

const infoProductos3 = document.getElementById('container3')
let htmlProductos3 = ' '
for (let i = 6; i < 9; i++) {
    htmlProductos3 +=`
    <div class="ubicacion-boton">
    <img src=${productos[i].image} class='img-productos'>
    <p>${productos[i].nombre}</p>
    <p>$${productos[i].precio}.00</p>
    <button data-id ="${productos[i].id}" class="boton">${"Añadir"}<img src=${"./asses/imagenes/shopping-cart-white.svg"} id ="carrito-boton"> </button>
    </div>
    `
}
infoProductos3.insertAdjacentHTML('beforeend',htmlProductos3)

// ---------------------------CARRITO DE COMPRAS------------------------------
