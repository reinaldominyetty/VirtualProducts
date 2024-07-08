document.addEventListener('DOMContentLoaded', () => {
    const suscripcionForm = document.getElementById('suscripcion-form');

    suscripcionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Gracias por suscribirte con el correo: ${email}`);
        e.target.reset();
    });

    // Animación para las secciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Añadir al final del archivo script.js

document.addEventListener('DOMContentLoaded', () => {
    // ... (código existente)

    // Animación para los productos y secciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.producto, .sobre-nosotros, section').forEach(element => {
        observer.observe(element);
    });

    // Funcionalidad para agregar al carrito (simplificada)
    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', () => {
            alert('Producto agregado al carrito');
        });
    });
});