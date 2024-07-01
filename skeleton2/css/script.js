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

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


  