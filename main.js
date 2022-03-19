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
     precio: 6000,
   count: 0
 },
 {
     id: 2,
     nombre: 'Play Station 5',
     image: './asses/imagenes/2.jpg',
     precio: 6500,
     count: 0
 },
 {
     id:3 ,
     nombre: 'Iphone 14',
     image: './asses/imagenes/3.jpeg',
     precio: 15000,
     count: 0
 },
 {
     id: 4,
     nombre: 'Pc Gamer',
     image: './asses/imagenes/4.jpg',
     precio: 15000,
     count: 0
 },
 {
     id:5 ,
     nombre: 'Monitor',
     image: './asses/imagenes/5.jpg',
     precio: 3500,
     count: 0
 },
 {
     id:6 ,
     nombre: 'Peluche de Kirby',
     image: './asses/imagenes/6.jpg',
     precio: 85,
     count: 0
 },
 {
     id:7 ,
     nombre: 'Peluche de Star Fox',
     image: './asses/imagenes/7.jpg',
     precio: 100,
     count: 0
 },
 {
     id:8 ,
     nombre: 'Nintendo 64',
     image: './asses/imagenes/8.jpg',
     precio: 2500,
     count: 0
 },
 {
     id:9 ,
     nombre: 'Ventilador',
     image: './asses/imagenes/9.jpg',
     precio: 550,
     count: 0
 }
   
 ]
//  ------------primera linea de productos--------------------
const infoProductos = document.getElementById('container1')
let htmlProductos1 = ' '
for (let i = 0; i < 3; i++) {
    htmlProductos1 +=`
    <div class="ubicacion-boton">
    <img src=${productos[i].image} class='img-productos'>
    <p class = "pProductos">${productos[i].nombre}</p>
    <p class = "pProductos">$${productos[i].precio}.00</p> 
    <button data-id ="${productos[i].id}" class="boton" >${"Añadir"} </button>
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
    <p class = "pProductos">${productos[i].nombre}</p>
    <p class = "pProductos">$${productos[i].precio}.00</p>
    <button data-id ="${productos[i].id}" class="boton" >${"Añadir"} </button>
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
    <p class = "pProductos">${productos[i].nombre}</p>
    <p class = "pProductos">$${productos[i].precio}.00</p>
    <button data-id ="${productos[i].id}" class="boton" > ${"Añadir"} </button>
    </div>
    `
}
infoProductos3.insertAdjacentHTML('beforeend',htmlProductos3)

// ---------------------------CARRITO DE COMPRAS------------------------------

const db = {
    items: productos,
    methods:{
        find:  function (id)  {
           return db.items.find(function (item) {return item.id === id})
        }
        
    }
}
let contador = 0;
let contadorResultado = 0;
const carrito = {
    items: [],
   methods:{
     add: function (id) {
         if (carrito.methods.yaEstaAgregado(id)) {
           
            
            
         }else{
            const item = db.methods.find(id)
            carrito.items.push(item)
            contador = contador + item.precio
         }
        
         document.getElementById("resultado").innerHTML ='$'+contador+'.00';
         console.log(contador)
      
     },
     remove: function(id) {
         
            carrito.items = carrito.items.filter(function (item) {return item.id !== id} )         
     },
     yaEstaAgregado: function (id){

        return carrito.items.find(function(item){return item.id === id})
           
       },
    
     render: function () {
       let html = ''
           html += '<ul class = "containerCarrito1">'
           html += carrito.items.map((item) =>{return `<div class = "elementoAddCarrito"> <div class = "carritoImagen" > <li><img src="${item.image}" id = "desdeIMGcarrito"></li></div> <li> ${item.nombre}</li> <li > ${item.precio}</li></div><li><button class = "boton-borrado" data-id="${item.id}" data-precio = "${item.precio}"> Borrar </button></li></div>`}).join('')
           html += '</ul>'
           console.log(html)
           return html
    },
    removeAll: function () {
        carrito.items = carrito.items.filter(function (item) {return item !== item} )
    }
   }

}

const carritoCompras = document.getElementById('carrito-compras')
const contenedorCarrito = document.getElementById('contenedorDeContenedores')
const productosComprados = document.getElementsByClassName('.elementoAddCarrito')


carritoCompras.innerHTML = carrito.methods.render()

contenedorCarrito.addEventListener('click',(e) =>{
  
    if(e.target.matches('.boton')){
    const id = e.target.dataset.id
     carrito.methods.add(+id)
     carritoCompras.innerHTML = carrito.methods.render()
     }
     if(e.target.matches('.boton-borrado')) {
         
        const id = e.target.dataset.id
        const precio = e.target.dataset.precio
        contador = contador - (+precio)
        document.getElementById("resultado").innerHTML = '$'+contador+'.00';
        console.log(contador)
        console.log(+id)
     carrito.methods.remove(+id)
     carritoCompras.innerHTML = carrito.methods.render()
     
     }
     if (e.target.matches('.btnPagar')) {
         if (contador !== 0) {
            alert('Gacias por su compras su total es de '+'$'+contador+'.00') 
         } else{
             alert('Aun no tiene nada en su carrito :(')
         }
        contador =  0
        document.getElementById("resultado").innerHTML =contador;
         console.log(contador)
         carrito.methods.removeAll()
         carritoCompras.innerHTML = carrito.methods.render()
         
                   
    }
})
