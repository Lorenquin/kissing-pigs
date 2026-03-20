document.addEventListener('DOMContentLoaded', () => {
    const pigLeft = document.getElementById('pig-left');
    const pigRight = document.getElementById('pig-right');

    // --- EFECTO PARA "EL GORDITO" (VOS) ---
    pigLeft.addEventListener('click', () => {
        const fart = document.createElement('div');
        fart.innerText = '💨';
        fart.style.position = 'absolute';
        fart.style.fontSize = '3rem';
        fart.style.left = '0px';
        fart.style.bottom = '20px';
        fart.style.transition = 'all 1s ease-out';
        fart.style.pointerEvents = 'none';
        
        pigLeft.appendChild(fart);

        // Animación: se aleja y se desvanece
        setTimeout(() => {
            fart.style.transform = 'translate(-60px, -20px) scale(1.5)';
            fart.style.opacity = '0';
        }, 50);

        setTimeout(() => fart.remove(), 1000);
    });

    // --- EFECTO PARA MARTI ---
    pigRight.addEventListener('click', () => {
        for (let i = 0; i < 6; i++) {
            const flower = document.createElement('div');
            const flowers = ['🌸', '🌹', '🌺', '🌻'];
            flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.position = 'absolute';
            flower.style.fontSize = '1.5rem';
            flower.style.left = '50%';
            flower.style.top = '50%';
            flower.style.transition = 'all 1.5s ease-out';
            flower.style.pointerEvents = 'none';

            pigRight.appendChild(flower);

            // Animación: explosión de flores hacia arriba
            setTimeout(() => {
                const moveX = (Math.random() - 0.5) * 150;
                const moveY = -(Math.random() * 100 + 50);
                flower.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${Math.random() * 360}deg)`;
                flower.style.opacity = '0';
            }, 50);

            setTimeout(() => flower.remove(), 1500);
        }
    });
});
