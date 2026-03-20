// Esperar a que cargue la página
document.addEventListener('DOMContentLoaded', () => {
    const pigLeft = document.getElementById('pig-left');
    const pigRight = document.getElementById('pig-right');

    // --- Efecto para EL GORDITO (Vos) ---
    pigLeft.addEventListener('click', () => {
        // Crear el emoji del pedo
        const fart = document.createElement('div');
        fart.innerText = '💨'; // Emoji de pedo
        fart.style.position = 'absolute';
        fart.style.fontSize = '4rem'; // Tamaño
        fart.style.left = '50px'; // Un poco atrás del chanchito
        fart.style.top = '40px'; 
        fart.style.opacity = '1';
        fart.style.transition = 'all 1.5s ease-out';
        fart.style.zIndex = '10';

        // Añadirlo al chanchito
        pigLeft.appendChild(fart);

        // Animación (se mueve y desaparece)
        setTimeout(() => {
            fart.style.transform = 'translate(-50px, -20px)'; // Se va para atrás y arriba
            fart.style.opacity = '0';
        }, 100);

        // Borrar el emoji después
        setTimeout(() => {
            fart.remove();
        }, 1600);
    });

    // --- Efecto para MARTI ---
    pigRight.addEventListener('click', () => {
        // Crear lluvia de flores
        for (let i = 0; i < 8; i++) {
            const flower = document.createElement('div');
            const flowerEmojis = ['🌸', '🌹', '🌺', '🌻', '🌼'];
            flower.innerText = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
            flower.style.position = 'absolute';
            flower.style.fontSize = (Math.random() * (2 - 1) + 1) + 'rem'; // Tamaños variados
            
            // Posición inicial (alrededor de Marti)
            flower.style.left = (Math.random() * (120 - 20) + 20) + 'px';
            flower.style.top = (Math.random() * (100 - 20) + 20) + 'px';
            
            flower.style.opacity = '1';
            flower.style.transition = 'all 2s ease-out';
            flower.style.zIndex = '10';

            pigRight.appendChild(flower);

            // Animación (vuelan hacia arriba y se desvanecen)
            setTimeout(() => {
                const moveX = (Math.random() - 0.5) * 100; // Movimiento horizontal random
                flower.style.transform = `translate(${moveX}px, -80px) rotate(${Math.random() * 360}deg)`;
                flower.style.opacity = '0';
            }, 100);

            // Borrar el emoji después
            setTimeout(() => {
                flower.remove();
            }, 2100);
        }
    });
});
