// Modifica el primer "¡Hola mundo!" para decir "Adiós"
document.querySelector('h1').textContent = 'Adiós';

// Cambia el color de fuente de un encabezado a naranja
document.querySelectorAll('h1')[1].style.color = 'violet';

// Agrega un encabezado en el que se pueda hacer clic y que cambie el color de la fuente a marrón
const nuevoEncabezado = document.createElement('h1');
nuevoEncabezado.textContent = 'Haz clic para cambiar el color';
nuevoEncabezado.addEventListener('click', function() {
    this.style.color = 'brown';
});
document.body.appendChild(nuevoEncabezado);
