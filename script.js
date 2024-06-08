// Selecciona el botón
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Función para mostrar el botón cuando se hace scroll hacia abajo
function toggleScrollToTopBtn() {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
}

// Función para desplazar suavemente hacia arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Añade un evento de scroll para mostrar/ocultar el botón
window.addEventListener('scroll', toggleScrollToTopBtn);

// Añade un evento de clic para el botón
scrollToTopBtn.addEventListener('click', scrollToTop);
