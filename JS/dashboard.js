/* Desplazamiento en el menú de las Listas */

function moveList(direction) {
  const listContainer = document.querySelector('.listas');
  const scrollAmount = 200; // Cantidad de píxeles a mover

  // Mover el contenedor en la dirección indicada
  listContainer.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

function checkScrollButtons() {
  const listContainer = document.querySelector('.listas');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');
  
  // Verificamos si el contenido se desborda
  if (listContainer.scrollWidth > listContainer.clientWidth) {
    // Si hay suficiente contenido para desplazar, mostramos los botones
    leftBtn.style.display = 'block';
    rightBtn.style.display = 'block';

    // Comprobamos si estamos en el inicio (izquierda) o final (derecha)
    if (listContainer.scrollLeft <= 0) {
      // Si estamos en el inicio, ocultamos el botón de la izquierda
      leftBtn.style.display = 'none';
    }

    if (listContainer.scrollLeft + listContainer.clientWidth >= listContainer.scrollWidth) {
      // Si estamos al final, ocultamos el botón de la derecha
      rightBtn.style.display = 'none';
    }
  } else {
    // Si no hay suficiente contenido para desplazar, ocultamos los botones
    leftBtn.style.display = 'none';
    rightBtn.style.display = 'none';
  }
}

document.querySelector('.listas').addEventListener('scroll', checkScrollButtons);

// Llamar a la función cuando la página cargue o cambie el tamaño de la ventana
window.addEventListener('load', checkScrollButtons);
window.addEventListener('resize', checkScrollButtons); // Revisa en caso de que el tamaño de la ventana cambie



/* Mostrar Modales de los Posts */
$('#idModalPost').on('shown.bs.modal', function () {
  $('#idModalPost').trigger('focus')
})