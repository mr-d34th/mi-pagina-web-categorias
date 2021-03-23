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
    let contadorCesta = document.querySelector('.carrito-numero')
    let cantidad = document.querySelector('.cantidad')
    let subtotal = document.querySelector('.subtotal')
    let longitud =0
    const producto = {
        nombre: document.querySelector('.nombre').value,
        precio: document.querySelector('#precio').value,
        imagen:document.querySelector('#imgModal').src,
        cantidad:cantidad.value,
        subtotal:precio.value * cantidad.value
    }
    cesta[producto.nombre]= {...producto}
    let llenado = ''
    console.log(cesta)
    
    Object.values(cesta).forEach(pro =>{
        llenado += `
        
    <div class="carrito">
        <img src="${pro.imagen}" alt="" class="image-cesta">
        <div class="descripcion-cesta">
            <p class="nombre-cesta">Descripcion: ${pro.nombre}</p>
            <p class="cantidad">Cantidad :${pro.cantidad}</p>
        </div>
        <div class="precio-subtotal">
            <p class="precio-cesta">Precio: ${pro.precio}</p>
            <p class="subtotal">SubTotal: `+subtotal+` </p>
        </div>
   </div>`
    })
    document.querySelector('.cesta').innerHTML = llenado
    document.querySelector('.modal').style.setProperty('display','none')
    document.querySelector('.contenedor-cesta').style.setProperty('display','none')
    for(let i in cesta){
        longitud+=1;
      }
      contadorCesta.textContent =longitud
    cantidad.value = ''
})

// VER CARRITO DE COMPRAS
document.querySelector('#cesta').addEventListener('click',()=>{
    document.querySelector('.grupo').style.setProperty('display','none')
    document.querySelector('.contenedor-cesta').style.setProperty('display','flex')
    document.querySelector('.banner').style.setProperty('display','none')
})

document.querySelector('#venta').addEventListener('click',()=>{
    document.querySelector('.grupo').style.setProperty('display','flex')
    document.querySelector('.contenedor-cesta').style.setProperty('display','none')
    document.querySelector('.banner').style.setProperty('display','flex')
})