// Selecciona el bot�n
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Funci�n para mostrar el bot�n cuando se hace scroll hacia abajo
function toggleScrollToTopBtn() {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
}

// Funci�n para desplazar suavemente hacia arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// A�ade un evento de scroll para mostrar/ocultar el bot�n
window.addEventListener('scroll', toggleScrollToTopBtn);

// A�ade un evento de clic para el bot�n
scrollToTopBtn.addEventListener('click', scrollToTop);
