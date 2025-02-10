document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");

    function autoScroll() {
        if (carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth) {
            carousel.scrollBy({ left: 2, behavior: "smooth" }); // Avanza poco a poco
        } else {
            clearInterval(scrollInterval); // Detiene el movimiento al final
        }
    }

    let scrollInterval = setInterval(autoScroll, 20); // Velocidad de desplazamiento

    // Pausa al pasar el mouse
    carousel.addEventListener("mouseenter", () => clearInterval(scrollInterval));
    carousel.addEventListener("mouseleave", () => {
        scrollInterval = setInterval(autoScroll, 20);
    });
});