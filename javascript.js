// document.getElementById('id-imagen1').addEventListener('click', function() { 
//     var x = document.getElementById('alerta');
//     if (x.style.display === 'none') {
//         x.style.display = 'block';
//     } else {
//         x.style.display = 'none';
//     }
// })

// // document.getElementById('id-imagen2').addEventListener('click', function() { 
// //     var x = document.getElementById('alerta1');
// //     if (x.style.display === 'none') {
// //         x.style.display = 'block';
// //     } else {
// //         x.style.display = 'none';
// //     }
// // })

// document.getElementById('id-imagen3').addEventListener('click', function() { 
//     var x = document.getElementById('alerta2');
//     if (x.style.display === 'none') {
//         x.style.display = 'block';
//     } else {
//         x.style.display = 'none';
//     }
// })

// document.getElementById('id-imagen4').addEventListener('click', function() { 
//     var x = document.getElementById('alerta3');
//     if (x.style.display === 'none') {
//         x.style.display = 'block';
//     } else {
//         x.style.display = 'none';
//     }
// })
const close = document.querySelector('.close-modal');
close.addEventListener('click',()=>{
    document.querySelector('.modal').style.setProperty('display','none')
})

const general = document.getElementById('todo')

general.addEventListener('click',e=>{
    if(e.target.classList.contains('image')){
        document.querySelector('.modal').style.setProperty('display','flex')
        
        modal(e.target.parentElement)
        
    }
    e.stopPropagation()

})
//atributos
const  modal = (hijo)=>{
    let image = document.getElementById('imgModal')
    let precio = document.getElementById('precio')
    let titulo = document.getElementById('nombre')

    const producto = {
        nombre: hijo.querySelector('.titulo').textContent,
        precio: hijo.querySelector('.precio').textContent,
        imagen:hijo.querySelector('.image').src
    }
    precio.value = producto.precio
    titulo.value = producto.nombre
    image.setAttribute('src',producto.imagen)
   
}

const cesta = {}
const añadir = document.getElementById('añadir')
añadir.addEventListener('click',(e)=>{
    
    let cantidad = document.querySelector('.cantidad').value
    // let image = document.getElementById('imgModal')
    // let precio = document.getElementById('precio')
    // let titulo = document.getElementById('nombre')
    

    const producto = {
        nombre: document.querySelector('.nombre').value,
        precio: document.querySelector('#precio').value,
        imagen:document.querySelector('#imgModal').src,
        cantidad:cantidad
    }
    cesta[producto.nombre]= {...producto}
    let llenado = ''
    console.log(cesta)
    Object.values(cesta).forEach(pro =>{
        llenado += `
        
    <div class="carrito">
    <h2 class="nombre-cesta">${pro.nombre}</h2>
    <img src="${pro.imagen}" alt="" class="image-cesta">
    <p class="precio-cesta">${pro.precio}</p>
    <p class="cantidad">${pro.cantidad}</p>
   </div>`

       
       
    })
    document.querySelector('.cesta').innerHTML = llenado
    document.querySelector('.modal').style.setProperty('display','none')
    
    
    

})




//   //FUNCION QUE MUESTRA LOS PRODUCTOS AL TOCAR
//   const setModal = (objeto) =>{
//     let nombre = document.getElementById('nombre')
//     let precio = document.getElementById('precio')
//     let imageProducto = document.querySelector('.imageProducto')
//     const producto = {
//       id:objeto.querySelector('.productoSelecionado').dataset.id,
//       nombre: objeto.querySelector('.nombreProducto').textContent,
//       precio:objeto.querySelector('.precioProducto').textContent,
//       imagen:objeto.querySelector('.productoSelecionado').src,
//     }
//     nombre.value= producto.nombre
//     precio.value=producto.precio
//     imageProducto.setAttribute('src',producto.imagen)
//   }