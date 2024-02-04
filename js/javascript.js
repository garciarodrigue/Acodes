document.addEventListener('DOMContentLoaded', function() {
    // Tu código JavaScript aquí
    const container = document.getElementById('stars-container');

    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 3 + 1}s`; // Duración aleatoria de la animación
        star.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio de la animación
        container.appendChild(star);
    }
});