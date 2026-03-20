// Restart animation on click
document.addEventListener('click', function() {
    const pigs = document.querySelectorAll('.pig');
    pigs.forEach(pig => {
        pig.style.animation = 'none';
        setTimeout(() => {
            pig.style.animation = '';
        }, 10);
    });
    
    // Trigger hearts animation
    const container = document.querySelector('.container');
    container.style.animation = 'none';
    setTimeout(() => {
        container.style.animation = '';
    }, 10);
});

console.log('🐷 Kissing pigs animation loaded!');