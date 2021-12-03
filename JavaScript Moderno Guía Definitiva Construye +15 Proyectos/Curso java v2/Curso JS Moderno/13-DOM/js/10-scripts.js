const enlace = document.createElement('a');
enlace.textContent = 'Nuevo enlace Texto'
enlace.href = 'link de href';

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace);


