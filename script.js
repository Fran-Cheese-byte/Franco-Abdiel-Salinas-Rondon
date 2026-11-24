
// Activar las animaciones
document.documentElement.classList.add("js");

// Seleccionar todos los elementos animados
const elementos = document.querySelectorAll(".reveal");

// Crear observador
const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("visible");

            // Dejar de observar cuando ya apareció
            observador.unobserve(entrada.target);

        }

    });

}, {
    threshold: 0.12
});

// Aplicar observador a cada sección
elementos.forEach((elemento) => {

    observador.observe(elemento);

});
