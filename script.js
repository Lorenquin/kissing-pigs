document.addEventListener('DOMContentLoaded', () => {
    const pigLeft = document.getElementById('pig-left');
    const pigRight = document.getElementById('pig-right');

    // --- Efecto para "EL GORDITO" (Vos) -> PEDO ---
    pigLeft.addEventListener('click', () => {
        const fart = document.createElement('div');
        fart.innerText = '💨'; // Emoji pedo
        fart.style.position = 'absolute';
        fart.style.fontSize = '3.5rem';
        fart.style.left = '0px'; // Sale por detrás
        fart.style.bottom = '20px';
        fart.style.transition = 'all 1s ease-out';
        fart.style.pointerEvents = 'none'; // No interfiere con clics
        fart.style.zIndex = '10';
        
        pigLeft.appendChild(fart);

        // Animación JS: se aleja y se desvanece
        setTimeout(() => {
            fart.style.transform = 'translate(-80px, -30px) scale(1.8)';
            fart.style.opacity = '0';
        }, 50);

        // Borrar el emoji después de la animación
        setTimeout(() => fart.remove(), 1000);
    });

    // --- Efecto para "MARTI" (Ella) -> FLORES ---
    pigRight.addEventListener('click', () => {
        for (let i = 0; i < 6; i++) { // Explosión de 6 flores
            const flower = document.createElement('div');
            const flowers = ['🌸', '🌹', '🌺', '🌻', '🌼'];
            flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.position = 'absolute';
            flower.style.fontSize = '1.8rem';
            flower.style.left = '50%';
            flower.style.top = '50%';
            flower.style.transition = 'all 1.8s ease-out';
            flower.style.pointerEvents = 'none';
            flower.style.zIndex = '10';

            pigRight.appendChild(flower);

            // Animación JS: explosión hacia arriba y lados
            setTimeout(() => {
                const moveX = (Math.random() - 0.5) * 180; // Movimiento horizontal random
                const moveY = -(Math.random() * 120 + 60); // Siempre hacia arriba
                flower.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${Math.random() * 360}deg)`;
                flower.style.opacity = '0';
            }, 50);

            // Borrar el emoji después de la animación
            setTimeout(() => flower.remove(), 1800);
        }
    });
});
