document.getElementById('id-imagen1').addEventListener('click', function() { 
    var x = document.getElementById('alerta');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
})

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

const añadir = document.getElementById('añadir');
añadir.addEventListener('click',()=>{
    document.querySelector('.producto-img').setAttribute('src','img/1.jpg')
})
