const div = document.querySelector('.contenedor');

div.addEventListener('click', e => {
    if(e.target !== document.querySelector('#button'))
    alert('Hola! Soy el div');
})